const connectDatabase = require("../module/luxstay")
const slugify = require('slugify')

const placeController = {
    getAllPlaceAndTotalRoom: async(neq, res, next) => {
        try {
            const [placeAll, placeAllFiled] = await connectDatabase.execute(
                "SELECT place.id, place.name_place, place.slug_place,place.img_place, COUNT(*) AS quantity FROM place JOIN room on place.id = room.id_place GROUP BY place.id"
                )
            return res.status(200).send(placeAll)
        } catch (error) {
            return res.status(403).send(error.message)
        }
        
    },
    addPlace: async(req, res, next) => {
        try {
            const slugPlace = slugify(req.body.namePlace, {
                replacement: '-',  // replace spaces with replacement character, defaults to `-`
                remove: undefined, // remove characters that match regex, defaults to `undefined`
                lower: false,      // convert to lower case, defaults to `false`
                strict: false,     // strip special characters except replacement, defaults to `false`
                locale: 'vi',      // language code of the locale to use
                trim: true         // trim leading and trailing replacement chars, defaults to `true`
              })
            const newPlace = [
                req.body.namePlace,
                slugPlace,
                req.body.countryPlace,
                req.user.id
            ]

            const [checkPlace, checkPlaceFiled] = await connectDatabase.execute(
                "SELECT * FROM `place`WHERE name_place = ? AND country_place = ?",
                [req.body.namePlace, req.body.countryPlace])

            if(checkPlace.length != 0) {
                return res.status(200).send("The location you just added already exists, please try again")
            }

            await connectDatabase.execute(
                "INSERT INTO `place`(`name_place`, `slug_place`, `country_place`, `id_user_create`) VALUES (?, ?, ?, ?)",
                newPlace)
            return res.status(200).send("Successfully Added Location")
        } catch (error) {
            return res.status(403).send(error.message)      
        }
    }
}

module.exports = placeController
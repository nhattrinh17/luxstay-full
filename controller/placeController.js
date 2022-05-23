const connectDatabase = require("../module/luxstay")

const placeController = {
    getAllPlace: async(neq, res, next) => {
        try {
            const [placeAll, placeAllFiled] = await connectDatabase.execute("SELECT name_place, country_place from place")
            return res.status(200).send(placeAll)
        } catch (error) {
            return res.status(403).send(error.message)
        }
        
    },
    addPlace: async(req, res, next) => {
        try {
            const newPlace = [
                req.body.namePlace,
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
                "INSERT INTO `place`(`name_place`, `country_place`, `id_user_create`) VALUES (?, ?, ?)",
                newPlace)
            return res.status(200).send("Successfully Added Location")
        } catch (error) {
            return res.status(403).send(error.message)      
        }
    }
}

module.exports = placeController
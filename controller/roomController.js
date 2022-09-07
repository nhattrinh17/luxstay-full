const connextDatabase = require("../module/luxstay")

const roomController = {
    getRoomByTagName: async(req, res, next) => {
        try {
            const tagName = req.params.nameRoom
            const type = req.params.id 

            const data = []
            if(type == 'less') {
                const [rooms, roomsFiled] = await connextDatabase.execute(
                    "SELECT * FROM room WHERE name_room LIKE ? LIMIT 5",
                    [tagName]
                )
                
                data = [...rooms]
            } else {
                const [rooms, roomsFiled] = await connextDatabase.execute(
                    "SELECT * FROM room WHERE name_room LIKE ?",
                    [tagName]
                )
                
                data = [...rooms]
            }

            return res.status(200).send(data)
            
        } catch (error) {
            return res.status(403).send(error.message)
        }
    },
    getRoomById:async (req, res, next) => {
        try {
            const idRoom = req.params.id

            const [room, roomFiled] = await connextDatabase.execute(
                "SELECT * FROM room WHERE id_room = ?",
                [idRoom]
            )

            const [roomDetail, roomDetailFiled] = await connextDatabase.execute(
                "SELECT * FROM roomdetails WHERE id_room = ?",
                [idRoom]
            )

            const [roomRoomamenities, roomRoomamenitiesFiled] = await connextDatabase.execute(
                "SELECT * FROM roomamenities WHERE id_room = ?",
                [idRoom]
            )

            const roomData = {...room[0], ...roomDetail[0], ...roomRoomamenities[0]}
            return res.status(200).send(roomData)
        } catch (error) {
            return res.status(403).send(error.message)
        }
    },
    getRoomByPlace: async (req, res) => {
        try {
            const {place, page = 1, type} = req.query

            let sql = "SELECT * FROM room INNER JOIN place ON place.slug_place = ? AND place.id = room.id_place "

            if(type) {
                sql += `ORDER BY room.price_per_night ${type} `
            }

            sql += `LIMIT ${(+page - 1) * 20} , ${page * 20}`

            
            const [rooms, roomsFiled] = await connextDatabase.execute(sql, [place])
            
            return res.status(200).send(rooms)

        } catch (error) {
            return res.status(403).send(error.message)
        }
    },
    addRoom: async (req, res, next) => {
        try {
            const idRoom = Math.floor(new Date().getTime() / 1711);

            const newRoom = [
                idRoom,
                req.body.nameRoom,
                req.body.imgsRoom,
                req.body.addressRoom,
                req.body.numberBedrooms,
                req.body.kindOfRoom,
                req.body.pricePerNight,
                req.body.idPlace,
                req.user.id,
            ]

            const roomDetail = [
                idRoom,
                req.body.areaRoom,
                req.body.descRoom,
                req.body.numberBathrooms,
                req.body.numberBeds,
                req.body.maximumGuests,
            ]

            const rooMamenities = [
                idRoom,
                req.body.isWifi,
                req.body.isTV,
                req.body.isHarmonic,
                req.body.isInternet,
                req.body.isWashingMachine,
                req.body.isBathTools,
                req.body.isRefrigerator,
                req.body.isElectricStove,
                req.body.isBalcony,
            ]

            // return res.send([...newRoom, ...roomDetail, ...rooMamenities])
    
            await connextDatabase.execute(
                "INSERT INTO room(id_room, name_room, imgs_room, address_room, number_bedrooms, kind_of_room, price_per_night, id_place, id_user_create) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                newRoom
            )
            
            await connextDatabase.execute(
                "INSERT INTO roomdetails(id_room, area_room, desc_room, number_bathrooms, number_beds, maximum_guests) VALUES (?, ?, ?, ?, ?, ?)",
                roomDetail    
            )

            await connextDatabase.execute(
                "INSERT INTO roomamenities(id_room, isWifi, isTV, isHarmonic, isInternet, isWashingMachine, isBathTools, isRefrigerator, isElectricStove, isBalcony) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                rooMamenities
            )
            return res.status(200).send("You have successfully created a room")
        } catch (error) {
            return res.status(403).send(error.message)
        }
    },
    editRoom: async (req, res, next) => {
        try {
            const idRoom = req.params.id

            const newRoom = [
                req.body.nameRoom,
                req.body.imgsRoom,
                req.body.numberBedrooms,
                req.body.kindOfRoom,
                req.body.pricePerNight,
                req.body.idPlace,
                req.user.id,
                idRoom,
            ]

            const roomDetail = [
                req.body.areaRoom,
                req.body.descRoom,
                req.body.numberBathrooms,
                req.body.numberBeds,
                req.body.maximumGuests,
                idRoom,
            ]

            const rooMamenities = [
                req.body.isWifi,
                req.body.isTV,
                req.body.isHarmonic,
                req.body.isInternet,
                req.body.isWashingMachine,
                req.body.isBathTools,
                req.body.isRefrigerator,
                req.body.isElectricStove,
                req.body.isBalcony,
                idRoom,
            ]
            
            await connextDatabase.execute(
                "UPDATE  room  SET name_room = ?, imgs_room = ?, number_bedrooms = ?, kind_of_room = ?, price_per_night = ?, id_place = ?, id_user_create = ? WHERE id_room = ?",
                newRoom
            )
                        
            await connextDatabase.execute(
                "UPDATE  roomdetails SET area_room = ?, desc_room = ?, number_bathrooms = ?, number_beds = ?, maximum_guests = ? WHERE id_room = ?",
                roomDetail    
            )

            await connextDatabase.execute(
                "UPDATE roomamenities SET isWifi= ?, isTV= ?, isHarmonic= ?, isInternet= ?, isWashingMachine= ?, isBathTools= ?, isRefrigerator= ?, isElectricStove= ?, isBalcony= ?  WHERE id_room = ?",
                rooMamenities
            )
            
            return res.status(200).send("You have successfully edited a room's data")
        } catch (error) {
            return res.status(403).send(error.message)
        }
    },
    deleteRoom: async (req, res, next) => {
        try {
            const idRoom = req.params.id

            await connextDatabase.execute(
                "DELETE FROM roomdetails WHERE roomdetails.id_room = ?",
                [idRoom]   
            )

            await connextDatabase.execute(
                "DELETE FROM roomamenities WHERE roomamenities.id_room = ?",
                [idRoom]
                )
                
            await connextDatabase.execute(
                "DELETE FROM room WHERE room.id_room = ?",
                [idRoom]
            )

            return res.status(200).send("You have permanently deleted a room's data")
        } catch (error) {
            return res.status(403).send(error.message)
        }
    },
}

module.exports = roomController
const connextDatabase = require("../module/luxstay")

const roomController = {
    getRoom:async (req, res, next) => {
        try {
            const idRoom = req.params.id
    
            const [room, roomFiled] = await connextDatabase.execute(
                "SELECT * FROM `room` WHERE id_room = ?",
                [idRoom]
            )
            
            const [roomDetail, roomDetailFiled] = await connextDatabase.execute(
                "SELECT * FROM `roomdetails` WHERE id_room = ?",
                [idRoom]
            )

            const [roomRoomamenities, roomRoomamenitiesFiled] = await connextDatabase.execute(
                "SELECT * FROM `roomamenities` WHERE id_room = ?",
                [idRoom]
            )

            const roomData = {...room[0], ...roomDetail[0], ...roomRoomamenities[0]}
            return res.status(200).send(roomData)
        } catch (error) {
            return res.status(403).send(error.message)
        }
    },
    addRoom: async (req, res, next) => {
        try {
            const [quantityRoom, quantityRoomFiled] = await connextDatabase.query("SELECT COUNT(*) AS quantily FROM room")

            const idRoom = quantityRoom[0].quantily + 1

            const newRoom = [
                idRoom,
                req.body.nameRoom,
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
    
            await connextDatabase.execute(
                "INSERT INTO room(id_room, name_room, number_bedrooms, kind_of_room, price_per_night, id_place, id_user_create) VALUES (?, ?, ?, ?, ?, ?, ?)",
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
                "UPDATE  room  SET name_room = ?, number_bedrooms = ?, kind_of_room = ?, price_per_night = ?, id_place = ?, id_user_create = ? WHERE id_room = ?",
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
    }
}

module.exports = roomController
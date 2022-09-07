const express = require("express")
const dotenv = require("dotenv").config();
const cors = require("cors")
const cookieParser = require("cookie-parser");
const route = require("./route");

const app = express()


app.use(cors({ 
    credentials: true, 
    origin: true 
}))
app.use(cookieParser())
app.use(express.json())

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running http://localhost:"+PORT)
})

route(app)
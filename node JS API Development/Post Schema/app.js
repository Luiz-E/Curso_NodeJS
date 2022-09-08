const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
    console.log("DB connected")
})

mongoose.connection.on("error", (err) => {
    console.log(err.message)
})

const postRoutes = require("./routes/post")

app.use(bodyParser.json())
app.use(morgan("dev"))
app.use("/", postRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})

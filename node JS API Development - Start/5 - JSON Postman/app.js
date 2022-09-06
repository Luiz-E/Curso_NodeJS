const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const dotenv = require("dotenv")
dotenv.config()

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log("DB Connected"))

mongoose.connection.on("error", (err) => {
    console.log(`DB connection error: ${err.message}`)
})

const postRoutes = require("./routes/post")

app.use(morgan("dev"))
app.use("/", postRoutes)

app.listen(process.env.PORT, () =>
    console.log(`server is running on port ${process.env.PORT}`)
)

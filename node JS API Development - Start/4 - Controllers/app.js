const express = require("express")
const app = express()
const morgan = require("morgan")

const postRoutes = require("./routes/posts")

app.use(morgan("dev"))

app.use("/", postRoutes)
app.listen("8080", () => "Server is running")

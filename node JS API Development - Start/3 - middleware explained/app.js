const express = require("express")
const app = express()
const morgan = require("morgan")

const { getPosts } = require("./routes/posts")

const myMiddleware = (req, res, next) => {
    console.log("middleware applied!!!")
    next()
}

app.use(morgan("dev"))
app.use(myMiddleware)

app.get("/", getPosts)

app.listen("8080", () => console.log("server is running"))

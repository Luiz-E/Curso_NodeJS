const { response } = require("express")
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("hey what up from express?")
})
app.get("/about", (req, res) => {
    res.send("hey what up from express?")
})

app.listen(3000)

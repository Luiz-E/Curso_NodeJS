const fs = require("fs")
const file = "target.txt"
fs.watch(file, () => {
    console.log(`File changed`)
})

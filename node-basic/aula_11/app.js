const fs = require("fs")
const fileName = "target.txt"

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

console.log(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur, assumenda, reiciendis corporis dolore pariatur tenetur aliquid, molestiae delectus provident numquam repellendus repudiandae! Corrupti perspiciatis nostrum culpa ipsum officia dolore?"
)

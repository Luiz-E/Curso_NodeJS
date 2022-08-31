const fs = require("fs")
const fileName = "target.txt"

const data = fs.readFileSync(fileName)
console.log(data.toString())

console.log(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur, assumenda, reiciendis corporis dolore pariatur tenetur aliquid, molestiae delectus provident numquam repellendus repudiandae! Corrupti perspiciatis nostrum culpa ipsum officia dolore?"
)

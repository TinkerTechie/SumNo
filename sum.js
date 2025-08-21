const fs = require('fs')
const a = fs.readFileSync("src/input.txt","utf-8")
const b = a.split("\n")
const c = []
let total = 0
for (let i of b) {
    c.push(i.split(" "))
}
for (let i of c) {
    total += Number(i[1])
}
console.log(total)
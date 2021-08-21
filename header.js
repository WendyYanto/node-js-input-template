const readline = require('readline')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const output = value => console.log(value)

module.exports = {
    input,
    output
}
// [INFO] import input method here
const { input, output } = require('./header.js')

// [INFO] Run your node.js script here
input.question("What is your name ? ", (name) => {
  output(`You inputted ${name}`)
  input.close()
  exit()
});

function exit() {
  output('Exit')
}
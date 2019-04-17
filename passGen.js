
const readline = require('readline');




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Generate a new password > '
})

range = (start, stop, step) => {
  let finalArray = [start], b = start
  while (b < stop) {
    finalArray.push(b += step || 1);
  }
  return finalArray
}

const UC = String.fromCharCode.apply(String, range(65, 90)).split(''),
const LC = String.fromCharCode.apply(String, range(97, 122)).split(''),
const SC1 = String.fromCharCode.apply(String, range(32, 47)).split(''),
const SC2 = String.fromCharCode.apply(String, range(58, 64)).split(''),
const SC3 = String.fromCharCode.apply(String, range(91, 96)).split(''),
const SC4 = String.fromCharCode.apply(String, range(123, 126)).split(''),
const NMB = String.fromCharCode.apply(String, range(48, 57)).split(''),
const finalArray= [...UC,...SC2,...LC,...SC1,...NMB,...SC3,...SC4]

generateCode = (num) = {



}

rl.prompt();

rl.on('line', (answer) => {
  rot13(answer)
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

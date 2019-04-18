
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

UC = String.fromCharCode.apply(String, range(65, 90)).split(''),
  LC = String.fromCharCode.apply(String, range(97, 122)).split(''),
  SC1 = String.fromCharCode.apply(String, range(32, 47)).split(''),
  SC2 = String.fromCharCode.apply(String, range(58, 64)).split(''),
  SC3 = String.fromCharCode.apply(String, range(91, 96)).split(''),
  SC4 = String.fromCharCode.apply(String, range(123, 126)).split(''),
  NMB = String.fromCharCode.apply(String, range(48, 57)).split(''),
  finalArray = [...UC, ...SC2, ...LC, ...SC1, ...NMB, ...SC3, ...SC4]

generateCode = (num) => {
  generatedArray = []
  for (i = 0; i < num; i++) {
    generatedArray.push(finalArray[Math.floor(Math.random() * finalArray.length)])
  }
  console.log(generatedArray.join(''))

}

rl.prompt();

rl.on('line', (answer) => {
  generateCode(answer)
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

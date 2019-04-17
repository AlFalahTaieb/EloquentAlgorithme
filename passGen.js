
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
generateCode = (num) = {

  UC=String.fromCharCode.apply(String,range(65,90)).split(''),
  LC=range(97,122),
  Num=range(48,57),
  SC1=range(32,47),
  SC2=range(58,64),
  SC3=range(91,96),
  SC4=range(123,126),
  


}

rl.prompt();

rl.on('line', (answer) => {
  rot13(answer)
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

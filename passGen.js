
const readline = require('readline');




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Generate a new password > '
})


rot13 = (str) => {
  // Split str into a character array
  return console.log(str.split('')
  // Iterate over each character in the array
  .map.call(str, function (char) {
  // Convert char to a character code
  x = char.charCodeAt(0)
  // Checks if character lies between A-Z
  if (x < 65 || x > 90) {
  return String.fromCharCode(x); // Return un-converted character
  }
  //N = ASCII 78, if the character code is less than 78, shift forward 13 places
  else if (x < 78) {
  return String.fromCharCode(x + 13)
  }
  // Otherwise shift the character 13 places backward
  return String.fromCharCode(x - 13)
  }).join('')) // Rejoin the array into a string
}

rl.prompt();

rl.on('line', (answer) => {
  rot13(answer)
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

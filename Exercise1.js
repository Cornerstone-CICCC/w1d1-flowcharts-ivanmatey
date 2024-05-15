//Exercise #1
var lft
const readline = require('readline');
// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Ask the user a question
rl.question('Please enter your length in feet: ', (lft) => {
  // Log the user's input
  //console.log(`You entered: ${lft}`);
  // Perform any additional logic here if needed
  // Close the readline interface
var lcm = 30*lft
console.log ('Your length in centimiters is', lcm)
  rl.close();
});




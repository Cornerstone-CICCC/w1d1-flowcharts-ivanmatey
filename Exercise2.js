//Exercise #2
var w
var l
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Ask the first question
rl.question('Enter the width ', (w) => {
  //console.log(`Hello, ${name}!`);
  // Ask the second question
  rl.question('Enter the length ', (l) => {
    //console.log(`You are ${age} years old.`);
    // Close the readline interface after all questions are asked
    var A = w*l
    console.log('The area for this rectangle is ', A)
    rl.close();
  });
});



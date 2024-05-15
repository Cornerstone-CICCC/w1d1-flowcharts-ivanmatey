//Exercise #3
var a 
var b 
var c 

const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
// Ask the first question
rl.question('Enter your first number: ', (a) => {
    rl.question('Enter your second number: ', (b) => {
        rl.question('Enter your third number: ', (c) => {

        if (+a>+b) {
            if (+a>+c){
                console.log (a,', A is the greater number')
            } else {
                console.log (c,', C is the greatest number')
            }
        } else{
            if (+b>+c){
                console.log (b,', B is the greater number')
            } else {
                console.log (c,', C is the greatest number')
            }
        }
        rl.close();
        });
    });
});



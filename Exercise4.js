//Exercise #4
var c1
var c2
var hyp
var sum

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the first question
rl.question('Enter the first cathetus: ', (c1) => {
    rl.question('Enter the second cathetus: ', (c2) => {
        sum = c1 + c2;
        rl.question('Enter the hypotenus: ', (hyp) => {
            if (+sum > +hyp){
                console.log("A triangle is possible")
            }else{
                console.log("A triangle is not possible")
            }
            // Close the readline interface after all questions are asked
            rl.close();
        });
    });
});



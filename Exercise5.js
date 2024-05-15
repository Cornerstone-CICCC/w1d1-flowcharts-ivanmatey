//Exercise #5
var studentName
var grade

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the first question
rl.question('What is your name?: ' , (studentName) => {
    rl.question('What is your mark?: ', (grade) => {
        if (grade >= 80){
            console.log(studentName, "'s grade is A")
        }else{
            if (grade >= 60){
                console.log(studentName, "'s grade is B")
            }else{
                if (grade >= 40){
                    console.log(studentName, "'s grade is C")
                }else{
                    console.log(studentName, "No Grade")
                }
            }
        }
            // Close the readline interface after all questions are asked
            rl.close();
    });
});



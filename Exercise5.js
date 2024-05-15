//Exercise #5
var studentName = 'Ivan Matey'
var grade = 35

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
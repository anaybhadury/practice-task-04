/**
 * -------------Practice Task-------------
 * SUBTASK - 1
 * DISPLAY SUM OF ALL THE ODD NUMBERS FROM 91 TO 129
 * 
 * SUBTASK - 2
 * DISPLAY SUM OF ALL THE EVEN NUMBERS FROM 51 TO 85
 */

// let sum = 0;
// for(oddNum = 91; oddNum <= 129; oddNum = oddNum + 2){
//     console.log(oddNum);
//     sum = oddNum + sum;
// }
// console.log('the sum num is', sum);

let sum = 0;
for(let evenNum = 51; evenNum <= 85; evenNum++){
    if(evenNum % 2 === 0){
        sum = evenNum + sum;
    console.log(evenNum);
    }
}
console.log('the sum num is', sum);
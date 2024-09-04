/**
 * -------------Practice Task-------------
 * SUBTASK 1
 * DISPLAY SUM OF ALL THE ODD NUMBERS FROM 81 TO 131
 * 
 * SUBTASK 2
 * DISPLAY SUM OF ALL THE EVEN NUMBERS FROM 206 TO 311
 */

let num = 206;
let sum = 311;

while(num <= 311){
    if(num % 2 === 0){
        console.log(num);
        sum = num + sum;
        console.log('the sum num is:', sum);
    }
    num++;
}











// let num = 81;
// let sum = 0;
// while(num <= 131){
//     console.log(num);
//     num = num + 2;
//     sum = num + sum;
//     console.log('the sum num is', sum);
// }

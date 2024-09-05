/**
 * -------------Practice Task-------------
 * Write a program that takes an array of numbers and calculates the sum of all elements in the array.
 * Given an array of numbers, write a program to find and print the largest number in the array.
 */

// let biggestNumber = 0;
// const numbers = [96, 28, 85, 37, 27, 86, 120];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     // console.log(number);
//     if(biggestNumber < number){
//         biggestNumber = number;
//     }
// }
// console.log(biggestNumber, 'is biggest number');

// let sum = 0;
// const nums = [29, 45, 89, 84, 85, 32];
// for(let i = 0; i < nums.length; i++){
//     const num = nums[i]
//     sum = num + sum;
//     console.log(num);
// }
// console.log('the sum number is:', sum);


// for(let i = 1; i <= 5; i++){
//     console.log('hello from I', i);
//     for(let j = 1; j <= 5; j++){
//         console.log('hello from J', j);
//     }
// }

const numbers = [4, 3, 6, 22, 45, 34];
let sum = 0;

for(let item of numbers){
    sum += item;
}
console.log(sum);
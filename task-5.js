/**
 * -------------Practice Task-------------
 * DISPLAY ODD NUMBER FROM 55 TO 85 AND SKIP THE NUMBERS DIVISIBLE BY 5.
 */
let num = 55;
while(num <= 85){
    if(num % 2 === 0){
        num++;
        continue;
    }
    if(num % 5 === 0){
        num++;
        continue;
    }
    console.log(num);
    num++;
}
















// let num = 55;

// while(num <= 85){
//     if(num % 2 === 0){
//         num++;
//         continue;
//     }
//     if(num % 5 === 0){
//         num++;
//         continue;
//     }
//     console.log(num);
//     num++;
// }


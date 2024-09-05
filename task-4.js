/**
 * -------------Practice Task-------------
 * WRITE A LOOP TO PRINT EVEN NUMBERS FROM 1 TO 40. USE CONTINUE TO SKIP ODD NUMBERS.
 */

// let num = 0;

// while(num <= 40){
//     console.log(num);
//     num = num += 1;
//     num++;
// }

let num = 1;

while(num <= 40){
    if(num % 2 !== 0){
        num++;
        continue;
    }
    console.log(num);
    num++;
}


// let num = 1;

// while(num <= 40){
//     if(num % 2 !== 0){
//         num++;
//         continue;
//     }
//     console.log(num);
//     num++;
// }



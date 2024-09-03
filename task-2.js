/**
 * -------------Practice Task-------------
 * WRITE A WHILE LOOP THAT ADDS NUMBERS STARTING FROM 1, BUT STOPS (USING BREAK) AS SOON AS THE SUM REACHES OR EXCEEDS 100
 */


let num = 1;
let sum = 0;

while(num <= 100){
    console.log(num);
    sum = num + sum;
    console.log('the sum number is:', sum);
    num++;
}

while(true){
    sum += num;
    if(sum >= 100){
        break;
    }
    i++;
}
console.log('Final sum:', sum);

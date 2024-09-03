/**
 * -------------Practice Task-------------
 * WRITE A LOOP 1 TO 200. USE BREAK TO EXIT THE LOOP ONCE YOU FIND 100.
 */

let num = 1;

while(num <= 200){
    if(num === 100){
        console.log('Found 100, exiting the loop.')
        break;
    }
    console.log(num);
    num++;
}


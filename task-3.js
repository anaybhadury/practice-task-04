/**
 * -------------Practice Task-------------
 * WRITE A LOOP THAT GOES FROM 1 TO 100, BUT STOPS (USING BREAK) WHEN IT ENCOUNTERS THE FIRST SQUARE NUMBER (LIKE 4, 9, 16,ETC)
 */

for(let i = 1; i <= 100; i++){
    const square = Math.sqrt(i);
    const checkSqn = square % 1 === 0;
    if(i >= 5){
        if(checkSqn === true){
            console.log('founded', i);
            break;
        }
    }
}





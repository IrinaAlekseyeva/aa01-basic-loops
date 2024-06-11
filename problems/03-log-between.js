/*
Define a function logBetween that takes in two number parameters. The first
number parameter represents a low number and the second represents a high
number. The function should print every number from the low number to the
high number, inclusive. Inclusive means that the range includes the low and
high numbers.
*/

// Your code here 
function logBetween(num1, num2){
    let limit = num2-num1;
    for(let i = 0; i <= limit; i++){
        console.log(num1);
        num1++;
    }
}
logBetween(-1, 2);
//logBetween(5,10);
/* prints out:
-1
0
1
2
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetween;

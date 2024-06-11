/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/

function secondHalf(str) {
  let newStr = "";
  for (i = Math.round((str.length)/2); i < str.length; i++){
    newStr = newStr + str[i];
   // console.log(newStr);
  }
  return newStr;
}

// console.log(secondHalf('academy')); // 'emy'
// console.log(secondHalf('planet'));  // 'net'
// console.log(secondHalf('sport'));   // 'rt'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;

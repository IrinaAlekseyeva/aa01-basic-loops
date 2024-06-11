/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {
  let newStr = "";
  for (i = 0; i < Math.round((str.length)/2); i++){
    newStr = newStr + str[i];
   // console.log(newStr);
  }
  return newStr;
}

//  console.log(firstHalf('academy')); // 'acad'
//  console.log(firstHalf('planet'));  // 'pla'
//  console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;

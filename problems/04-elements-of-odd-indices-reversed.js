/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

function elementsOfOddIndicesReversed(str) {
  let newStr = "";
  if(str.length % 2 === 0){
    for(i=str.length-1; i>0; i=i-2){
      newStr = newStr + str[i];
    }
  } else {
    for(i=str.length-2; i>0; i=i-2){
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;

/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function abbreviate(str){
    str = str.toLowerCase();
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] !== "a" && 
           str[i] !== "e" && 
           str[i] !== "i" && 
           str[i] !== "o" && 
           str[i] !=="u"){
            newStr +=str[i];
        } 
    }
    return newStr;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;

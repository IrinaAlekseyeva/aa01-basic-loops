/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function vowelCipher(str){
    let newStr = "";
    let vowels = "aeiou";
    let char = "";

    for( let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            char = str.charAt(i);
            if(char === "u"){
                newStr = newStr +"a";
            } else {
                indextheSameCharInVowels = vowels.indexOf(char);
            newStr = newStr + vowels[indextheSameCharInVowels+1];
            }
        } else {
            newStr = newStr + str[i];
            console.log(newStr);
        }
    }
    return newStr;
}

 console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;

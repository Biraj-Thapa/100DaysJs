// Write a function to determine whether a given string is a palindrome or not. A palindrome is a word,phrase,number or othr sequence of characters that reads the same forward and backward, ignoring spaces,punctuation , and capilization

//constraints

//The input string may contain letters,digita,spaces,punctuation, and a special character.

//The function should be case-insenitive,meaning "Racecar" and "racecar" should be  considered the same.

//Ignore spaces,punctuation , and special characters when determining if a string is a palindrome.

//The function should return true if the input string is a palindrome and false otherwise


 const isPalindrome=(string)=>{
string=string.toLowerCase().replace(/\W/g,"")
let newString = string.split("").reverse().join("");
if (string === newString){
return "yes it is Palindrome"
}
return false;

}




console.log(isPalindrome("A man , a plan, a canal, panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Biraj"));
//write a function check if a character is uppercase or lowercase.

//Constraints :-

//The input char will be a single character.
//The character can be any printable ASCII character.
//you can assume that the input will always be a string of length 1.
const isUppercase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) return true;
  else {
    return false;
  }
};
console.log(isUppercase("A"));
console.log(isUppercase("a"));
console.log(isUppercase("Z"));

const isLowercase=(char)=>{
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) return true;
    else {
      return false;
    }
  };
  console.log(isLowercase("z"))
  console.log(isLowercase("A"))

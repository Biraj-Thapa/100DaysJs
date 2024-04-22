//write a function to check if a given string starts with a specific substring.

const checkStr = (str, subStr) => {
  newStr = str.trim();
  toArr = newStr.split(" ");

  if (toArr[0].toLowerCase() === subStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
console.log(checkStr(("hello Hii"),("hello")));
console.log(checkStr(("biraj thapa"),("Biraj")));
console.log(checkStr(("hii i am biraj"),("hi")))

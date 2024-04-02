// Hash Tag Generator


//You are required to implement a function generateHash that generates a  hash tag from a given input string.
//The hash tag should be constructed as follows:-

//The input string should be converted to a hash tag format,where each word is capitalized and concatenated together without spaces.

//If the length of the input string is greater thsn 280 characters or if the input string is empty ot containas only white spaces,the function should return false

//Otherwise,the function should return the generated hash tag prefixed with # 
let  generateHash=(string)=>{
     if(string.length>280||string.trim().length===0){
         return false;
    }
let capitalizedString=string.toUpperCase();
let arrayConvert=capitalizedString.split(" ").join("")
return ("#"+arrayConvert)
}

console.log(generateHash("IamBiraj"))
console.log(generateHash("  "))
console.log(generateHash(""))
console.log(generateHash("day 2 completed"))


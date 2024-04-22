//Longest word in string

//Write a function findLongestWord that takes a strings input and returns the longest word in the string.If there are multiple longest words return the first one encountered.

//Constraints
//The input string may contain alphabetic characters,digits,spaces,and punctuations
//The input string is non empty
//The input string may contin multiple words seperated by space

//Note:-
//If the input string is empty or contains only whitespaces , the function should return an false.
//the function should ignore leading and trailing whitespace when determining  the longest word


function LongestString(string){
    if(string.trim().length===0){
        return false;
    }
let newString=string.split(" ")
let maxString=newString[0]
for(i=1;i<newString.length;i++){
    if(newString[i].length>maxString.length ){
     maxString=newString[i] 
    }
}
return maxString
 }
console.log(LongestString("hello Biraj Ji"))
console.log(LongestString('I am Batman '))

//2nd Method

let longestWord=(word)=>{
    let arrWord=word.split(" ")
    let result=arrWord.reduce((acc,cur)=>{
        return cur.length>acc.length?cur:acc;

    },"")
    return result;
    
}
console.log(longestWord("hiiiiiiii I am Biraj"))
console.log(longestWord("w u t tooo"))
console.log(longestWord("he dcfdqgdvxz wc"))




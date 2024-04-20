//Write a function to reverse a string without using built-in methods or libarrie.the function should take a string as input and return the rversed string.

const reverseStr=(str)=>{
    let revStr="";
   for(i=str.length-1;i>=0;i--){
    revStr=revStr+str[i]
   }
   return revStr;

}
console.log(reverseStr("Biraj"));
console.log(reverseStr("1234"));
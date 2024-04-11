//write a function that takes a number as input and returns the sum of its digit

//constraints

//The input  number will be positiva integer.

//The input number can have multiple digits.

//The output should be the sum of all digits in the input number.

const sumOfDigits=(n)=>{
 let arr=Array.from(String(n),Number)
 let result=arr.reduce((p,c)=>{
    p=p+c
    return p;
 },0)
 return result;

}
console.log(sumOfDigits(123))
console.log(sumOfDigits(567))
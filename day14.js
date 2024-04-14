// Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

//Notes:

//The input num will be a positive integer.
//Zero (0) and negatve integers are not considered powers of two.
//The function should return true if the given number is a power of 2 , and false otherwise.

const isPowerOfTwo=(n)=>{
    for(let i=1;i<n;i++){
        if(2**i===n){
             return true;
        }
    }
return false;

}

console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(55));
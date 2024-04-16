//Write a function findMin that takes an array of numbers as input and return the minimum value found in array

//Constraints :-

//The input array may contain both positive and negative integers.
//The input array must be empty.
//thw input array may contain duplicate values.

//Note:-

//Ensure the function handes edge cases gracefully,such as empty input array.
//Consider using ES6 features like spread syntax(...) for a concise implementation.


const findMin=(arr)=>{
    let result=arr.sort((a,b)=>a-b)
    return result[0]
   
}
console.log(findMin([4,3,1,5,6]))
console.log(findMin([4,-3,-2,5,-11]))
console.log(findMin([]))
console.log(findMin([100,500,600,50]))
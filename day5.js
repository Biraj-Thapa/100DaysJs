//write a function to sort an array of numbers in an ascending order

//Requriements
//The function should take a array of numbers as input.
//It should return a new array with numbers sorted in ascending order.
//The original array shold remain unchanged.
//you are not allowed to use the built in sort method.

const ascendingArray=(arr)=>{
 return arr.sort((a,b)=>a-b)
}
console.log(ascendingArray([2,6,1,3]))
console.log(ascendingArray([20,60,10,30]))
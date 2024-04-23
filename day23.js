//Write a function to count the occurance of each element in an array and store the counts in an object.The keys of the object should represnet the number of times each element appears in the array.

//Heres what the function should do.
//accept an array of numbers as input.
//create an empty object called count to store th count of each element.
//Iterate through each numbr in the Array.
//for each number, increment the count in the counts object.
//if the count for a numbr doesnot exist yet,initialize it to 1.
//return the counts object containing the counts of each element.

//input
//const numbers=[1,2,2,3,1,4,2]

//output
//{'1':2,"2":3,"3":1,"4:1"}
//constraints:
//the input array may contain positive integers only.
//you can assume  that the input array is not empty.
const num=[1,2,2,3,1,4,2];
let counts={};
for(let numbers of num){
    counts[numbers]=(counts[numbers] || 0)+1
}
console.log(counts);








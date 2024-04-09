//calculate the average

//write a function calculateAverage that takes an array of numbers as input and return the average of those numbers

//your function should:

//Accept an array of numbers as input
//calculate the sum of all the numbers n array.
//divides the number by total no of elemantrs in array t find average/
//return calcualted average

const calculateAverage=(arr)=>{
    let sum=0
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    let average=sum/arr.length
    return average

}

console.log(calculateAverage([1,2,3,4,5]))
console.log(calculateAverage([1,50,100]))
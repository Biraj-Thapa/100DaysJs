//Write a function calculateMean that takes an array of numbers as input and retruns the mean (average) of those numbers.

//constraints:-

//the input array may contain positive and negative integers.
//The input array may be empty.if it is empty the function shul return 0.

const calculateMean=(arr)=>{
    if (arr.length===0){
        return 0;
    }
    const result=arr.reduce((acc,curr)=>{
        acc += curr
        return acc;

    },0)
    return result/arr.length;
}
console.log(calculateMean([]));
console.log(calculateMean([1,2,3,4]));
console.log(calculateMean([100,200,300]))
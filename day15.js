//wrie a function to calcualte the sum of squares of all elements in an array. For example,given array [1,2,3],the function should reeturn 14 beacuse 1*1+2*2+3*3=14.

const sumOfSquare=(arr)=>{
    let result=arr.reduce((p,c)=>{
     return p+c*c 
    },0);
    return result;
    }

console.log(sumOfSquare([1,2,3]))
console.log(sumOfSquare([1,3,5]))

 

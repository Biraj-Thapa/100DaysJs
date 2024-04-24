//write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appear most frequently).


const findMode=(arr)=>{
    let counts={};
    let max=0;
    for(let n of arr){
        counts[n]=(counts[n]||0)+1
        if(counts[n]>max){
        return max=counts[n]
        mode=max
    }
   
   }
   return mode;

}
console.log(findMode([1,2,3,3,4,5,2,2,2,4,1,1,1,1,1,1,1,5]))
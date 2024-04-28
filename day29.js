//write a function called numberRange that generates an array containing  consecutive number form a to b (inclusive)

//input 
//a: An integer representingthe starting number of the Range
//b:an integer representingthe ending number of the Range
//arr:An optional parameter representing the array to store the numbers in the range.It defaults to an empty array.

//constraints 
//a and b will be integersw.
// a will be less than or equal to b
//output
//console.log(numberRange(0,5)); //output[0,1,2,3,4,5]

const numberRange=(str,end)=>{
    let arr=[];
    for(i=str;i<=end;i++){
        arr.push(i)
    }
    return arr;
}
console.log(numberRange(0,5));
console.log(numberRange(4,7))
console.log(numberRange(-2,2))


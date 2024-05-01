//recursive number range generator

//same question 29

const numberRangeRecursive=(num1,num2,arr=[])=>{
    if(num1<=num2){
        arr.push(num1);
        return numberRangeRecursive(num1+1,num2,arr)
    }
    return arr;

}
console.log(numberRangeRecursive(0,6))
//write a function arraysAreEqual that takes two arrays arr1 & arr2  as input and retruns true if the arrays are equal(i.e.,contain the same elements in same order),and false otherwise

//Note

//the function should return false if the array have different lengths.

const arraysAreEqual=(arr1,arr2)=>{
    if(arr1.length !==arr2.length){
        return false
}
let result =arr1.every((curVal,index)=>{
    return curVal ===arr2[index]
})
return result
}
console.log(arraysAreEqual([1,2],[1,2]))
console.log(arraysAreEqual([1,2,3],[1]))
console.log(arraysAreEqual([],[]))
console.log(arraysAreEqual([1,2,3,4,5],[2,3,4,5,6]))

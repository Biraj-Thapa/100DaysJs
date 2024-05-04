//Remove dublicate from array

const removeDublicates=(arr)=>{
    return [...new Set(arr)]

}
console.log(removeDublicates([1,2,3,1,2,3,6,4,5]))
// Write a function that takes an array of integers as input  and removes any duplicate elements,returning a new array with only unique elemenets.

//The new set() method  in j creates a new set obejct.A Set object is a collection of unique values, It can store any type of value,whether primitive values or b=object references.

//constraints 

///The input array contain both positibr sn negative integers.
//The input array ma be empty.
//The elements in the array are not guranted to be sorted.
//The output array should retain original order of element from theinput array.

const duplicateRemover=(arr)=>{
    const newArr =[...new Set(arr)];
    return newArr;

}
console.log(duplicateRemover([1,2,3,4,4,5]))
console.log(duplicateRemover([1,2,3,442,34,2]))
console.log(duplicateRemover([]))
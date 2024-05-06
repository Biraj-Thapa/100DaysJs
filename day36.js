//convert Object to array and Vice Versa

//Write a function objectToArray that takes an object asinout and returns an array of key-value pairs,where each elements in the array is an arry with two elements:the key and the corresponding value from the objects.

//Write a function arrayToObject that takes an array of key_vaue pairs (as returnerd by objectToArray function) and returns a new object with the keys and vaues form the array.

const obj={
    name:"Biraj",
    age:23,
}
 let entries=Object.entries(obj);
 console.log(entries.flat())

 let newArr=Object.fromEntries(entries)
 console.log(newArr)
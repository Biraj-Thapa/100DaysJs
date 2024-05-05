//check object Emptiness

//Write a function isEmptyObject that takes and object as input and determines wheather it is empty or not.An empty object is defined as an object with no own properties.

//your task is to implement the isEmptyObject function using Javascript and retruns a messaeg indicating wheteher the object is empty or not.

const isEmptyObject=(obj)=>{
    return Object.keys(obj).length===0;


}
console.log(isEmptyObject({}));
console.log(isEmptyObject({name:"Biraj"}));
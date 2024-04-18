//Write a function to convert a string to camelCase and snake_case.

const convertCamelCase=(str)=>{
    newStr=str.trim().split(" ")
    let result=newStr.map((val,index)=>{
        if(index===0){
            return val.toLowerCase()
        }
        else{
            return val.charAt(0).toUpperCase()+val.slice(1).toLowerCase()
        }
    })
      
   
    return result.join("");

}
console.log(convertCamelCase("Hii I am Biraj"));
console.log(convertCamelCase("hello biRAJ "))
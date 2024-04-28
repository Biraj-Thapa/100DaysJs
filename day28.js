//write a function called truncateString that takes two parameters:
//str: A string that needs to be truncated.
//maxlength:An integer representing the maxiumum length of string allowed.
//The function should truncate the input string str if its length exceds the specified maxLength.If truncation occurs, the function shoul add '...' to the end d the truncated string.

const truncateString=(str,count)=>{
    if(count===0){
        return str
    }
    if(str.length>count){
        return str.slice(0,count).concat("...");
    }


}
console.log(truncateString("hello birajji thapa",7))
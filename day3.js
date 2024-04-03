//write a function called countChar  taht takes two parameters: a string and a character to count. the function should return the number of times the specified character appears in the string.

//for e.g.
//console.log(countChar("MissIssippi","I"))//output->4

//constraints:->
//The function should be case sensitive.
//The function should handle both upper case and lower case character.
//The character parametercan be printable ASCII Character(the function shoukld accept any character that is part of ASCII chracter set and is printable).


 let countChar=(string,character)=>{
    string=string.toUpperCase();
    character=character.toUpperCase();
    let newString=string.split("")
    let count=newString.reduce((prev,curr)=>{
        if(curr===character){
            prev++
        }
        return prev;
    },0)
    return (count)  
 } 
 console.log(countChar("hellol","l"))
 console.log(countChar("Biraj","B"))




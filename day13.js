// Write a function that takes a string as input and return count of vowels in the string.Consider 'a','e','i','o' and 'u' as vowels (both lowercase and uppercase)

//Constraints:

//The input string may contain letters in both uppercase and lowercase.
//the output should be a non-negative integrer representing the count of vowels in the input string.

const countVowels=(str)=>{
    let vowels=['a','e','i','o','u']
    let count=0;
    let splittedStr=str.split('');
    for(let char of splittedStr){
        if (vowels.includes(char.toLowerCase())){
            count++;
        }
       
    }
   
    return count;
}
console.log(countVowels("HIII"))
console.log(countVowels("HELLO WORLD"))
console.log(countVowels("HYY"))

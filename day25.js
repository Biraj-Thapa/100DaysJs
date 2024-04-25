//write a function to calculate the factorial of a number using recursion

const fact=(n)=>{
    if(n===0||n===1){
        return 1;
    }
    else{
         return n*fact(n-1)
    }

}
console.log(fact(2))
console.log(fact(5))

//factorial finder
let fact=(n)=>{
    if(n===0|| n===1){
        return 1;
    }
    return n*fact(n-1)
}
console.log(fact(1))
console.log(fact(5))
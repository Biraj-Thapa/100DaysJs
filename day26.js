//write a function to find nth fibonacci number

const fibonacciSeries = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(fibonacciSeries(10));
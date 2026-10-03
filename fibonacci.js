const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPerfectSquare(x) {
    const s = Math.sqrt(x);
    return (s * s === x);
}


function isFibonacci(n) {
    
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}


rl.question('Enter an integer to check: ', (input) => {
    const num = parseInt(input, 10);

    
    if (isNaN(num) || num < 0) {
        console.log('❌ Please enter a valid non-negative integer.');
    } else {
        if (isFibonacci(num)) {
            console.log(`✅ Yes, ${num} is a Fibonacci number.`);
        } else {
            console.log(`❌ No, ${num} is NOT a Fibonacci number.`);
        }
    }

    
    rl.close();
});

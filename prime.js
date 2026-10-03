const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}


function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


function findNextPalindrome(num) {
    let nextNum = num + 1;
    while (!isPalindrome(nextNum)) {
        nextNum++;
    }
    return nextNum;
}


rl.question('Enter a positive integer: ', (input) => {
    const number = parseInt(input, 10);

    
    if (isNaN(number) || number <= 0) {
        console.log('Please enter a valid positive integer.');
    } else {
        
        if (isPrime(number)) {
            const nextPalindrome = findNextPalindrome(number);
            console.log(nextPalindrome);
        } else {
            console.log('not prime');
        }
    }

    rl.close();
});

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function reduceToSingleDigit(num) {
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}


rl.question('Enter your birthdate (YYYY-MM-DD or any format with numbers): ', (input) => {
  const digitsOnly = input.replace(/\D/g, '');

  if (!digitsOnly) {
    console.log('❌ Error: Please enter a valid date containing numbers.');
    rl.close();
    return;
  }

  
  const initialSum = digitsOnly
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  
  const luckyNumber = reduceToSingleDigit(initialSum);

  console.log(`\n✨ Your lucky number is: ${luckyNumber} ✨`);
  rl.close();
});

var operators = prompt('Enter operator:');


var num1 = parseFloat(prompt('Enter first number: '));
var num2 = parseFloat(prompt('Enter second number: '));

var result;

if (operators === '+') {
  result = num1 + num2;
} else if (operators === '-') {
  result = num1 - num2;
} else if (operators === '*') {
  result = num1 * num2;
} else {
  result = num1 / num2;
}


console.log(`${num1} ${operators} ${num2} = ${result}`);
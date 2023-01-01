var numbers = [3, 56, 2, 48, 5];

// Map - Create a new array by doing something with each item in an array
function double(x) {
	return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);

// Filter - Create a new array by keeping the items that return true
numbers.filter(function (num) {
	return num > 10;
});

console.log(newNumbers);

// Reduce - Accumlate a value by doing something to each item in an array
var newNumber = numbers.reduce(function (accumulator, currentNumber) {
	return accumulator + currentNumber;
});

console.log(newNumber);

// Find - find the first item that matches from an array
const newNum = numbers.find(function (num) {
	return num > 10;
});

console.log(newNum);

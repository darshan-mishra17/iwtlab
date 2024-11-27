const numbers = [12, 45, 23, 56, 78, 19, 34, 89, 67, 10];
console.log("Original Array:");
numbers.forEach((num) => console.log(num));
const squaredNumbers = numbers.map((num) => num ** 2);
console.log("Squared Numbers Array:", squaredNumbers);


const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers Array:", evenNumbers);

const numberToRemove = 45;
const filteredArray = numbers.filter((num) => num !== numberToRemove);
console.log(`Array after removing ${numberToRemove}:`, filteredArray);

const ascendingOrder = [...numbers].sort((a, b) => a - b);
const descendingOrder = [...numbers].sort((a, b) => b - a);

console.log("Array in Ascending Order:", ascendingOrder);
console.log("Array in Descending Order:", descendingOrder);
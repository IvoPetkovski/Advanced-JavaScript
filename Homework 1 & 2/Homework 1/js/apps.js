let someArray = [2,4,6,23,15,9];

const newArray = (arr, inputNumber) => arr.map((num) => num * inputNumber);

console.log(newArray(someArray, 2));
const fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
fruits.push("Груша");
console.log(fruits);

fruits.pop();
fruits.shift();
console.log(fruits);

fruits.forEach(fruit => {
    console.log(fruit);
});

const lengths = fruits.map(fruit => fruit.length);
console.log(lengths);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

const foundNumber = numbers.find(num => num > 5);
console.log(foundNumber);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr);

const hasBanana = fruits.includes("Банан");
console.log(hasBanana);

fruits.reverse();
console.log(fruits);
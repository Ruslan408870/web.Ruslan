
let a = 10;
let b = 5;
let c = 2;

let sumAll = a + b + c;
console.log("Сумма всех переменных:", sumAll); 

let subtractFromSum = (a + c) - b;
console.log("Вычесть b из (a + c):", subtractFromSum); 

let multAndDiv = (a * b) / c;
console.log("(a * b) / c:", multAndDiv); 

let remainder = a % b;
console.log("Остаток от деления a на b:", remainder); 



let num = 7;
++num; 
console.log(num);

let number = 7;
--number; 
console.log(number);



let num1 = 4;
let num2 = 5;
let resultString = "The result is: " + (num1 + num2);
console.log(resultString); 



let a4 = 15;
let b4 = 5;
let c4 = 3;

let condition1 = a4 > b4 && a4 > 0 && b4 > 0;
let condition2 = c4 < 10 || c4 === 2;
let condition3 = a4 / c4 !== 5;

console.log(condition1);
console.log(condition2);
console.log(condition3);


let d = 5;
let s = '5';
console.log(d == s); 
console.log(d === s); 



let x = 9;
let y = 7;

let result1 = (x % 2 === 0 || x % 3 === 0) && (x % 6 !== 0);
let result2 = !(y > 10 || y < 5);

console.log(result1);
console.log(result2);
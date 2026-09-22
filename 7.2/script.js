
let num = 15;
console.log(num);
num = 16; 
console.log(num);

const birthYear = 2010;
console.log(birthYear); 



let integer = 42; 
console.log(integer, typeof integer); 

let singleQuote = 'Hello';
console.log(singleQuote, typeof singleQuote);

let isTrue = true;
console.log(isTrue, typeof isTrue); 

let user = null;
console.log(user, typeof user); 

let undefinedValue;
console.log(undefinedValue, typeof undefinedValue); 

let notANumber = 0 / 0; 
console.log(notANumber, typeof notANumber);



let strToNum = Number("123");
console.log(strToNum, typeof strToNum);

let numToStr = String(456);
console.log(numToStr, typeof numToStr);

console.log(Number(null));          
console.log(String(null));       

console.log(Number(undefined)); 
console.log(String(undefined)); 



let dynamicVar = 50;
console.log(dynamicVar, typeof dynamicVar);

dynamicVar = "Теперь я строка!";
console.log( dynamicVar, typeof dynamicVar);



let userName = prompt("Введите ваше имя:");
let userAge = prompt("Введите ваш возраст:");

console.log("Имя пользователя:",userName);
console.log("Возраст пользователя:", userAge);
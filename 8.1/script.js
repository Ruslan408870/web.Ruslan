function greet() {
  console.log("Привет, мир!");
}

greet();


function sayHello(name) {
  console.log(`Привет, ${name}!`);
}

sayHello("Damon");
sayHello("Stefan");
sayHello("Klaus");




function sayHello(name) {
  console.log(`Привет, ${name}!`);
}

sayHello("Elena");
sayHello("Catherine");
sayHello("Rebecca");




function sum(a, b) {
  return a + b;
}

let result = sum(5, 10);
console.log(result); 




function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));  
console.log(isEven(7));  
console.log(isEven(0));  
console.log(isEven(-3)); 


function max(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Числа равны";
  }
}

console.log(max(10, 5));  
console.log(max(3, 8));   
console.log(max(7, 7)); 




function getInitials(firstName, lastName) {
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`;
}

console.log(getInitials("Алиса", "Боброва")); 
console.log(getInitials("иван", "иванов"));    
console.log(getInitials("Елена", "Смирнова"));



function square(num) {
  return num * num;
}

function cube(num) {
  return square(num) * num;
}

console.log(square(4)); 
console.log(cube(3));   


const sum1 = (a, b) => a + b;

console.log(sum1(10, 20)); 





function getFactorial(n) {
  if (n < 0) return null;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(getFactorial(5)); 
console.log(getFactorial(0)); 
console.log(getFactorial(3)); 

let userNumber1 = Number(prompt("Введите число для Задания 1:"));

if (userNumber1 > 10) {
   console.log("Число больше 10");
} else {
   console.log("Число меньше или равно 10");
}



let userConfirmed = confirm("Хотите ли вы удалить файл?");

if (userConfirmed) {
   console.log("Файл удален");
} else {
   console.log("Удаление отменено");
}



let ageInput = prompt("Введите ваш возраст:");
let age = Number(ageInput);

if (age < 18) {
    console.log("Вы еще подросток");
} else if (age >= 18 && age <= 30) {
    console.log("Вы молодой взрослый");
} else {
    console.log("Вы взрослый");
}


let userNumber4 = Number(prompt("Введите число для проверки на четность:"));

let evenOrOdd = (userNumber4 % 2 === 0) ? "Четное число" : "Нечетное число";
console.log(evenOrOdd);


const inputDay = prompt("Введите день недели (число от 1 до 7):");
const dayNumber = Number(inputDay);

switch (dayNumber) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Некорректное значение");
}



const num1 = Number(prompt("Введите первое число:"));
const num2 = Number(prompt("Введите второе число:"));

if (num1 === num2) {
  console.log("Числа равны");
} else {
  const result = num1 > num2 ? "Первое число больше" : "Второе число больше";
  console.log(result);
}


const inputMonth = prompt("Введите номер месяца (от 1 до 12):");
const monthNumber = Number(inputMonth);

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default:
    console.log("Некорректное значение месяца");
}
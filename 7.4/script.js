
let age = 10;

if (age >= 11) {
   console.log("Число больше 10.");
} else {
   console.log("Число меньше или равно 10.");
};




let userConfirmed = confirm("Хотите ли вы удалить файл?");

if (userConfirmed) {
   console.log("Файл удален.");
} else {
   console.log("Удаление отменено.");
};



let num = prompt("Введите ваш возраст:");

num = Number(num);

if (num < 18) {
    alert("Вы еще подросток");
} else if (num >= 18 && num <= 30) {
    alert("Вы молодой взрослый");
} else {
    alert("Вы взрослый");
}



let isStudent = true;
let grade = 22;

if (isStudent) {
   if (grade > 2) {
       console.log("Четное число.");
   } else {
       console.log("Нечетное число.");
   }
}



const input = prompt("Введите день недели (число от 1 до 7):");
const dayNumber = Number(input);

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



const inputу = prompt("Введите времена года (число от 1 до 12):");
const Number = Number(inputу);

switch (Number) {
  case 1:
    console.log("Январь");
    break;
  case 2:
    console.log("Февраль");
    break;
  case 3:
    console.log("Март");
    break;
  case 4:
    console.log("Апрель");
    break;
  case 5:
    console.log("Май");
    break;
  case 6:
    console.log("Июнь");
    break;
  case 7:
    console.log("Июль");
    break;
  case 8:
    console.log("Август");
    break;
    case 9:
    console.log("Сеньтябрь");
    break;
    case 10:
    console.log("Октябрь");
    break;
    case 11:
    console.log("Ноябрь");
    break;
    case 12:
    console.log("Декабрь");
    break;

    
}

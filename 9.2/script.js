let i = 1;
while (i <= 10) {
    console.log(i);
    i++
}

let a = 0;
while (a <= 10) {
    a++;
    if (a === 5) {
        continue;
    }
    if (a === 8) {
        break;
    }
    console.log(a);
}



let b = 1;
do {
    console.log(b);
    b++;
} while (b <= 5);


while (true) {
    let input = prompt("Введите число ( для выхода введите 10);");
    if (input === "10") {
        console.log("Цикл завершен успешно!");
        break;
    }
}



for (let c = 1; c <=10; c++){
    console.log(c);
}


let d = 1;
for (;;) {
    if (i > 100) {
        break;
    }
    console.log(d);
    d++;
}

let numbers = [1,2,3,4,5];

for (let f = 0; f < numbers.length; f++) {
    console.log(numbers[f]);
}

// for идеально подходить когда  известно кол-во повторений
// while незаменим когда кол-во поаторений заранее не известно
// Примеры: for (известно кол-во) вывод на экран первых 50 квадратов чисел
// Пример: while (неизвестно кол-во) запрос пароля у пользователя  до тех пор пока он не выведит правильную комбинацию


for (let v = 10; v >= 1; v--) {
    console.log(v);
}


for (let z = 1; z <= 10; z++) {
    if (z % 2 !== 0) {
        continue;
    }
    console.log(z);
}
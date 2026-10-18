
const person = {
    name: "Руслан",
    age: 16,
    city: "Алмата"
};
console.log(person);


console.log(person.name);
console.log(person.age);
person.city = "Астана";


person.greet = function() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет!`);
};
person.greet();


const obj1 = { a: 10, b: 20 };
const obj2 = { a: 10, b: 20 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);

const book = {
    title: "JavaScript для начинающих",
    author: "Илон Майск",
    details: {
        year: 2022,
        pages: 350
    }
};
const bookCopy = Object.assign({}, book);
bookCopy.details.year = 2026;
console.log(book.details.year);


const calculator = {
    a: 5,
    b: 10,
    sum() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b;
    }
};
console.log(calculator.sum());
console.log(calculator.multiply());

const car = {
    brand: "BMW",
    model: "M5",
};
car.model = "Competition"
console.log(car);

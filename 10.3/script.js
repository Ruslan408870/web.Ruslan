localStorage.setItem("greeting", "Привет, мир!");
const savedGreeting = localStorage.getItem("greeting");
console.log(savedGreeting);

localStorage.removeItem("greeting");
const deletedGreeting = localStorage.getItem("greeting");
console.log(deletedGreeting);

const user = {
    name: "Алексей",
    age: 25,
    email: "alexey@example.com"
};
localStorage.setItem("user", JSON.stringify(user));
const retrievedUserJson = localStorage.getItem("user");
const parsedUser = JSON.parse(retrievedUserJson);
console.log(parsedUser);

const currentUser = JSON.parse(localStorage.getItem("user"));
if (currentUser) {
    currentUser.country = "Казахстан";
    localStorage.setItem("user", JSON.stringify(currentUser));
}
const updatedUser = JSON.parse(localStorage.getItem("user"));
console.log(updatedUser);

let userData = localStorage.getItem("user");
if (userData) {
    console.log(JSON.parse(userData));
} else {
    const defaultUser = {
        name: "Гость",
        age: 18,
        email: "guest@example.com"
    };
    localStorage.setItem("user", JSON.stringify(defaultUser));
    console.log(defaultUser);
}

localStorage.clear();
const checkEmpty = localStorage.getItem("user");
console.log(checkEmpty);

const tasks = [
    { title: "Изучить LocalStorage", completed: true },
    { title: "Разобраться с JSON.stringify и JSON.parse", completed: false },
    { title: "Сделать домашнее задание", completed: false }
];
localStorage.setItem("tasks", JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(savedTasks);

let tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
if (tasksList.length > 0) {
    tasksList[0].completed = true;
}
localStorage.setItem("tasks", JSON.stringify(tasksList));
console.log(JSON.parse(localStorage.getItem("tasks")));
// Задание 1: Изменение текста элемента
const messageElement = document.getElementById('message');
messageElement.textContent = 'Добро пожаловать в JavaScript!';

// Задание 2: Работа с классами элементов
const boxes = document.getElementsByClassName('box');
for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = 'green';
}

// Задание 3: Использование querySelector и querySelectorAll
const textParagraph = document.querySelector('#text');
textParagraph.textContent = 'Текст изменен с помощью querySelector';

const allBoxes = document.querySelectorAll('.box');
allBoxes.forEach(box => {
  box.style.backgroundColor = 'blue';
});

// Задание 4: Поиск и выделение элементов по классу
const highlightedParagraphs = document.querySelectorAll('p.highlight');
highlightedParagraphs.forEach(paragraph => {
  paragraph.style.color = 'red';
});
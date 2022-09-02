// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку

import * as throttle from 'lodash.throttle';

const form = document.querySelector('form');
const SAVED_KEY = 'feedback-form-state';
const formValue = {};

form.addEventListener('input', throttle(onGetData, 500));
form.addEventListener('submit', sendForm);

function onGetData(event) {
  formValue[event.target.name] = event.target.value;
  const { email, message } = formValue;
  localStorage.setItem(SAVED_KEY, JSON.stringify({ email, message }));
}

function saveMessage() {
  const obj = JSON.parse(localStorage.getItem(SAVED_KEY));
  const textarea = document.querySelector('textarea');
  const input = document.querySelector('input');
  if (localStorage.getItem(SAVED_KEY)) {
    textarea.value = obj.message;
    input.value = obj.email;
  }
}
saveMessage();

function sendForm(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(SAVED_KEY);
}

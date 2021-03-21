const wrap = document.getElementById('wrap');

const header = wrap.querySelector('.momontom__header'),
  body = wrap.querySelector('.momontom__body');

const weather = header.querySelector('.header__weather p')

const greeting = header.querySelector('.header__greeting'),
  greetingText = greeting.querySelector('.header__greeting-text'),
  greetingUser = greeting.querySelector('.header__greeting-user'),
  greetingEmoji = greeting.querySelector('.header__greeting-emoji');

const clock = header.querySelector('.header__clock'),
  hourMinutes = clock.querySelector('.header__clock-hourAndMinutes')

const date = header.querySelector('.header__date p');

const popup = wrap.querySelector('.momontom__popup'),
  popupForm = popup.querySelector('.momontom__popup-form'),
  popupInput = popupForm.querySelector('#askUsername');

const info = header.querySelector('.header__info'),
  infoUl = info.querySelector('.header__info-ul'),
  infoTotal = infoUl.querySelector('.header__info-total .header__info-num'),
  infoPanding = infoUl.querySelector('.header__info-panding .header__info-num'),
  infoDone = infoUl.querySelector('.header__info-done .header__info-num'),
  infoAchivement = infoUl.querySelector('.header__info-achievement .header__info-num span.num');

const todoForm = body.querySelector('.body__form'),
  todoInput = body.querySelector('#body__form-input'),
  todoList = body.querySelector('.body__list-ul');

let todos = [];

const infoController = {
  init: function () {
    const buttons = todoList.querySelectorAll('li button');
    const inputCheckbox = document.getElementsByClassName('btn__done');
    window.addEventListener('load', countTodoList);
    todoForm.addEventListener('submit', countTodoList);
    Array.from(buttons).forEach(button => button.addEventListener('click', countTodoList));
    Array.from(inputCheckbox).forEach(input => input.addEventListener('click', countTodoList));
  }
}

const UUIDv4 = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
    return v.toString(16);
  });
}
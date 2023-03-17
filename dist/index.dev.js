"use strict";

var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrhi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

function checkGuess() {
  alert('I am a placeholder');
} // Функция: создаёт новый параграф и добавляет его вниз тела HTML.


function createParagraph() {
  var para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}
/*
  1. Получаем ссылки на все кнопки на странице в виде массива.
  2. Перебераем все кнопки и добавляем к ним отслеживатель события нажатия.

  При нажатии любой кнопки, будет выполняться функция createParagraph().
*/


var buttons = document.querySelectorAll('button');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var button = _step.value;
    button.addEventListener('click', createParagraph);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
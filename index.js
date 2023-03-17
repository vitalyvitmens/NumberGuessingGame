var randomNumber = Math.floor(Math.random() * 100) + 1

var guesses = document.querySelector('.guesses')
var lastResult = document.querySelector('.lastResult')
var lowOrHi = document.querySelector('.lowOrhi')

var guessSubmit = document.querySelector('.guessSubmit')
var guessField = document.querySelector('.guessField')

var guessCount = 1
var resetButton

function checkGuess() {
  alert('I am a placeholder')
}


// Функция: создаёт новый параграф и добавляет его вниз тела HTML.
function createParagraph() {
  var para = document.createElement('p')
  para.textContent = 'You clicked the button!'
  document.body.appendChild(para)
}

/*
  1. Получаем ссылки на все кнопки на странице в виде массива.
  2. Перебераем все кнопки и добавляем к ним отслеживатель события нажатия.

  При нажатии любой кнопки, будет выполняться функция createParagraph().
*/
const buttons = document.querySelectorAll('button')

for (const button of buttons) {
  button.addEventListener('click', createParagraph)
}

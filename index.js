var randomNumber = Math.floor(Math.random() * 100) + 1

var guesses = document.querySelector('.guesses')
var lastResult = document.querySelector('.lastResult')
var lowOrHi = document.querySelector('.lowOrHi')

var guessSubmit = document.querySelector('.guessSubmit')
var guessField = document.querySelector('.guessField')

var guessCount = 1
var resetButton
// Эта строка использует метод focus(), чтобы автоматически помещать текстовый курсор в текстовое поле <input>, как только загрузится страница. Пользователь сможет сразу набрать свою первую догадку, не нажимая поле формы.
guessField.focus()

function checkGuess() {
  // объявляем переменную с именем userGuess и устанавливает её значение на то, что сейчас введено в текстовое поле, пропуская это значение через встроенный метод Number(), чтобы убедится, что значение точно является числом.
  var userGuess = Number(guessField.value)
  // проверяем является ли это первой попыткой игрока или нет):
  if (guessCount === 1) {
    // Если это так, мы выводим параграф с содержанием "Previous guesses:   Если нет, ничего не делаем.
    guesses.textContent = 'Previous guesses: '
  }
  // добавляет текущее значение userGuess в конец параграфа guesses и пустое пространство поэтому между каждыми показанными предположениями будет пробел.
  guesses.textContent += `${userGuess} `
  // Блок1: проверяет, совпадает ли предположение пользователя с randomNumber
  if (userGuess === randomNumber) {
    // Если это так, игрок правильно догадался, и игра выиграна, поэтому мы показываем игроку поздравительное сообщение с приятным зелёным цветом, очищаем содержимое окна информации о минимуме / максимуме и запускаем функцию, называемую setGameOver()
    lastResult.textContent = 'Congratulations! You got it right!'
    lastResult.style.backgroundColor = 'green'
    lowOrHi.textContent = ''
    setGameOver()
    // Блок2: проверяем, является ли этот ход последним ходом пользователя. Если это так, программа выполняет то же самое, что и в Блок1, но выведет сообщение с текстом GAME OVER.
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!'
    setGameOver()
    // Блок3:  запускается только в том случае, если ни один из двух других тестов не возвращает true (т.е. Игрок не догадался правильно, но у него ещё остались догадки). В этом случае мы говорим игроку, что он ошибся, затем мы выполняем ещё один условный тест, чтобы проверить, было ли предположение больше или меньше ответа, показывая дополнительное сообщение.
  } else {
    lastResult.textContent = 'Wrong!'
    lastResult.style.backgroundColor = 'red'
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!'
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!'
    }
  }
  // Последние три строки в функции готовят нас к следующей попытке. Мы добавляем 1 к переменной guessCount так как игрок использовал свой ход (++ оператор инкремента — увеличивает на 1), очищаем значение текстового поля и фокусируемся на нем снова, готовы для ввода следующего ответа.
  guessCount++
  guessField.value = ''
  guessField.focus()
}
// добавляем обработчик событий к кнопке guessSubmit. Это метод, который принимает два входных значения (называемые аргументами) - тип события, которое мы обработаем (в данном случае click) в виде строки, и код, который мы хотим запустить при возникновении события (в данном случае функция checkGuess()
guessSubmit.addEventListener('click', checkGuess)

// Функция: создаёт новый параграф и добавляет его вниз тела HTML.
function createParagraph() {
  var para = document.createElement('p')
  para.textContent = 'You clicked the button!'
  document.body.appendChild(para)
}

function setGameOver() {
  // Первые две строки отключают ввод текста и кнопку формы, устанавливая их отключённые свойства как true. Это необходимо, потому что, если бы мы этого не сделали, пользователь мог бы представить больше догадок после завершения игры, что испортит ситуацию.
  guessField.disabled = true
  guessSubmit.disabled = true
  // три строки генерируют новый элемент <button>, устанавливают его текстовую метку « Start new game» и добавляют её к нижней части нашего HTML.
  resetButton = document.createElement('button')
  resetButton.textContent = 'Start new game'
  document.body.appendChild(resetButton)
  // устанавливает обработчик событий на нашей новой кнопке, так что при нажатии на неё запускается функция resetGame().
  resetButton.addEventListener('click', resetGame)
}

// полностью сбрасывает все на то, как это было в начале игры, поэтому у игрока может быть ещё один ход.
function resetGame() {
  // Устанавливает значение guessCount на 1.
  guessCount = 1
  // Удаляет все пункты информации. Этот код создаёт переменную, содержащую список всех абзацев внутри <div class = "resultParas">, используя метод querySelectorAll(), затем он проходит через каждый из них, удаляя текстовое содержимое каждого из них.
  var resetParas = document.querySelectorAll('.resultParas p')
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = ''
  }
  // Удаляет кнопку сброса из нашего кода.
  resetButton.parentNode.removeChild(resetButton)
  // Включает элементы формы, устанавливает фокус, делает поле доступным для следующих угадываний.
  guessField.disabled = false
  guessSubmit.disabled = false
  guessField.value = ''
  guessField.focus()
  // Удаляет цвет фона из абзаца lastResult.
  lastResult.style.backgroundColor = 'white'
  // Создаёт новое случайное число, чтобы вы не угадывали одно и тоже!
  randomNumber = Math.floor(Math.random() * 100) + 1
}

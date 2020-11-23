const difficultyForm = document.getElementById('difficulty-form');
const difficultySelect = document.getElementById('difficulty-select');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const randomWordEl = document.getElementById('random-word');
const text = document.getElementById('text');
const gameOverOverlay = document.getElementById('game-over-overlay');
// const reloadBtn = document.getElementById('reload-btn');

text.focus();

let time = 10;
let score = 0;
let randomWord;


// Don't know for now
// function getWord() {
//   fetch('https://github.com/dariusk/corpora/blob/master/data/words/common.json')

//     .then(data => {

//       console.log(data);
//     });
//   ;
// }

// getWord();

let wordsArr = ['words', 'simple', 'selection', 'whereas', 'sometimes', 'pictures', 'milestone', 'bootle', 'notebook', 'drawer'];

function getRandomWord() {
  randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  randomWordEl.innerText = randomWord;
};

getRandomWord()

// console.log(randomWord);

function updateScore() {
  score++;
  scoreEl.innerText = score;
}

function updateTime() {
  time += 3;
  timeEl.innerText = time + 's';
}

function checkWord(e) {
  if (e.target.value === randomWord) {
    getRandomWord();
    updateScore();
    updateTime();
    text.value = '';
  }
}

const timeInterval = setInterval(setTime, 1000);

function setTime() {
  time--;
  timeEl.innerText = time + 's';

  if (time === 0) {
    gameOver()
    clearInterval(time)
  }
}

setTime();

function gameOver() {
  gameOverOverlay.style.display = 'flex';
  gameOverOverlay.innerHTML = `
  <h1>Game Over</h1>
    <p>Your score is: <span>${score}</span></p>
    <button id="reload-btn" onclick="reloadGame()">Reload</button>
  `
}

function reloadGame() {
  location.reload();
}

// Event Listeners
text.addEventListener('input', checkWord);


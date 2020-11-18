const difficultyForm = document.getElementById('difficulty-form');
const difficultySelect = document.getElementById('difficulty-select');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const randomWordEl = document.getElementById('random-word');
const text = document.getElementById('text');
const gameOverOverlay = document.getElementById('game-over-overlay');
const reloadBtn = document.getElementById('reload-btn');

text.focus();

let time = 10;
let score = 0;
let randomWord;

let wordsArr = ['words', 'simple', 'selection', 'whereas', 'sometimes', 'pictures', 'milestone', 'bootle', 'notebook', 'drawer'];

function getRandomWord() {
  randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  randomWordEl.innerText = randomWord;
};

getRandomWord()

console.log(randomWord);

function checkWord(e) {
  if (e.target.value === randomWord) {
    getRandomWord();
    text.value = '';
  }

}

// Event Listeners
text.addEventListener('input', checkWord);



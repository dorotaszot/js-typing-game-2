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
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'easy';

difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'easy';

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
  time--;
  timeEl.innerText = time + 's';

  if (time === 0) {
    gameOver()
    clearInterval(time)
  }
}

function checkWord(e) {
  if (e.target.value === randomWord) {
    getRandomWord();
    updateScore();
    // changeTime();
    // updateTime();

    text.value = '';
    if (difficulty === 'easy') {
      time += 6;
    } else if (difficulty === 'medium') {
      time += 4;
    } else if (difficulty === 'hard') {
      time += 2;
    }
    updateTime();
  }
}

// function changeTime(e) {
//   difficulty = e.target.value;
//   // console.log(difficulty);
//   if (difficulty === 'easy') {
//     time += 10;

//   }
//   // updateTime()
// }

const timeInterval = setInterval(updateTime, 1000);


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
difficultySelect.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});

// Add LS
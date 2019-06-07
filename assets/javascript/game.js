let wordList = ['tippet', 'leader', 'nymphs', 'backing', 'beadhead',
    'streamers', 'mending', 'backcasting', 'caddis', 'damselfly', 'dropper',
    'drag', 'hatch', 'hackle', 'hook', 'indicator', 'mayfly', 'trout', 'bass',
    'presentation', 'riffle', 'run'
];
//Selects a random word
let word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);
let lettersGuessed = [];
let wins = 0;
let remainingGuess = 10;
//answerArray to put the lines for word on screen
let answerArray = [];

//Possibly the start of game

function startGame() {
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = ("_");
        console.log(answerArray);
        document.getElementById('answerArray').textContent = answerArray.join(' ');
        document.getElementById('guessLeft').textContent = remainingGuess;
        document.getElementById('guessedLetters').textContent = lettersGuessed[i];
    }

}

function checkWord() {
    if (answerArray.join('') === word) {
        wins++;
        alert("Winner!!! " + 'Word is ' + word);
        document.getElementById('wins').textContent = wins;
        reset();

    } else if (answerArray.join('') !== word && remainingGuess >= 1) {
        remainingGuess--;
        document.getElementById('guessLeft').textContent = remainingGuess;
    } else if (remainingGuess <= 1) {
        alert("LOSER!!!! " + "Word Was: " + word);
        reset();

    }
}

function keyEvent() {
    document.onkeyup = function(e) {
        lettersGuessed.push(e.key)
        for (let i = 0; i < word.length; i++) {
            if (lettersGuessed.includes(word[i])) {
                answerArray[i] = word[i];
                //console.log(lettersGuessed);
            }
        }
        document.getElementById('answerArray').textContent = answerArray.join(' ');
        document.getElementById('guessedLetters').textContent = lettersGuessed.join(' ,  ');
        checkWord();
    }
}

function reset() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    lettersGuessed = [];
    answerArray = [];
    remainingGuess = 10;
    document.getElementById('guessLeft').textContent = remainingGuess;
    startGame();
    keyEvent();
}
startGame();
keyEvent();
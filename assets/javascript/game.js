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

startGame();
keyEvent();

//Possibly the start of game
function startGame() {
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = ("_");
        console.log(answerArray);
        document.getElementById('answerArray').textContent = answerArray.join(' ');
        document.getElementById('guessLeft').textContent = remainingGuess = remainingGuess;
        document.getElementById('guessedLetters').textContent = lettersGuessed[i];
        //document.getElementById('wins').textContent = wins;
    }
}


function checkWord() {
    if (answerArray.join(' ') === word) {
        wins++;
        alert("Winner!!! " + 'Word is ' + word);
        document.getElementById('wins').textContent = wins;
        startGame();
    } else if (answerArray.join(' ') !== word && remainingGuess <= 0) {
        remainingGuess--;
        document.getElementById('guessLeft').textContent = remainingGuess;
    }

}

function keyEvent() {
    document.onkeyup = function(e) {
        lettersGuessed.push(e.key)
            //console.log(lettersGuessed);
        for (let i = 0; i < word.length; i++) {
            if (lettersGuessed.includes(word[i])) {
                answerArray[i] = word[i];
                //console.log(lettersGuessed);
            }
        }
        document.getElementById('answerArray').textContent = answerArray.join(' ');
        document.getElementById('guessedLetters').textContent = lettersGuessed.join(', ');
        if (answerArray.join('') === word) {
            alert("Winner!!! " + 'Word is ' + word)
            wins++;
        } else if (remainingGuess >= 0) {
            remainingGuess--;
        }
        document.getElementById('wins').textContent = wins;
        document.getElementById('guessLeft').textContent = remainingGuess;
    }
    startGame();

}


//function that regenerates the word and resets everything but the wins

/*
document.addEventListener('keyup', event => {
    //console.log('event.key', event.key);
    if (isInWord(event.key, letter)) {
        console.log(event.key + ' is in word: ' + letter);
        return answerArray.includes(letter);

    } else {
        // list wrong guesses
        console.log(event.key + ' is NOT in word: ' + word);
    }
});



//I just cant figure out how to make it all work together. I think i need another array to put the letters that they have
//pressed, if the push a correct letter it needs to go to the current word line and if it is not in the word it needs to 
//go to the guessed letters. also need a variable to keep track of remaining guess's and wins.*/
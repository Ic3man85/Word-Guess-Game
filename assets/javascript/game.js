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
let remainingLetters = word.length;
//answerArray to put the lines for word on screen
let answerArray = [];


for (let i = 0; i < word.length; i++) {
    answerArray[i] = ("_");
    console.log(answerArray);
    document.getElementById('answerArray').textContent = answerArray.join(' ');
    document.getElementById('guessLeft').textContent = remainingGuess;
    document.getElementById('wins').textContent = wins;

}
keyEvent();
guessInWord();

function guessInWord() {
    for (let i = 0; i < word.length; i++) {
        if (remainingLetters === answerArray[i]) {
            wins++
        }
    }
}

function keyEvent() {
    document.onkeyup = function(e) {
        lettersGuessed.push(e.key);
        //console.log(lettersGuessed);
        for (let i = 0; i < word.length; i++) {
            if (lettersGuessed.includes(word[i])) {
                answerArray[i] = word[i];
                //console.log(lettersGuessed);
            }
        }
        document.getElementById('answerArray').textContent = answerArray.join(' ');
        document.getElementById('guessedLetters').textContent = lettersGuessed.join(', ');
    }

}
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

// find letter in word
let letter = [];



function isInWord(letter) {
    document.getElementById('answerArray').textContent = letter.join(' ');
    return word.includes(letter);
}


captures key's pressed and wether the key pressed is in the word or not
document.addEventListener('keyup', event => {
    //console.log('event.key', event.key);
    if (isInWord(event.key, letter)) {
        console.log(event.key + ' is in word: ' + letter);
        document.getElementById('answerArray').textContent = answerArray = letter;
        return answerArray.includes(letter);

    } else {
        // list wrong guesses
        console.log(event.key + ' is NOT in word: ' + word);
    }
});

// find letter in word
let letter = [];


//find letter in word

function isInWord(letter) {
    return word.includes(letter);
}*/

//I just cant figure out how to make it all work together. I think i need another array to put the letters that they have
//pressed, if the push a correct letter it needs to go to the current word line and if it is not in the word it needs to 
//go to the guessed letters. also need a variable to keep track of remaining guess's and wins.*/
import React from "react";

let seenLetters = []

function getColor(state) {
    switch (state) {
        case "correct": return "#3fbf00";
        case "misplaced": return "#ff9300";
        case "miss": return "#323232ff";
        case "empty": return "#202020ff";
    };
}

async function fetchWord() {
    const url = 'https://random-word-api.herokuapp.com/word?length=5&lang=es';
    const response = await fetch(url);
    const json = await response.json();
    console.log("Palabra:", json[0])
    return json[0];
}

function checkWordMatches(word, letters) {
    const result = []
    const wordArray = word.split("");

    letters.forEach(letter => {
        if (wordArray.includes(letter)) {

            result.push(
                createRecord(
                    letter,
                    letters.index(letter),
                    getLetterState(letter, letters, wordArray)
                )
            );

            seenLetters.push(letter);

        } else {
            result.push(
                createRecord(
                    letter, letters.index(letter), "miss"
                )
            );
        }
    });

    seenLetters = [];

    return result
}

function getLetterState(letter, letters, word) {

    let state = "contains";

    const letterCount = getLetterCount(letters.toArray());

    if (letterCount <= 1) {
        if (letters.index(letter) === word.indexOf(letter)) {
            return "correct";
        }
    } else {
        if (seenLetters.includes(letter)) {
            return "miss";
        }
    }

    return state;
}


function createRecord(letter, index, state) {
    return { letter, index, state };
}

function getLetterCount(letters, letter) {

    let count = 0;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letter) {
            count++;
        }
    }

    return count;
}

function replaceAccents(word) {
    const accents = ["Á", "É", "Í", "Ó", "Ú"];
    const replacements = ["A", "E", "I", "O", "U"];

    let formattedWord = "";

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        const index = accents.indexOf(letter);

        if (index !== -1) {
            formattedWord += replacements[index];
        } else {
            formattedWord += letter;
        }
    }

    return formattedWord;
}

function createDataRecord(letter, state) {
    return { letter, state };
}

function createLettersData(letters, matches) {
    const lettersArray = letters.toArray();
    const data = [];

    lettersArray.forEach(() => {
        data.push(
            createDataRecord(
                "L",
                "correct"
            )
        );
    });

    return data;
}

export { fetchWord, getColor, checkWordMatches, replaceAccents, createLettersData }
import React from "react";

function getColor(state) {
    switch (state) {
        case "correct": return "#3fbf00";
        case "contains": return "#ff9300";
        case "miss": return "#323232ff";
        case "empty": return "#202020ff";
    };
}

async function fetchWord(lang) {
    const url = 'https://random-word-api.herokuapp.com/word?length=5&lang=' + lang;
    const response = await fetch(url);
    const json = await response.json();
    console.log("Word:", json[0])
    return json[0];
}

function getWordMatches(word, letters) {
    const wordArray = word.split("");
    const result = [];
    const matches = createMatches(wordArray, letters);
    const seenLetters = new Set();

    let index = 0;

    for (const letter of letters) {

        const hasLetter = Array.from(matches.values()).includes(letter);

        if (!hasLetter) {
            result.push(
                createRecord(
                    letter,
                    letters.indexOf(letter),
                    "miss"
                )
            );
            index++;
            continue;
        }

        seenLetters.add(letter);

        if (hasLetter) {

            if (letters[index] === matches.get(index)) {
                result.push(
                    createRecord(
                        letter,
                        letters.indexOf(letter),
                        "correct"
                    )
                );
                index++;
                continue;
            }

            if (getLetterCount(letter, letters) > 1 && seenLetters.has(letter)) {
                result.push(
                    createRecord(
                        letter,
                        letters.indexOf(letter),
                        "contains"
                    )
                );
            }

            result.push(
                createRecord(
                    letter,
                    letters.indexOf(letter),
                    "miss"
                )
            );
            index++;
            continue;
        }
    }

    return result;
}



function createMatches(word, letters) {
    const matches = new Map();

    for (let i = 0; i < letters.length; i++) {
        matches.set(i, word[i]);
    }

    return matches;
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
    const lettersArray = letters;
    const data = [];

    try {
        for (const i in lettersArray) {
            data.push(
                createDataRecord(
                    matches[i].letter,
                    matches[i].state
                )
            );
        }
    } catch (ex) {
        console.log(ex)
        console.log(matches)
    }


    return data;
}

function isMatchFinished(data) {
    return data.every(d => d.state === "correct");
}

function getMapLastIndex(map) {
    const keys = Array.from(map.keys());
    keys.sort((a, b) => a - b);
    return keys[map.size - 1];
}
export { fetchWord, getColor, getWordMatches, replaceAccents, createLettersData, isMatchFinished }
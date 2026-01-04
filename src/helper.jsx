/**
 * 
 * @param {WebSocket} socket 
 * @param {Object} message 
 */
function sendInfo(socket, message) {
    if (!socket) {
        console.error("Socket is undefined");
        return;
    }

    const json = JSON.stringify(message);

    if (socket.readyState === WebSocket.OPEN) {
        socket.send(json);
    } else {
        socket.addEventListener('open', () => {
            socket.send(json);
        }, { once: true });
    }
}

/**
 * 
 * @param {Array<Object>} players 
 * @param {String} filter 
 * @returns {Array<Object>} the sorted player list 
 */
function sortPlayers(players, filter, descending = true) {
    if (descending) {
        switch (filter) {
            case "elo": return players.sort((a, b) => Number(b.elo) - Number(a.elo));
            case "wins": return players.sort((a, b) => Number(b.wins) - Number(a.wins));
            case "losses": return players.sort((a, b) => Number(b.losses) - Number(a.losses));
            case "total matches": return players.sort((a, b) => Number(Number(b.losses) + Number(b.wins)) - Number(Number(a.losses) + Number(a.wins)));
            case "winLoseRatio": return players.sort((a, b) => Number(((b?.wins / b?.losses) * 100).toFixed()) - Number(((a?.wins / a?.losses) * 100).toFixed()));
        }
    } else {
        switch (filter) {
            case "elo": return players.sort((a, b) => Number(a.elo) - Number(b.elo));
            case "wins": return players.sort((a, b) => Number(a.wins) - Number(b.wins));
            case "losses": return players.sort((a, b) => Number(a.losses) - Number(b.losses));
            case "total matches": return players.sort((a, b) => Number(Number(a.losses) + Number(a.wins)) - Number(Number(b.losses) + Number(b.wins)));
            case "winLoseRatio": return players.sort((a, b) => Number(((a?.wins / a?.losses) * 100).toFixed()) - Number(((b?.wins / b?.losses) * 100).toFixed()));
        }
    }
}

function sortChart(players, filter, descending) {

    if (!["wins", "losses", "total matches"].includes(filter)) { return players.sort((a, b) => Number(b.wins) - Number(a.wins));; } 

    console.log(filter);

    if (descending) {
        switch (filter) {
            case "wins": return players.sort((a, b) => Number(b.wins) - Number(a.wins));
            case "losses": return players.sort((a, b) => Number(b.losses) - Number(a.losses));
            case "total matches": return players.sort((a, b) => Number(Number(b.losses) + Number(b.wins)) - Number(Number(a.losses) + Number(a.wins)));
        }
    } else {
        switch (filter) {
            case "wins": return players.sort((a, b) => Number(a.wins) - Number(b.wins));
            case "losses": return players.sort((a, b) => Number(a.losses) - Number(b.losses));
            case "total matches": return players.sort((a, b) => Number(Number(a.losses) + Number(a.wins)) - Number(Number(b.losses) + Number(b.wins)));
        }
    }
}

/**
 * Parses the submmited word info as an object to be sent to the other player
 * @param {Array<Object>} info
 * @param {String} wordToGuess
 * @returns {Object} the response info
 */
function parseInfo(info, wordToGuess) {
    return {
        letters:
            [
                { letter: info[0].letter, index: 0, state: info[0].state },
                { letter: info[1].letter, index: 1, state: info[1].state },
                { letter: info[2].letter, index: 2, state: info[2].state },
                { letter: info[3].letter, index: 3, state: info[3].state },
                { letter: info[4].letter, index: 4, state: info[4].state }
            ],
        wordToGuess: wordToGuess
    }
}

/**
 * Compares two states and returns the highest:
 * correct > contains > miss
 * @param {String} existingState
 * @param {String} foundState
 * @returns {String} The highest compared state 
 */
function compareStates(existingState, foundState) {
    const priority = {
        miss: 0,
        contains: 1,
        correct: 2
    };

    return priority[foundState] > priority[existingState]
        ? foundState
        : existingState;
}

/**
 * 
 * @param {String} state The state of a letter 
 * @returns {String} The HEX code of the state's assigned color.
 */
function getColor(state) {
    switch (state) {
        case "correct": return "#3fbf00";
        case "contains": return "#ff9300";
        case "miss": return "#323232ff";
        case "empty": return "#202020ff";
    };
}

function convert64ToURL(base64, mimeType = "image/png") {
    return `data:${mimeType};base64,${base64}`;
};

/**
 * 
 * @param {String} lang The language abbreviation (ex: "es", "en") 
 * @param {Number} length The length of the word
 * @returns {String} The fetched word
 */
async function fetchWord(lang, length) {
    const url = 'https://random-word-api.herokuapp.com/word?length=' + length + '&lang=' + lang;
    const response = await fetch(url);
    const json = await response.json();
    console.log("Word:", json[0])
    return json[0];
}

/**
 * @param {String} word Word to guess
 * @param {Array<String>} letters Submitted letres
 * @returns {Array<Object>} An array of objects that contains info for each letter
 */
function getWordMatches(word, letters) {
    const wordArray = word.split("");
    const result = [];

    const letterCount = {};

    for (const char of wordArray) {
        letterCount[char] = (letterCount[char] ?? 0) + 1;
    }

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];

        if (letter === wordArray[i]) {
            result[i] = createRecord(letter, i, "correct");
            letterCount[letter]--;
        }
    }

    for (let i = 0; i < letters.length; i++) {
        if (result[i]) { continue; }

        const letter = letters[i];

        if (letterCount[letter] > 0) {
            result[i] = createRecord(letter, i, "contains");
            letterCount[letter]--;
        } else {
            result[i] = createRecord(letter, i, "miss");
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
export {
    fetchWord,
    getColor,
    getWordMatches,
    replaceAccents,
    createLettersData,
    isMatchFinished,
    sendInfo,
    parseInfo,
    compareStates,
    sortPlayers,
    sortChart,
    convert64ToURL
}
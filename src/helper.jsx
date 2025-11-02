import React from "react";

function getColor(state) {
    switch(state) {
        case "correct": return "#3fbf00";
        case "misplaced": return "#ff9300";
        case "miss": return "#323232ff";
    };
}

async function fetchWord() {
    const response = await fetch('https://random-word-api.herokuapp.com/word?length=5&lang=es');
    const json = await response.json();
    return json[0];
}

export { fetchWord, getColor }
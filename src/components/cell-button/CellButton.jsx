import { React, useState } from "react";
import Stack from "../../Stack";
import Cell from "../letter-cell/cell";
import './CellButton.css'
import { toast } from "react-toastify";
import { createLettersData } from "../../helper";

export default function ButtonCell(props) {
    const letter = props.letter;
    const remove = props.remove ?? false;

    const modifyLetters = (letter, remove = false) => {
        const newStack = new Stack();
        newStack.items = [...props.letters.items];

        if (props.submitWord) {

            if (props.letters.size() < props.length) {
                toast.warn("You may fill the word before submitting it.");
                return;
            }

            const emptyStack = new Stack();

            const newMap = new Map();
            props.previousWords.forEach((value, key) => {
                newMap.set(key, value);
            });

            newMap.set(
                props.currentWordIndex,
                props.matches
            );

            props.setPreviousWords(newMap);
            props.setCurrentWordIndex(props.currentWordIndex + 1);

            props.setLettersData(
                createLettersData(
                    props.letters,
                    props.matches
                )
            );

            props.setLetters(emptyStack);
            props.setCurrentLetterIndex(0);

            props.setPreviousLetters([]);

            return;
        }

        if (!remove) {

            if (newStack.size() === props.length) {
                toast.warn("You can't add more letters.");
                return;
            }

            newStack.push(letter);
            props.setCurrentLetter(letter);

            let prevLetters = props.previousLetters;
            let prevLettersCopy = [];
            prevLetters.forEach(e => prevLettersCopy.push(e));
            prevLettersCopy.push(letter);
            props.setPreviousLetters(prevLettersCopy);

            props.setCurrentLetterIndex(props.currentLetterIndex + 1);

        } else {

            let prevLetters = props.previousLetters;
            let prevLettersCopy = [];
            prevLetters.forEach(e => prevLettersCopy.push(e));
            prevLettersCopy.pop();
            props.setPreviousLetters(prevLettersCopy);

            newStack.pop();
            props.setCurrentLetterIndex(props.currentLetterIndex - 1);
        }

        props.setLetters(newStack);
    };

    return (
        <button onClick={() => modifyLetters(letter, remove)}>
            <Cell state="miss" letter={letter} />
        </button>
    );
}
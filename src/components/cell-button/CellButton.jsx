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

            if (props.letters.size() < 5) {
                toast.warn("You may fill the word before submitting it.");
                return;
            }

            const emptyStack = new Stack();

            props.setCurrentWordIndex(props.currentWordIndex + 1);
            props.setLetters(emptyStack);

            props.setLettersData (
                createLettersData (
                    props.letters,
                    props.matches
                )
            );

            return;
        }

        if (!remove) {

            if (newStack.size() === 5) {
                toast.warn("You can't add more letters.");
                return;
            }

            newStack.push(letter);

        } else {
            newStack.pop();
        }

        props.setLetters(newStack);
    };

    return (
        <button onClick={() => modifyLetters(letter, remove)}>
            <Cell state="miss" letter={letter} />
        </button>
    );
}
import { React, useState } from "react";
import Stack from "../../Stack";
import Cell from "../letter-cell/cell";
import './CellButton.css'

export default function ButtonCell(props) {
    const letter = props.letter;
    const remove = props.remove ?? false;

    const modifyLetters = (letter, remove = false) => {
        const newStack = new Stack();
        newStack.items = [...props.letters.items];

        if (!remove) {
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
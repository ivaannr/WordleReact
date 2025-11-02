import {React, useState} from "react";
import Cell from "../letter-cell/cell";
import './CellButton.css'

export default function ButtonCell(props) {
    
    const letter = props.letter;
    const remove = props.remove?? false;

    const modifyLetters = () => {
        const newStack = props.letters;
        
        if (!remove) {
            newStack.push(letter);
        } else {
            newStack.pop();
        }

        console.log(letter);

        console.log(newStack)
        
        props.setLetters(newStack);
    };
    
    return (
        <button onClick={modifyLetters}>
            <Cell state="miss" letter={letter} />
        </button>
    );

}
import React from "react";
import './cell.css'
import { getColor } from "../../helper";

export default function Cell(props) {
    const { letter, letterID, state, currentLetterIndex, currentLetter, isWordActive, previousLetters } = props;
    const color = getColor(state);
    const isActive = letterID === currentLetterIndex - 1;

    //const assignedLetter = (previousLetters ?? [])[letterID] ?? "";

    //console.log(`The assigned letter to cell with index ${letterID} is ${assignedLetter}`);

    if (!isActive) {
        return (
            <div
                className="cell"
                style={{ backgroundColor: color }}
            >
                <h1>
                    {letter.toString().toUpperCase()}
                </h1>
            </div>
        );
    }

    if (isWordActive) {
        return (
            <div
                className="cell"
                style={{ backgroundColor: color }}
            >
                <h1>
                    {currentLetter} 
                </h1>
            </div>
        );
    }


}


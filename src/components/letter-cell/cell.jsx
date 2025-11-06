import React, { useEffect, useState } from "react";
import './cell.css'
import { getColor } from "../../helper";

export default function Cell(props) {
    const { letter, letterID, state, currentLetterIndex, currentLetter, isWordActive, previousLetters } = props;
    const color = getColor(state);
    const isActive = letterID === currentLetterIndex;
    const assignedLetter = previousLetters?.get(letterID);

    if (!isActive && isWordActive) {
        return (
            <div
                className="cell"
                style={{ backgroundColor: color }}
            >
                <h1>
                    {assignedLetter ?? ""}
                </h1>
            </div>
        );
    } else {
        return (
            <div
                className="cell"
                style={{ backgroundColor: color }}
            >
                <h1>
                    {letter}
                </h1>
            </div>
        );
    }


}


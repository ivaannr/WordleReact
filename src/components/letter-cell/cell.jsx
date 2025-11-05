import React, { useEffect, useRef } from "react";
import './cell.css'
import { getColor } from "../../helper";

export default function Cell(props) {
    const { letter, state, currentLetterIndex } = props;
    const color = getColor(state);
    const headerRef = useRef(null);

    const cell = (
    <div
        className="cell"
        style={{ backgroundColor: color }}
    >
        <h1 ref={headerRef}>{letter.toString().toUpperCase()}</h1>
    </div>
    );

    

    useEffect(() => {
        headerRef.current.textContent = letter.toString();
    }, [currentLetterIndex]);

    return cell;
}
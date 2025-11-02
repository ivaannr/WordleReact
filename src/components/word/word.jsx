import { useEffect, useRef } from "react";
import './word.css'
import Cell from '../../components/letter-cell/cell'
import ButtonCell from "../cell-button/CellButton";

export default function Word(props) {
    const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current) {
            const cells = divRef.current.children;
            Array.from(cells).forEach((cell, i) => {
                        
            });
        }
    }, []);

    return (
        <div className="letter" ref={divRef}>
            <Cell state="correct" letter="L" />
            <Cell state="miss" letter="A" />
            <Cell state="miss" letter="R" />
            <Cell state="misplaced" letter="G" />
            <Cell state="correct" letter="O" />
        </div>
    );
}
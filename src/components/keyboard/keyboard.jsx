import React from "react";
import './Keyboard.css'
import ButtonCell from "../cell-button/CellButton";

export default function Keyboard(props) {
    return (
        <>
            <div className="keyboard">
                <div className="row">
                    <ButtonCell letter="Q" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="W" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="E" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="R" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="T" letters={props.letters} setLetters={props.setLetters} />
                </div>
                <div className="row">
                    <ButtonCell letter="Y" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="U" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="I" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="O" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="P" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="A" letters={props.letters} setLetters={props.setLetters} />
                </div>
                <div className="row">
                    <ButtonCell letter="S" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="D" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="F" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="G" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="H" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="J" letters={props.letters} setLetters={props.setLetters} />
                </div>
                <div className="row">
                    <ButtonCell letter="K" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="L" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="Ñ" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="Z" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="X" letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="C" letters={props.letters} setLetters={props.setLetters} />
                </div>
                <div className="row">
                    <ButtonCell letter="V"  letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="B"  letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="N"  letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="M"  letters={props.letters} setLetters={props.setLetters} />
                    <ButtonCell letter="⬅️" letters={props.letters} setLetters={props.setLetters} remove={true}/>
                </div>

            </div>
        </>
    );
}
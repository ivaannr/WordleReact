import React from "react";
import './Keyboard.css'
import ButtonCell from "../cell-button/CellButton";

export default function Keyboard(props) {
    return (
        <>
            <div className="keyboard">
                <div className="row">
                    <ButtonCell letter="Q" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="W" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="E" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="R" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="T" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                </div>
                <div className="row">
                    <ButtonCell letter="Y" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="U" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="I" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="O" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="P" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="A" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                </div>
                <div className="row">
                    <ButtonCell letter="S" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="D" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="F" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="G" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="H" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="J" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                </div>
                <div className="row">
                    <ButtonCell letter="K" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="L" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="Ñ" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="Z" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="X" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="C" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                </div>
                <div className="row">
                    <ButtonCell letter="V" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="B" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="N" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                    <ButtonCell letter="M" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} />
                </div>
                <div className="row">
                    <ButtonCell
                        letter="✓"
                        letters={props.letters}
                        setLetters={props.setLetters}
                        currentWordIndex={props.currentWordIndex}
                        setCurrentWordIndex={props.setCurrentWordIndex}
                        setLettersData={props.setLettersData}
                        matches={props.matches}
                        submitWord={true}
                        setCurrentLetterIndex={props.setCurrentLetterIndex}
                        currentLetterIndex={props.currentLetterIndex}
                        currentLetter={props.currentLetter}
                        setCurrentLetter={props.setCurrentLetter}
                        previousWords={props.previousWords}
                        setPreviousWords={props.setPreviousWords}
                        length={props.length}
                    />
                    <ButtonCell
                        letter="⬅"
                        letters={props.letters}
                        setLetters={props.setLetters}
                        remove={true}
                        setCurrentLetterIndex={props.setCurrentLetterIndex}
                        currentLetter={props.currentLetter}
                        setCurrentLetter={props.setCurrentLetter}
                        length={props.length}
                    />
                </div>

            </div>
        </>
    );
}
import React from "react";
import './Keyboard.css'
import ButtonCell from "../cell-button/CellButton";

/*TODO => REFACTORIZAR ESTO DIOS SANTO*/
export default function Keyboard(props) {
    if (props.isActive) {
        return (
            <>
                <div className="keyboard">
                    <div className="row">
                        <ButtonCell letter="Q" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="W" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="E" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="R" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="T" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                    </div>
                    <div className="row">
                        <ButtonCell letter="Y" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="U" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="I" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="O" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="P" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="A" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                    </div>
                    <div className="row">
                        <ButtonCell letter="S" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="D" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="F" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="G" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="H" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="J" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                    </div>
                    <div className="row">
                        <ButtonCell letter="K" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="L" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="Ñ" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="Z" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="X" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="C" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                    </div>
                    <div className="row">
                        <ButtonCell letter="V" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="B" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="N" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        <ButtonCell letter="M" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
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
                            previousLetters={props.previousLetters}
                            setPreviousLetters={props.setPreviousLetters}
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
                            previousLetters={props.previousLetters}
                            setPreviousLetters={props.setPreviousLetters}
                            currentLetterIndex={props.currentLetterIndex}
                        />
                    </div>

                </div>
            </>
        );
    } else {
        return (
            <div style={{ display: "none" }}>
                <>
                    <div className="keyboard">
                        <div className="row">
                            <ButtonCell letter="Q" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="W" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="E" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="R" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="T" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        </div>
                        <div className="row">
                            <ButtonCell letter="Y" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="U" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="I" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="O" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="P" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="A" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        </div>
                        <div className="row">
                            <ButtonCell letter="S" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="D" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="F" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="G" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="H" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="J" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        </div>
                        <div className="row">
                            <ButtonCell letter="K" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="L" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="Ñ" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="Z" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="X" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="C" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                        </div>
                        <div className="row">
                            <ButtonCell letter="V" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="B" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="N" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
                            <ButtonCell letter="M" letters={props.letters} setLetters={props.setLetters} length={props.length} setCurrentLetterIndex={props.setCurrentLetterIndex} currentLetterIndex={props.currentLetterIndex} currentLetter={props.currentLetter} setCurrentLetter={props.setCurrentLetter} previousLetters={props.previousLetters} setPreviousLetters={props.setPreviousLetters} />
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
                                previousLetters={props.previousLetters}
                                setPreviousLetters={props.setPreviousLetters}
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
                                previousLetters={props.previousLetters}
                                setPreviousLetters={props.setPreviousLetters}
                                currentLetterIndex={props.currentLetterIndex}
                            />
                        </div>

                    </div>
                </>
            </div>
        );
    }
}
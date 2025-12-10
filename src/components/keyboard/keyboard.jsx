import React from "react";
import './Keyboard.css'
import ButtonCell from "../cell-button/CellButton";

const Keyboard = ({
        isActive,
        letters,
        setLetters,
        length,
        setCurrentLetterIndex,
        currentLetterIndex,
        currentLetter,
        setCurrentLetter,
        previousLetters,
        setPreviousLetters,
        currentWordIndex,
        setCurrentWordIndex,
        setLettersData,
        matches,
        previousWords,
        setPreviousWords
    }) => {

    const rows = [
        ["Q", "W", "E", "R", "T"],
        ["Y", "U", "I", "O", "P", "A"],
        ["S", "D", "F", "G", "H", "J"],
        ["K", "L", "Ñ", "Z", "X", "C"],
        ["V", "B", "N", "M"],
    ];

    const commonProps = {
        letters,
        setLetters,
        length,
        setCurrentLetterIndex,
        currentLetterIndex,
        currentLetter,
        setCurrentLetter,
        previousLetters,
        setPreviousLetters,
        previousWords,
        setPreviousWords
    };

    const renderRow = (lettersRow) => (
        lettersRow.map((letter) => (
            <ButtonCell
                key={letter}
                letter={letter}
                {...commonProps}
            />
        ))
    );

    if (isActive) {
        return (
            <div className="keyboard">
                {rows.map((row, index) => (
                    <div className="row" key={index}>
                        {renderRow(row)}
                    </div>
                ))}
                <div className="row">
                    <ButtonCell
                        letter="✓"
                        currentWordIndex={currentWordIndex}
                        setCurrentWordIndex={setCurrentWordIndex}
                        setLettersData={setLettersData}
                        matches={matches}
                        submitWord={true}
                        {...commonProps}
                    />
                    <ButtonCell
                        letter="⬅"
                        {...commonProps}
                        remove={true}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ display: "none" }}>
                <div className="keyboard">
                    {rows.map((row, index) => (
                        <div className="row" key={index}>
                            {renderRow(row)}
                        </div>
                    ))}
                    <div className="row">
                        <ButtonCell
                            letter="✓"
                            currentWordIndex={currentWordIndex}
                            setCurrentWordIndex={setCurrentWordIndex}
                            setLettersData={setLettersData}
                            matches={matches}
                            submitWord={true}
                            {...commonProps}
                        />
                        <ButtonCell
                            letter="⬅"
                            {...commonProps}
                            remove={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default Keyboard

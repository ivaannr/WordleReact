import './word.css'
import Cell from '../letter-cell/cell'
import { useEffect } from 'react';

export default function Word(props) {
  const { currentWordIndex, currentLetterIndex, lettersData, letterID, previousWords, length, currentLetter, previousLetters } = props;
  const isWordActive = letterID === currentWordIndex + 1;

  return (
    <div className="letter">
      {Array.from({ length }).map((_, i) => {
        const cellData = (isWordActive 
          ? lettersData[i]
          : previousWords.get(letterID)[i] ) ?? { state: "empty", letter: "" };

        return (
          <Cell
            key={i}
            letterID={i}
            state={cellData.state}
            letter={cellData.letter}
            currentLetterIndex={currentLetterIndex}
            currentLetter={currentLetter}
            isWordActive={isWordActive}
            previousLetters={previousLetters}
          />
        );
      })}
    </div>
  );
}
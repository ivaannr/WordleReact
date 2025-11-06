import './main-container.css'
import Word from '../word/word';
import { useEffect } from 'react';
export default function MainContainer(props) {
  const { currentWordIndex, currentLetterIndex, length, lettersData, previousWords, currentLetter, previousLetters, setPreviousLetters } = props

  return (
    <div className="box">
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <Word
            key={index}
            letterID={index}
            currentWordIndex={currentWordIndex}
            lettersData={index === currentWordIndex ? lettersData : []}
            length={length}
            currentLetterIndex={currentLetterIndex}
            previousWords={previousWords}
            currentLetter={currentLetter}
            previousLetters={previousLetters}
            setPreviousLetters={setPreviousLetters}
          />
        )
      })}
    </div>
  );
}
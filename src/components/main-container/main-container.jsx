import './main-container.css'
import Word from '../word/word';
import { useEffect } from 'react';
export default function MainContainer(props) {
  const { letters, currentWordIndex, currentLetterIndex, length, lettersData, previousWords } = props

  return (
    <div className="box">
      {Array.from({ length: 6 }).map((_, index) => {

        let lettersArray = previousWords[index] ?? letters;
        
        return (
          <Word
            key={index}
            letterID={index}
            letters={lettersArray ?? letters} 
            currentWordIndex={currentWordIndex}
            lettersData={lettersData}
            length={length}
            currentLetterIndex={currentLetterIndex}
            previousWords={previousWords}
          />
        )
      })}
    </div>
  );
}
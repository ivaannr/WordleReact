import './main-container.css'
import Word from '../word/word';

export default function MainContainer( { currentWordIndex, currentLetterIndex, length, lettersData, previousWords, currentLetter, previousLetters, setPreviousLetters, wordCount } ) {
  
  return (
    <div className="box">
      {Array.from({ length: wordCount }).map((_, index) => {
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
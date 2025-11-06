import './word.css'
import Cell from '../letter-cell/cell'

export default function Word(props) {
  const { currentWordIndex, currentLetterIndex, lettersData, letterID, previousWords, length } = props;
  const isActive = letterID === currentWordIndex + 1;

  return (
    <div className="letter">
      {Array.from({ length }).map((_, i) => {
        const cellData = (isActive 
          ? lettersData[i]
          : previousWords.get(letterID)[i] ) ?? { state: "empty", letter: "" };

        return (
          <Cell
            key={i}
            letterID={i}
            state={cellData.state}
            letter={cellData.letter}
            currentLetterIndex={currentLetterIndex}
          />
        );
      })}
    </div>
  );
}
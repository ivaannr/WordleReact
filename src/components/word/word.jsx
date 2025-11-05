import './word.css'
import Cell from '../letter-cell/cell'

export default function Word(props) {
  const { currentWordIndex, currentLetterIndex, lettersData, letterID, previousWords } = props;
  const isActive = letterID === currentWordIndex;

  return (
    <div className="letter">
      {Array.from({ length: props.length }).map((_, i) => {

        const cellData = isActive 
                         ? lettersData[i] 
                         : { state: previousWords.get(i).state, letter: previousWords.get(i).letter }
        return (
          <Cell
            key={i}
            letterID={i}
            state={cellData?.state ?? "empty"}
            letter={cellData?.letter ?? ""}
            currentLetterIndex={currentLetterIndex}
          />
        );
      })}
    </div>
  );
}
import './word.css'
import Cell from '../letter-cell/cell'

export default function Word(props) {
  const { currentWordIndex, lettersData, letterID } = props;

  const isActive = letterID === currentWordIndex;

  return (
    <div className="letter">
      {Array.from({ length: props.length }).map((_, i) => {
        const cellData = isActive ? lettersData[i] : { state: "empty", letter: "" };
        return (
          <Cell
            key={i}
            state={cellData?.state ?? "empty"}
            letter={cellData?.letter ?? ""}
          />
        );
      })}
    </div>
  );
}
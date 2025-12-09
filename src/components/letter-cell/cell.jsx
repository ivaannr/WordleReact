import './cell.css'
import { getColor } from "../../helper";

export default function Cell(props) {
    const { letter, letterID, state, currentLetterIndex, currentLetter, isWordActive, previousLetters } = props;
    const color = getColor(state);
    const isActive = letterID === currentLetterIndex;
    const assignedLetter = previousLetters?.get(letterID);

    let borderColor;

    if (!isActive && isWordActive) {
        borderColor = '#444444';
    } else {
        borderColor = '#90caf9';
    }

    if (!isActive && isWordActive) {
        return (
            <div
                className="cell"
                style={{
                    backgroundColor: color,
                    border: `1px solid ${borderColor}`,
                    borderRadius: `5px`
                    
                }}
            >
                <h1>
                    {assignedLetter ?? ""}
                </h1>
            </div>
        );
    } else {
        return (
            <div
                className="cell"
                style={{
                    backgroundColor: color,
                    border: `1px solid ${borderColor}`,
                    borderRadius: `5px`
                }}
            >
                <h1>
                    {letter}
                </h1>
            </div>
        );
    }
}
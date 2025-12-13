import '../letter-cell/cell.css'
import { getColor } from "../../helper";

export default function OppCell( { data } ) {
    const color = getColor(data.state);

    return (
        <div
            className="cell"
            style={{
                backgroundColor: color,
                border: `1px solid #000`,
                borderRadius: `5px`
            }}
        >
            <h1>
                {data.letter}
            </h1>
        </div>
    );
}
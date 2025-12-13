import '../word/word.css'
import OppCell from './opponentCell';

export default function OppWord( { id, data, length, opponentWordIndex, previousOpponentWords })  {

  const isWordActive = opponentWordIndex === id;

  if (isWordActive) {
    return (
      <div className="letter">
        {Array.from({ length }).map((_, i) => {
          return (
            <OppCell
              key={i}
              data={ /* data */ { letter: "a", state: "correct" } }
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="letter">
        {Array.from({ length }).map((_, i) => {
          return (
            <OppCell
              key={i}
              data={ /* previousOpponentWords[key] */ { letter: "b", state: "miss" } }
            />
          );
        })}
      </div>
    );
  }

}
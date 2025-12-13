import '../main-container/main-container.css'
import OppWord from './opponentWord';

export default function OppPanel({ data, length, wordCount, opponentWordIndex, previousOpponentWords, disabled }) {

  if (disabled) {
    return (
      <div style={{ display: "none" }}>
        <div className="box">
          {Array.from({ length: wordCount }).map((_, index) => {
            return (
              <OppWord
                key={index}
                id={index}
                data={data}
                length={length}
                opponentWordIndex={opponentWordIndex}
                previousOpponentWords={previousOpponentWords}
              />
            )
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="box">
      {Array.from({ length: wordCount }).map((_, index) => {
        return (
          <OppWord
            key={index}
            id={index}
            data={data}
            length={length}
            opponentWordIndex={opponentWordIndex}
            previousOpponentWords={previousOpponentWords}
          />
        )
      })}
    </div>
  );
}
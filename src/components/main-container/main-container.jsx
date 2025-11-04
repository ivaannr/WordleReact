import './main-container.css'
import Word from '../word/word';

export default function MainContainer(props) {
  return (
    <div className="box">
      {Array.from({ length: 6 }).map((_, index) => (
        <Word
          key={index}
          letterID={index}
          letters={props.letters}
          currentWordIndex={props.currentWordIndex}
          lettersData={props.lettersData}
        />
      ))}
    </div>
  );
}
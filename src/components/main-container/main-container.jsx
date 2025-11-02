import './main-container.css'
import Word from '../word/word';
import { fetchWord } from '../../helper';

export default function MainContainer(props) {
    
    const word = fetchWord();

    return (
        <>
            <div className="box">
                <Word letters={props.letters}/>
                <Word letters={props.letters}/>
                <Word letters={props.letters}/>
                <Word letters={props.letters}/>
                <Word letters={props.letters}/>
                <Word letters={props.letters}/>
            </div>
        </>
    );
}
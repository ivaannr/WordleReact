import './main-container.css'
import Word from '../word/word';

export default function MainContainer(props) {

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
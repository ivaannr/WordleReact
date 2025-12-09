import { React } from "react";
import Cell from "../letter-cell/cell";
import './CellButton.css'
import { toast } from "react-toastify";
import { createLettersData } from "../../helper";

let indexmap = new Map([
    [0, { state: "empty", letter: "" }],
    [1, { state: "empty", letter: "" }],
    [2, { state: "empty", letter: "" }],
    [3, { state: "empty", letter: "" }],
    [4, { state: "empty", letter: "" }],
    [5, { state: "empty", letter: "" }]
])
let previousLettersMap = new Map([]);
Array.from({ length: 5 }).forEach((_, i) => {
    previousLettersMap.set(i, "")
})

export default function ButtonCell({
    letter,
    remove = false,
    letters,
    setLetters,
    length,
    currentLetterIndex,
    setCurrentLetterIndex,
    currentLetter,
    setCurrentLetter,
    previousLetters,
    setPreviousLetters,
    submitWord,
    matches,
    currentWordIndex,
    setCurrentWordIndex,
    setLettersData,
    previousWords,
    setPreviousWords
}) {
    const modifyLetters = (letter, remove = false) => {
        const cloned = [...letters];

        if (submitWord) {
            if (letters.length !== length) {
                toast.warn("You may fill the word before submitting it.");
                return;
            }

            const emptyArr = [];
            const newMap = new Map(previousWords);
            newMap.set(currentWordIndex, matches);
            setPreviousWords(newMap);
            setCurrentWordIndex(currentWordIndex + 1);
            setLettersData(createLettersData(letters, matches));
            setLetters(emptyArr);
            setCurrentLetterIndex(0);
            setPreviousLetters(previousLettersMap);
            return;
        }

        if (!remove) {
            if (cloned.length === length) {
                toast.warn("You can't add more letters.");
                return;
            }

            cloned.push(letter);
            setCurrentLetter(letter);

            const prevLettersCopy = new Map(previousLetters);
            prevLettersCopy.set(currentLetterIndex, letter);
            setPreviousLetters(prevLettersCopy);
            setCurrentLetterIndex(currentLetterIndex => currentLetterIndex + 1);
        } else {

            const canRemove = currentLetterIndex > 0;

            if (!canRemove) {
                toast.warn("You can't remove any letter.");
                return;
            }

            const prevLettersCopy = new Map(previousLetters);
            prevLettersCopy.delete(currentLetterIndex);
            setPreviousLetters(prevLettersCopy);
            cloned.pop();
            setCurrentLetterIndex(currentLetterIndex => currentLetterIndex - 1);
        }

        setLetters(cloned);
    };

    return (
        <button onClick={() => modifyLetters(letter, remove)}>
            <Cell state="miss" letter={letter} />
        </button>
    );
}

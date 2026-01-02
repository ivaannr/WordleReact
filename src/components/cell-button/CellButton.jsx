import { useRef, useEffect, useContext } from "react";
import Cell from "../letter-cell/cell";
import './CellButton.css'
import { toast } from "react-toastify";
import { createLettersData, sendInfo, parseInfo } from "../../helper";
import { UserContext } from "../../context/UserContext";
import { modifyUser } from "../../helper.fetching"

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
    setPreviousWords,
    word,
    openWinModal,
    isPopUpOpen,
    openLoseModal,
    socket,
    isMultiplayer,
    setHasWon,
    areKeysEnabled,
    disableKeyboard
}) {
    const buttonRef = useRef();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {

        const handleKeyDown = (e) => {

            let key = e.key.toUpperCase();

            switch (key) {
                case "ENTER": key = "✓"; break;
                case "BACKSPACE": key = "⬅"; break;
            };

            if (key === letter.toUpperCase() && !isPopUpOpen) {
                e.preventDefault();
                buttonRef.current.click();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);

    }, [letter, isPopUpOpen]);

    const modifyLetters = (letter, remove = false) => {
        const cloned = [...letters];

        console.log

        if (submitWord) {

            if (!areKeysEnabled) { return; }

            if (letters.length !== length) {
                toast.warn("You may fill the word before submitting it.");
                return;
            }

            const emptyArr = [];
            const newMap = new Map(previousWords);
            newMap.set(currentWordIndex, matches);
            setPreviousWords(newMap);
            setCurrentWordIndex(currentWordIndex + 1);
            const nLettersData = createLettersData(letters, matches);
            setLettersData(nLettersData);
            setLetters(emptyArr);
            setCurrentLetterIndex(0);
            setPreviousLetters(previousLettersMap);
            setLettersData([]);

            const parsedInfo = parseInfo(nLettersData, word);
            //console.log(parsedInfo);

            if (socket) {
                sendInfo(socket, parsedInfo);
                console.log("Info sent:", parsedInfo);
            } else {
                console.log("Info couldn't be sent.");
            }

            if (word.toUpperCase() === letters.join("").toUpperCase()) {
                setHasWon(true);
                disableKeyboard();
                openWinModal();
                console.log("WIN");

                if (isMultiplayer) {
                    if (user != null) {
                        const patchUser = async () => {
                            const patchedUser = await modifyUser(user.id, {
                                wins: 1
                            });
                            console.log("Fetched New User:", patchedUser);
                            setUser(patchedUser);
                        };
                        patchUser();
                    }
                } else {
                    if (user != null) {
                        const patchUser = async () => {
                            const patchedUser = await modifyUser(user.id, {
                                wordsGuessed: 1
                            });
                            console.log("Fetched New User:", patchedUser);
                            setUser(patchedUser);
                        };
                        patchUser();
                    }
                }
                return;
            }

            if (currentWordIndex === length && !isMultiplayer) {
                openLoseModal();
                console.log("LOSS");
                if (user != null) {
                    const patchedUser = modifyUser(user.id, {
                        wordsMisses: 1
                    });
                    setUser(patchedUser);
                }
                return;
            }

            return;
        }

        if (!remove) {

            if (!areKeysEnabled) { return; }

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

            if (!areKeysEnabled) { return; }

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
        <button ref={buttonRef} onClick={() => modifyLetters(letter, remove)}>
            <Cell state="miss" letter={letter} />
        </button>
    );
}

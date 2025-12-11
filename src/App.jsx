import './App.css'
import './WinModal.css'
import './SettingsModal.css'
import "react-toastify/dist/ReactToastify.css"
import { useState, useEffect } from 'react'
import { fetchWord, getWordMatches, replaceAccents } from './helper'
import { ToastContainer } from 'react-toastify'
import Header from './components/header/header'
import MainContainer from './components/main-container/main-container'
import Keyboard from './components/keyboard/keyboard'
import Modal from "react-modal";
import Dropdown from './components/dropdown/dropdown'


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
  previousLettersMap.set(i, "");
});

export default function App() {
  const [length, setLength] = useState(5);
  const [lettersData, setLettersData] = useState([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentLetter, setCurrentLetter] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letters, setLetters] = useState([]);
  const [word, setWord] = useState("");
  const [matches, setMatches] = useState([]);
  const [language, setLanguage] = useState("es");
  const [previousWords, setPreviousWords] = useState(indexmap);
  const [previousLetters, setPreviousLetters] = useState(previousLettersMap);
  const [isWinModalOpen, setWinModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("Easy");

  const openWinModal = () => setWinModalOpen(true);
  const closeWinModal = () => setWinModalOpen(false);

  const openSettingsModal = () => setSettingsModalOpen(true);
  const closeSettingsModal = () => setSettingsModalOpen(false);


  useEffect(() => {
    // const fetchWordAsync = async () => {
    //   const w = await fetchWord(language);
    //   setWord(w);
    // };

    // fetchWordAsync();

    setWord("Pipas");
  }, []);

  // TODO
  useEffect(() => {

    console.log("Dificulty changed to:", difficulty);

  }, [difficulty]);

  useEffect(() => {

    const formattedWord = replaceAccents(word.toUpperCase());

    const currentMatches = getWordMatches(formattedWord, letters);

    setMatches(currentMatches);

  }, [letters]);


  return (
    <>
      <Header
        openSettingsModal={openSettingsModal}
      />

      <MainContainer
        letters={letters}
        setLetters={setLetters}
        currentWordIndex={currentWordIndex}
        matches={matches}
        lettersData={lettersData}
        length={length}
        currentLetterIndex={currentLetterIndex}
        setCurrentLetterIndex={setCurrentLetterIndex}
        currentLetter={currentLetter}
        setCurrentLetter={setCurrentLetter}
        previousWords={previousWords}
        setPreviousWords={setPreviousWords}
        previousLetters={previousLetters}
        setPreviousLetters={setPreviousLetters}
      />

      <Keyboard
        letters={letters}
        setLetters={setLetters}
        currentWordIndex={currentWordIndex}
        setCurrentWordIndex={setCurrentWordIndex}
        setLettersData={setLettersData}
        length={length}
        matches={matches}
        currentLetterIndex={currentLetterIndex}
        setCurrentLetterIndex={setCurrentLetterIndex}
        currentLetter={currentLetter}
        setCurrentLetter={setCurrentLetter}
        previousWords={previousWords}
        setPreviousWords={setPreviousWords}
        previousLetters={previousLetters}
        setPreviousLetters={setPreviousLetters}
        isActive={false}
        word={word}
        openWinModal={openWinModal}
      />

      <Modal
        isOpen={isWinModalOpen}
        onRequestClose={closeWinModal}
        closeTimeoutMS={50}
        ariaHideApp={false}
        style={{
          content: {
            width: "600px",
            height: "300px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
            borderColor: "#444444",
            inset: "50% auto auto 50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1b1b1b"
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }
        }}
      >
        <div>
          <button
            className="close"
            onClick={() => closeWinModal()}
          >
            <img src='src\assets\CLOSE_ICON.png'></img>
          </button>

          <div className="modal">
            <h1 className="marginPlus">Wordle</h1>
            <h2>You won!</h2>
            <h3>The word was: {word}</h3>
            <button
              className='replay'
              onClick={() => { window.location.reload(); }}
            >
              Replay
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isSettingsModalOpen}
        onRequestClose={closeSettingsModal}
        closeTimeoutMS={50}
        ariaHideApp={false}
        style={{
          content: {
            width: "600px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
            borderColor: "#444444",
            inset: "50% auto auto 50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1b1b1b"
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }
        }}
      >

        <div className="container">
          <div className="top">
            <h2>Settings</h2>
          </div>
          <div className="mid">
            <div className='settings'>
              <div className='row'>
                <Dropdown
                  options={["Easy", "Medium", "Hard"]}
                  id={"Difficulty"}
                  setValue={setDifficulty}
                  name={"Difficulty"}
                  text={"Select the difficulty"}
                  value={difficulty}
                />
              </div>
              <div className='row'>
              </div>
              <div className='row'>
                <h2>Other...</h2>

              </div>
            </div>
          </div>
        </div>

      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        limit={3}
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
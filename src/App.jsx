import './App.css'
import './WinModal.css'
import './SettingsModal.css'
import "react-toastify/dist/ReactToastify.css"
import { useState, useEffect } from 'react'
import { fetchWord, getWordMatches, replaceAccents, sendInfo } from './helper'
import { ToastContainer } from 'react-toastify'
import Header from './components/header/header'
import MainContainer from './components/main-container/main-container'
import Keyboard from './components/keyboard/keyboard'
import Modal from "react-modal";
import Dropdown from './components/dropdown/dropdown'
import { LengthTextfield } from './components/textfield/textfield'
import OppPanel from './components/multiplayer/opponentPanel'

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
  const [difficulty, setDifficulty] = useState("Medium");
  const [wordCount, setWordCount] = useState(6);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isLoseModalOpen, setLoseModalOpen] = useState(false);
  const [opponentData, setOpponentData] = useState({});
  const [opponentWordIndex, setOpponentWordIndex] = useState(0);
  const [previousOpponentWords, setPreviousOpponentWords] = useState([]);
  const [isMultiplayer, setIsMultiplayer] = useState(true);

  const socket = new WebSocket("ws://localhost:8080/ws");

  const openWinModal = () => setWinModalOpen(true);
  const closeWinModal = () => setWinModalOpen(false);

  const openLoseModal = () => setLoseModalOpen(true);
  const closeLoseModal = () => setLoseModalOpen(false);

  const openSettingsModal = () => setSettingsModalOpen(true);
  const closeSettingsModal = () => setSettingsModalOpen(false);

  socket.onopen = () => {
    console.log("Successfully connected to the server");
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data) {
      console.log("Data received:", data);
      const copy = [...previousOpponentWords];
      copy.add(data);
      setPreviousOpponentWords(copy);
      setOpponentWordIndex(opponentWordIndex => opponentWordIndex + 1);
      setOpponentData(data);
    }
  };

  socket.onclose = () => {
    console.log("Conexion closed");
  };

  useEffect(() => {
    const fetchWordAsync = async () => {
      const w = await fetchWord(language, length);
      setWord(w);
    };

    fetchWordAsync();
  }, []);

  useEffect(() => {
    setIsPopUpOpen(isSettingsModalOpen || isWinModalOpen || isLoseModalOpen);

  }, [isSettingsModalOpen, isWinModalOpen]);

  useEffect(() => {

    switch (language) {
      case "Spanish": setLanguage("es"); break;
      case "English": setLanguage("en"); break;
      case "German": setLanguage("de"); break;
      case "French": setLanguage("fr"); break;
      case "Portuguese": setLanguage("pt-br"); break;
      case "Italian": setLanguage("it"); break;
      default: setLanguage("es"); break;
    }

  }, [language]);

  useEffect(() => {
    switch (difficulty) {
      case "Easy": setWordCount(8); break;
      case "Medium": setWordCount(6); break;
      case "Hard": setWordCount(4); break;
      case "Extreme": setWordCount(2); break;
      case "Hardcore": setWordCount(1); break;
      default: setWordCount(6); break;
    }

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

      <OppPanel 
        data={opponentData}
        length={length}
        wordCount={wordCount}
        opponentWordIndex={opponentWordIndex}
        previousOpponentWords={previousOpponentWords}
        disabled={isMultiplayer}
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
        wordCount={wordCount}
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
        isPopUpOpen={isPopUpOpen}
        openLoseModal={openLoseModal}
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
        isOpen={isLoseModalOpen}
        onRequestClose={closeLoseModal}
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
            onClick={() => closeLoseModal()}
          >
            <img src='src\assets\CLOSE_ICON.png'></img>
          </button>

          <div className="modal">
            <h1 className="marginPlus">Wordle</h1>
            <h2>You lost!</h2>
            <h3>The word was: {word}</h3>
            <button
              className='replayLose'
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
            height: "250px",
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
                  options={["Easy", "Medium", "Hard", "Extreme", "Hardcore"]}
                  id={"Difficulty"}
                  setValue={setDifficulty}
                  name={"Difficulty"}
                  text={"Select the difficulty"}
                  value={difficulty}
                />
              </div>
              <div className='row'>
                <Dropdown
                  options={["Spanish", "English", "German", "Italian", "French", "Portuguese"]}
                  id={"Language"}
                  setValue={setLanguage}
                  name={"Language"}
                  text={"Select the language"}
                  value={language}
                />
              </div>
              <div className='row'>
                <LengthTextfield
                  id={"Length"}
                  setValue={setLength}
                  name={"Length"}
                  text={"Set the word's length"}
                  value={length}
                  placeholder={"Introduce the word's length (3 to 9)"}
                />
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
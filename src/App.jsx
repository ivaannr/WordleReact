import './App.css'
import './WinModal.css'
import './SettingsModal.css'
import "react-toastify/dist/ReactToastify.css"
import { useState, useEffect, useRef, useContext } from 'react'
import { fetchWord, getWordMatches, replaceAccents, compareStates } from './helper'
import { ToastContainer } from 'react-toastify'
import Header from './components/header/header'
import MainContainer from './components/main-container/main-container'
import Keyboard from './components/keyboard/keyboard'
import Modal from "react-modal";
import Dropdown from './components/dropdown/dropdown'
import { LengthTextfield } from './components/textfield/textfield'
import OppPanel from './components/multiplayer/opponentPanel'
import LoginForm from './components/loginForm/loginForm'
import Footer from './components/footer/footer'
import { UserContext } from './context/UserContext'
import { modifyUser } from './helper.fetching'

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
  const [isMultiplayer, setIsMultiplayer] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [seenLettersData, setSeenLettersData] = useState([]);
  const [isDrawModalOpen, setIsDrawModalOpen] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [hasOpponentWon, setHasOpponentWon] = useState(false);
  const [areKeysEnabled, setAreKeysEnabled] = useState(true);
  
  const { user, setUser } = useContext(UserContext);

  const socket = useRef(null);

  const fetchWordAsync = async () => {
    const w = await fetchWord(language, length);
    setWord(w);
  };

  const resetGame = () => {
    setLettersData([]);
    setCurrentLetterIndex(0);
    setCurrentLetter("");
    setCurrentWordIndex(0);
    setLetters([]);
    setMatches([]);
    setPreviousWords(new Map(indexmap));
    setPreviousLetters(new Map(previousLettersMap));
    setSeenLettersData([]);
    closeAllModals();
    setHasOpponentWon(false);
    setHasWon(false);
    setIsMultiplayer(false);
    enableKeyboard();
    fetchWordAsync(); 
  };

  useEffect(() => {
    console.log(user != null ? "logged in" : "not logged in");
  }, []);

  useEffect(() => {
    setSeenLettersData(prev => {
      const cloned = [...prev];

      for (const match of matches) {
        const existing = cloned.find(d => d.letter === match.letter);

        if (existing) {
          if (
            existing.state !== match.state &&
            ["contains", "correct"].includes(match.state)
          ) {

            const foundState = match.state;
            const existingState = existing.state;
            const newState = compareStates(existingState, foundState);

            cloned[cloned.indexOf(existing)] = { ...existing, state: newState };
          }
        } else {
          cloned.push({ letter: match.letter, state: match.state });
        }
      }

      return cloned;
    });

  }, [currentWordIndex]);

  useEffect(() => {
    if (currentWordIndex === 6 && opponentWordIndex === 6 && !hasOpponentWon && !hasWon) {
      openDrawModal();
    }
  }, [currentWordIndex, opponentWordIndex]);

  useEffect(() => {

    const updatePlayerLosses = async () => {
      const newUser = await modifyUser(user.id, { losses: 1 });
      setUser(newUser);
    };

    const oppWord = opponentData?.letters?.map(d => d.letter).join('').toLowerCase();

    if (oppWord === opponentData?.wordToGuess?.toLowerCase() && oppWord) {
      console.log("LOSS");
      updatePlayerLosses();
      setAreKeysEnabled(false);
      setHasOpponentWon(true);
    }

  }, [opponentData]);

  useEffect(() => {
    if (hasOpponentWon) {
      openLoseModal();
    }
  }, [hasOpponentWon]);

  useEffect(() => {

    if (!isMultiplayer) {
      if (socket.current) {
        socket.current.close();
        socket.current = null;
      }

      return;
    }

    if (socket.current) { return; }

    //socket.current = new WebSocket("https://wordleapi-qhp7.onrender.com/ws");
    socket.current = new WebSocket("ws://localhost:8080/ws");

    socket.current.onopen = () => {
      console.log("Successfully connected to the server");
    };

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data) {
        const data = JSON.parse(event.data);
        console.log("Data received:", data);

        setPreviousOpponentWords(prev => [...prev, data]);
        setOpponentData(data);
        setOpponentWordIndex(prev => prev + 1);
      }
    };

    socket.current.onclose = () => {
      console.log("Conection closed");
    };

  }, [isMultiplayer]);
  
  const openWinModal = () => setWinModalOpen(true);
  const closeWinModal = () => setWinModalOpen(false);

  const openLoseModal = () => setLoseModalOpen(true);
  const closeLoseModal = () => setLoseModalOpen(false);

  const openDrawModal = () => setIsDrawModalOpen(true);
  const closeDrawModal = () => setIsDrawModalOpen(false);

  const openSettingsModal = () => setSettingsModalOpen(true);
  const closeSettingsModal = () => setSettingsModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const enableKeyboard = () => setAreKeysEnabled(true);
  const disableKeyboard = () => setAreKeysEnabled(false);

  const enableMultiplayer = () => {
    resetGame();
    setIsMultiplayer(true);
  };
  const disableMultiplayer = () => {
    resetGame();
    setIsMultiplayer(false)
  };

  const closeAllModals = () => {
    closeWinModal();
    closeLoseModal();
    closeSettingsModal();
    closeLoginModal();
    closeDrawModal();
  };

  useEffect(() => {
    fetchWordAsync();
  }, []);

  useEffect(() => {
    setIsPopUpOpen(isSettingsModalOpen || isWinModalOpen || isLoseModalOpen || isLoginModalOpen || isDrawModalOpen);

  }, [isSettingsModalOpen, isWinModalOpen, isLoseModalOpen, isLoginModalOpen, isDrawModalOpen]);

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
        enableMultiplayer={enableMultiplayer}
        disableMultiplayer={disableMultiplayer}
        isMultiplayer={isMultiplayer}
        openLoginModal={openLoginModal}
        resetGame={resetGame}
        user={user}
      />

      <OppPanel
        data={opponentData}
        length={length}
        wordCount={wordCount}
        opponentWordIndex={opponentWordIndex}
        previousOpponentWords={previousOpponentWords}
        enabled={isMultiplayer}
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
        socket={socket.current}
        isMultiplayer={isMultiplayer}
        setHasWon={setHasWon}
        areKeysEnabled={areKeysEnabled}
        disableKeyboard={disableKeyboard}
      />

      <Footer
        lettersData={seenLettersData}
        isEnabled={!isMultiplayer}
      />

      {/* Win modal */}
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
              onClick={() => { resetGame(); }}
            >
              Replay
            </button>
          </div>
        </div>
      </Modal>

      {/* Lose modal */}
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
              onClick={() => { resetGame(); }}
            >
              Replay
            </button>
          </div>
        </div>
      </Modal>

      {/* Draw modal */}
      <Modal
        isOpen={isDrawModalOpen}
        onRequestClose={closeDrawModal}
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
            onClick={() => closeDrawModal()}
          >
            <img src='src\assets\CLOSE_ICON.png'></img>
          </button>

          <div className="modal">
            <h1 className="marginPlus">Wordle</h1>
            <h2>Draw!</h2>
            <h3>The word was: {word}</h3>
            <button
              className='replayDraw'
              onClick={() => { resetGame(); }}
            >
              Replay
            </button>
          </div>
        </div>
      </Modal>

      {/* Settings modal */}
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

      {/* Login modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
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
            <h2>Login/Sign up</h2>
          </div>
          <div className="mid">
            <div className='settings'>
              <LoginForm
              />
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
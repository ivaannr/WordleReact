import './App.css'
import "react-toastify/dist/ReactToastify.css"
import { useState, useEffect } from 'react'
import { fetchWord, getWordMatches, replaceAccents } from './helper'
import { ToastContainer } from 'react-toastify'
import Stack from './Stack'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import MainContainer from './components/main-container/main-container'
import Keyboard from './components/keyboard/keyboard'
import Settings from './settings/settings'

let indexmap = new Map([
    [0, { state: "empty", letter: "" }],
    [1, { state: "empty", letter: "" }],
    [2, { state: "empty", letter: "" }],
    [3, { state: "empty", letter: "" }],
    [4, { state: "empty", letter: "" }],
    [5, { state: "empty", letter: "" }]
])

export default function App() {
  const [length, setLength] = useState(5);
  const [lettersData, setLettersData] = useState([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentLetter, setCurrentLetter] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [letters, setLetters] = useState(new Stack());
  const [word, setWord] = useState("");
  const [matches, setMatches] = useState([]);
  const [language, setLanguage] = useState("es");
  const [previousWords, setPreviousWords] = useState(indexmap);

  useEffect(() => {
    const fetchWordAsync = async () => {
      const w = await fetchWord(language);
      setWord(w);
    };

    fetchWordAsync();
  }, []);

  useEffect(() => {
    console.log("Previous Words:", previousWords);
  }, [previousWords]);

  useEffect(() => {

    const formattedWord = replaceAccents(word.toUpperCase());

    setMatches(getWordMatches(formattedWord, letters));
    console.log("Resultado:", matches)

  }, [letters]);


  return (
    <>
      <Header />

      <Settings
        language={language}
        setLanguage={setLanguage}
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
      />

      <Footer />

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
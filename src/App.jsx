import './App.css'
import { useState, useEffect } from 'react'
import { fetchWord, checkWordMatches, replaceAccents } from './helper'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Stack from './Stack'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import MainContainer from './components/main-container/main-container'
import Keyboard from './components/keyboard/keyboard'

export default function App() {
  const [lettersData, setLettersData] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState(-1)
  const [letters, setLetters] = useState(new Stack())
  const [word, setWord] = useState("");



  useEffect(() => {
    const fetchWordAsync = async () => {
      const w = await fetchWord();
      setWord(w);
    };

    fetchWordAsync();
  }, []);

  let result;

  useEffect(() => {



    console.log("Letters cambió: ", letters.print());
    const formattedWord = replaceAccents(word.toUpperCase());

    result = checkWordMatches(formattedWord, letters);
    console.log("Resultado:", result)

  }, [letters]);




  return (
    <>
      <Header />

      <MainContainer
        letters={letters}
        setLetters={setLetters}
        currentWordIndex={currentWordIndex}
        matches={result}
        lettersData={lettersData}
      />

      <Keyboard
        letters={letters}
        setLetters={setLetters}
        currentWordIndex={currentWordIndex}
        setCurrentWordIndex={setCurrentWordIndex}
        setLettersData={setLettersData}
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
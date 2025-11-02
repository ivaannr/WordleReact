import './App.css'
import { useState, useEffect } from 'react'
import { fetchWord } from './helper'
import Stack from './Stack'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import MainContainer from './components/main-container/main-container'
import Keyboard from './components/keyboard/keyboard'


export default function App() {
  const [letters, setLetters] = useState(new Stack())

  //const word = fetchWord();

  useEffect(() => {
      console.log("Letters cambió: ", letters.print());
  }, [letters]);

  return (
    <>
      <Header />
      <MainContainer letters={letters} setLetters={setLetters} />
      <Keyboard letters={letters} setLetters={setLetters} />
      <Footer />
    </>
  )
}
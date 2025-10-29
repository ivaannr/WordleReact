import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import MainContainer from './components/main-container/main-container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContainer />
      <Footer />
    </>
  )
}

export default App

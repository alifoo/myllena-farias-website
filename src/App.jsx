import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Video from './components/Video'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Presentation />
        <Video>
        </Video>
        <Footer />
      </div>
    </>
  )
}

export default App

import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
// import Menu from './Components/Menu/Menu'
// import About from './Components/About/About'
// import Contact from './Components/Contact/Contact'
import './App.css'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

const App=() => {

  return (
    <>
      <div>
        <Home /> 
        <About />
        <Contact />
        <Footer />
      </div>

    </>
  )
}

export default App

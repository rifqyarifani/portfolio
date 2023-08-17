import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'
import Contact from './components/contact'
import Projects from './components/projects'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

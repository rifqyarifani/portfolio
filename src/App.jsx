import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Home from './Home'
import Footer from './footer'
import Contact from './contact'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

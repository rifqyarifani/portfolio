import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'
import Contact from './components/contact'

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

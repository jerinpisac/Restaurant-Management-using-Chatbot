import { useState } from 'react'
import '../styles/App.css'
import ChatbotLoader from '../components/ChatbotLoader'
import Navbar from '../components/Navbar'

function App() {
  const scrollToSection = (section) => {
    if(section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    else if(section === 'about') {
      const aboutSection = document.getElementById('about')
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
    else if(section === 'menu') {
      const menuSection = document.getElementById('menu')
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
    else if(section === 'contact') {
      const contactSection = document.getElementById('contact')
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <ChatbotLoader />
    </>
  )
}

export default App

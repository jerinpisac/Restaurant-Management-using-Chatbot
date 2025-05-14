import { useState, useRef } from 'react'
import '../styles/App.css'
import ChatbotLoader from '../components/ChatbotLoader'
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'
import AboutPage from '../components/AboutPage'

function App() {
  const MainPageRef = useRef(null);
  const AboutPageRef = useRef(null);
  const MenuRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToSection = (section) => {
    if(section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    else if (section === "about" && AboutPageRef.current) {
      AboutPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    else if (section === "menu" && MenuRef.current) {
      MenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
    else if(section === 'contact' && ContactRef.current) {
      ContactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <ChatbotLoader />
      <MainPage scrollToSection={scrollToSection} ref={MainPageRef} />
      <AboutPage scrollToSection={scrollToSection} ref={AboutPageRef} />
    </>
  )
}

export default App

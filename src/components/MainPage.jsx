import React from 'react'
import '../styles/MainPage.css'

function MainPage({ scrollToSection, ref}) {
  return (
    <div ref={ref} className='container'>
        <div className="right">
            <h2>WELCOME TO RV RESTAURANT</h2>
            <h1>From Our Kitchen to Your Heart</h1>
            <h4>At RV Restaurant, every meal is a celebration of taste and tradition. 
            Come hungry, leave happy — where good food meets great moments.</h4>
            <div className="buttons">
                <button onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("menu")
                  }} 
                  className="first-btn"
                >
                  Explore Menu <i className='fa fa-arrow-right'></i>
                </button>
                <button onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact")
                  }} 
                  className="second-btn"
                >
                  Contact Us <i className='fa fa-arrow-right'></i>
                </button>
            </div>
        </div>
        <div className="left">
          <div className="image-wrapper">
            <div className="flip-container">
              <img className="face front-face" src="/logo.png" alt="Front" />
              <img className="face back-face" src="/logo.png" alt="Back" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainPage
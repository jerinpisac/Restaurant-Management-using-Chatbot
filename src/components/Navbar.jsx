import { useEffect, useState } from 'react';
import '../styles/Navbar.css'

function Navbar({scrollToSection}) {
    const[shadow, setShadow] = useState(false)
    const handleScroll = () => {
        if(window.scrollY > 0) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (
    <div className={`${shadow ? 'navbar-active' : 'navbar'}`} >
        <div onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
                }}
            className="logname"
        >
            <img src="/logo.png" alt="" />
            <div className="name">RV Restaurant</div>
        </div>
        <ul className="navmenu">
            <li onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
                }}>
                    Home
            </li>
            <li onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
                }}>
                    About
            </li>
            <li onClick={(e) => {
                e.preventDefault()
                scrollToSection("menu")
                }}>
                    Menu
            </li>
            <li onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
                }}>
                    Contact
            </li>
        </ul>
    </div>
  )
}

export default Navbar;
import React, { useState } from 'react'
import './navbar.css'
import logo from '../myasset/krish_final.png'
import contact from '../assets/contact.png'
import { Link } from 'react-scroll'
import menu from '../assets/menu.png'


function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />

            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true}  offset={-50} duration={500}className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Client</Link>

            </div>
            <button className='desktopMenuBtn' onClick={ ()=>{
                document.getElementById('contact').scrollIntoView({behaviour: 'smooth'})
            }}>              <img src={contact} alt='' className='desktopMenuBtnImg' />
                Contact Me
            </button>

            <img src={menu} alt='logo' className='mobMenu' onClick={()=> {setShowMenu(!showMenu)}} />

            <div className='mobileMenu' style={{ display: showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)} >About</Link>
                <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Client</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>

            </div>
        </nav>
    )
}

export default Navbar

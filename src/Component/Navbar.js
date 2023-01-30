import React, { useState } from 'react'
import './Navbar.css'
import { FaFacebook, FaHamburger, FaInstagram, FaLinkedin, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [change, setChange]= useState(false)

    const handleChange = ()=> setChange(!change)




  return (
    <div className='navbar'>
        <div className='logo'> Kamal Soni</div>
        <div className= { change ? 'nav-menu active' : "nav-menu"}>
            
                <li className='navitem'> <a href='/' > Home</a></li>
                <li className='navitem'> <a href='/about' > About</a></li>
                <li className='navitem'> <a href='/contact' > Contact</a></li>
                <li className='navitem'> <a href='/more' > More</a></li>

            
        </div>

        <div className='icons'> 
        <FaFacebook className='facebook' size= {40}/>
        <FaInstagram className='instagram'  size= {40}/>
        <FaLinkedin className='linkedin' size= {40}/>

        </div>

        <div className='hamburger' onClick={handleChange}>
       {change ? <FaTimes size={40}/>: <FaHamburger size={40}/>}
        
        </div>
    </div>
  )
}

export default Navbar
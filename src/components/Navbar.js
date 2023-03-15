import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';

import pizza_logo from "../assets/pizzaLogo.png"
import "../styles/Navbar.css"

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)

  const toggleNavbar = () => {
    setShowLinks(!showLinks)
  }

  return (
    <div className='navbar'>
      <div className={`left-side ${showLinks ? 'open' : 'close'}`}>
        <Link to="/">
          <img src={pizza_logo} alt='logo' />
        </Link>
        <div className="hidden-links">
          <Link className='link' to="/"> Home </Link>
          <Link className='link' to="/menu"> Menu </Link>
          <Link className='link' to="/about"> About </Link>
          <Link className='link' to="/contact"> Contact </Link>
        </div>
      </div>
      <div className='right-side'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/menu">Menu</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material'

import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <Instagram />
        <Facebook />
        <Twitter />
        <GitHub />
      </div>
      <p>&copy; 2021 aboba.com</p>
    </div>
  )
}

export default Footer
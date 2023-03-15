import React from 'react'
import { Link } from 'react-router-dom'

import bgImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='home-container'>
        <h1>Pedro's Pizzeria</h1>
        <p>Pizzeria</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
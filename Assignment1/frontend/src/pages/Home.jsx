import React from 'react'
import Nav from './Nav';

const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
        <Nav />
        <div>
      <img src="https://abes.ac.in/assets/2.jpg" width="500px" alt="" />
        <h1>ABES Engineering College</h1>
    </div>
    </div>
  )
}

export default Home

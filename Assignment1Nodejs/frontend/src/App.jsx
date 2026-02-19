import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Work from './pages/Work';
import Nav from './pages/Nav';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

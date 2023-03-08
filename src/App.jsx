import React from 'react'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Support } from './components/Support'
import { Platform } from './components/Platform';
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'
import './index.css'
function App() {
  return (
    <div className='app overflow-x-hidden'>
      <NavBar/>
      <Hero/>
      <About/>
      <Support/>
      <Platform/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'
import './App.css'

import Marquee from './components/Marquee'

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Marquee>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Marquee>
      </div>
    </div>
  )
}

export default App
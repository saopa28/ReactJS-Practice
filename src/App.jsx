import { useState } from 'react'
import logo from './profile.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
        
      </div>
      <h1>Anthony Saopa Phiri</h1>

      <div>
      <a href="https://www.linkedin.com/in/anthony-saopa-phiri-253072230" target="_blank">
      <button 
        type="button">
          LinkedIn 
      </button>
      </a>
      </div>
      

      <div className="card">
      <h2>
        About
        </h2>
        <p>
        Hello, World ;/<br></br>
        I am a Computer Science student in my 2nd year who is passionate about cloud computing and back-end development.
        </p>
        <h2>
        Interests
        </h2>
        <p>
        Some technologies I enjoy working with are ReactJS and PHP.<br></br>
        Food Expert. Travel Geek. Coffee Fanatic. Pop Culture Ninja. 
        </p>
      </div>
      <p className="read-the-docs">
        @All rights reserved by Anthony Saopa Phiri 2023
      </p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comments from './comment.jsx'

function App() {
  return (
    <>
      <div className="comments-container">
        <Comments />
      </div>
    </>
  )
}

export default App;

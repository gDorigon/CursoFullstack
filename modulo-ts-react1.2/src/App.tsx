import { useState } from 'react'
import './App.css'

function App() {

  const [userName, setUserName] = useState("matheusfraga")

  return (
    <div>
      {userName.length >= 5 && <h1>Username muito grande </h1>}
    </div>
  )
}

export default App

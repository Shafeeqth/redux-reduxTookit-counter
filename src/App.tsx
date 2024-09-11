
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Redux tutorial</h2>
      <Counter/>
      
    </div>
  )
}

export default App

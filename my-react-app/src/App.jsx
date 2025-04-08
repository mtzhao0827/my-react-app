import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('Hello')

  return (
    <div>
      <h1>{text}</h1>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
      <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default App

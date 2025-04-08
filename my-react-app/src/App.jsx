import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // 修改文档标题
  useEffect(() => {
    document.title = `当前计数：${count}`
  },[count])
  
  // 设置定时器
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器运行中')
    }, 30)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h1>当前计数：{count}</h1>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Increase from './components/Increase';
import Display from './components/CountDisplay';
import Decrease from './components/decrease';
import Reset from './components/reset';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Display myData={count}/>
    <div className='Button'>
    <Increase count={count} setCount={setCount} />
    <Decrease count={count} setCount={setCount}/>
    <Reset count={count} setCount={setCount}/>
    </div>
    </>
  )
}

export default App

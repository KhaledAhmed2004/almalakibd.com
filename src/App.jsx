import { useState } from 'react'
import './App.css'
// import banner from '../src/assets/image/almalakibanner.JPG'
import banner from './assets/image/withoutbg.png'
import Countdown from './components/countdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-black'>
      {/* <h1 className='md:text-5xl uppercase font-bold text-center text-slate-200 pb-3 pt-10 px-5'>      Welcome to A L M A L A K I B D </h1> */}
      <img className='mx-auto' src={banner} alt="" />

     </div>
     <div>
      <Countdown></Countdown>

      
     </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      
       

      
    </>
  )
}

export default App

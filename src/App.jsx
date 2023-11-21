import './App.css'
import banner from './assets/image/al-malaki.png'
import Countdown from './components/Countdown'

function App() {
  
  const targetDate = new Date("2023-12-31T23:59:59");


  return (
    <>
     <div>
      <img className='mx-auto md:h-[500px] w-full md:w-[650px]' src={banner} alt="" />

     </div>
     <div className='md:w-1/2 md:mx-auto '>
      <Countdown targetDate={targetDate}></Countdown>


    

      
     </div>
      

      
       

      
    </>
  )
}

export default App

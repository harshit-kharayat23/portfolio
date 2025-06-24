import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import './index.css'
import Navbar from './components/sections/Navbar'

const App = () => {
  const [isloaded, setIsloaded]= useState(false)
  return (
    <>
     {!isloaded&&<LoadingScreen onComplete={()=>setIsloaded(true)}/>}{" "}
     { isloaded&& <div className=' min-h-screen transition-opacity duration-700 '>
    <Navbar/>
      </div>}
    </>
  ) 
}

export default App
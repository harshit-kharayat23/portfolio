import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import './index.css'
import Navbar from './components/sections/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'

const App = () => {
  const [isloaded, setIsloaded]= useState(false)
  return (
    <div className=' h-full w-full pb-10 bg-gradient-to-tr from-[#020202] via-45% via-[#0e0c0e] to-[#09090b] overflow-x-hidden'>
     {!isloaded&&<LoadingScreen onComplete={()=>setIsloaded(true)}/>}{" "}
     { isloaded&& <div className=' min-h-screen transition-opacity duration-700 '>
    <Navbar/>
    <section id='home'>
    <Home/>
    </section>
  <section id='about'>
    <About/>
    </section>
    <section id='projects'>
    <Projects/>
    </section>
      </div>}
    </div>
  ) 
}

export default App
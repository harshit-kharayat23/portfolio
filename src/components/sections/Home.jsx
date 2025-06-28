import React from 'react'
import { motion } from 'motion/react'


const Home = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1,transition:{
    duration:2,
    ease:"linear"
    }}}
    className=' h-screen w-full flex flex-col gap-12 justify-center items-center '>
        <div className=' md:w-1/3  w-full text-center md:px-0 px-4  flex flex-col items-center gap-10'>
        <h2 className='   md:text-6xl text-5xl font-semibold bg-gradient-to-t from-[#b6b4b6] to-[#232323] bg-clip-text text-transparent '>Hie, I'm Priyanshu</h2>
        <motion.p 
         initial={{color:'#241e21'}}
           animate={{
           color: [
      '#e4e4e7', // Zinc-100 (bright silver)
      '#a1a1aa', // Zinc-400 (metallic gray)
      '#71717a', // Zinc-500 (gunmetal)
      '#52525b', // Zinc-600 (dark steel)
      '#6e6f7c', // Cyan-200 (ice highlight)
      '#4b5b69', // Blue-200 (frost)
    ],
          }}
        
         transition={{duration:3,repeat:Infinity, repeatType: "reverse",ease: "linear"}}
                        // variants={textVariants}

        className='   text-sm text-center'>A passionate <span className=' text-base text-[#6ebfc8]'>Full Stack Developer</span> dedicated to crafting fast, responsive, and visually stunning websites...</motion.p>
    </div>
    <div className=' md:w-1/3 w-full px-10 flex gap-12 text-white justify-center'>
      <motion.span
      initial={{scale:1}}
      whileHover={{scale:0.9,transition:{ease:"linear"}}}

      className=' w-32  cursor-pointer text-[#d1d0d0]   md:text-base text-sm  text-center  py-2 rounded-lg  bg-gradient-to-t border border-[#323232]  font-medium from-[#3b3b3b] to-[#080808] shadow-md shadow-[#202020] will-change-transform'>View Projects</motion.span>
      <motion.span
      initial={{scale:1}}
      whileHover={{scale:0.9,transition:{ease:"linear"}}}

      className=' w-32  cursor-pointer   md:text-base text-sm border   text-center bg-gradient-to-t from-[#ffffff]  to-[#c3c0c0]  text-[#111] shadow-md shadow-[#3d3d3d]  font-medium  py-2 rounded-lg border-[#bcb7b7]   will-change-transform'>Contact Me</motion.span>
    </div>
    </motion.div>
  )
}

export default Home
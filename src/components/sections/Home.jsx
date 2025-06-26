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
        <h2 className='   md:text-6xl text-5xl font-semibold bg-gradient-to-t from-[#3f3d43] to-[#7a1bc8] bg-clip-text text-transparent '>Hie, I'm Priyanshu</h2>
        <motion.p 
         initial={{color:'#73aada'}}
           animate={{
            color: [
              '#73aada', // Gray
              '#882d64', // Soft purple (Tailwind's purple-300)
              '#48b67a', // Cyan
              '#384008', // Mint green
              '#752b58', // Pink
            ],
          }}
        
         transition={{duration:5,repeat:Infinity, repeatType: "reverse",ease: "linear"}}
                        // variants={textVariants}

        className=' text-white md:text-lg text-sm text-center'>A passionate web developer dedicated to crafting fast, responsive, and visually stunning websites.
         With expertise in JavaScript, React, Node.js, and modern CSS frameworks like Tailwind, I build seamless and interactive web experiences.</motion.p>
    </div>
    <div className=' md:w-1/3 w-full px-10 flex gap-12 text-white justify-center'>
      <motion.span
      initial={{scale:1}}
      whileHover={{scale:0.9,transition:{ease:"linear"}}}

      className=' w-32  cursor-pointer text-neutral-200  md:text-lg text-sm  text-center  py-2 rounded-lg  bg-gradient-to-r border-neutral-700 font-semibold from-blue-500 to-blue-950 shadow-md shadow-blue-400  will-change-transform'>View Projects</motion.span>
      <motion.span
      initial={{scale:1}}
      whileHover={{scale:0.9,transition:{ease:"linear"}}}

      className=' w-32  cursor-pointer   md:text-lg text-sm border text-center bg-gradient-to-r from-gray-600 to-neutral-950 text-blue-400 shadow-sm shadow-blue-300 font-semibold  py-2 rounded-lg border-blue-800  will-change-transform'>Contact Me</motion.span>
    </div>
    </motion.div>
  )
}

export default Home
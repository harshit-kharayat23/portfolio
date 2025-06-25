
import { motion } from "motion/react"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.3,
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }
  
  return (
    <div className='min-h-screen w-full flex md:flex-row flex-col justify-center items-center gap-15 md:px-50 px-4 overflow-x-hidden py-20'>
      <motion.div 
        className='md:w-1/2 w-full flex flex-col gap-8 md:items-start items-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className='text-5xl md:text-8xl font-bold bg-gradient-to-t from-gray-700 to-fuchsia-600 bg-clip-text text-transparent'
        >
          About Me
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className='text-base bg-gradient-to-t from-[#3b1a7e] to-[rgb(188,161,234)] bg-clip-text text-transparent md:w-3/5 md:text-left text-center'
        >
          Whether it's a sleek front-end interface or a scalable full-stack application, I focus on writing clean, efficient code while keeping user experience at the forefront.
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ x: 600, opacity: 0 }}
        whileInView={{ 
          x: 0, 
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
        className=' h-full md:w-1/2 w-full  flex justify-center items-center will-change-transform'
      >
        <img
          src='https://avatars.githubusercontent.com/u/156987012?v=4'
          className='md:h-[400px] md:w-[360px] h-[300px] w-[270px]  rounded-xl object-cover shadow-2xl'
          alt="Profile"
        />
      </motion.div>
    </div>
  )
}

export default About
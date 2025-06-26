
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
    hidden: { opacity: 0, x: -300 },
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
    <div className=' h-full w-full overflow-hidden  flex flex-col  gap-40  md:px-50 px-4'>
      <div className="  w-full flex md:flex-row flex-col justify-center  gap-15 ">
         <motion.div 
        className='md:w-1/2 w-full flex flex-col gap-8 md:items-start items-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className='text-2xl uppercase text-neutral-600 md:text-8xl font-bold bg-gradient-to-t from-gray-700 to-fuchsia-600 bg-clip-text text-transparent'
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
        initial={{ x: 200, opacity: 0 }} // Reduced initial x for mobile
        whileInView={{ 
          x: 0, 
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" } // Faster animation
        }}
        viewport={{ once: true, margin: "-100px" }} // Adjusted margin
        className='w-full md:w-1/2 flex justify-end p-4'
      >
        <img
          src='src/assets/myPhoto.jpg'
          className='max-h-[60vh] w-auto max-w-full rounded-xl object-contain shadow-2xl'
          alt="Profile"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/360x400';
            e.target.alt = 'Placeholder image';
          }}
        />
      </motion.div>
      </div>
     
       <div className="   h-full   w-full flex flex-col items-center gap-12 ">
        <h3 className="  text-4xl font-bold text-transparent bg-gradient-to-t from-[#aac6f1] to-[#3908c1] bg-clip-text ">What you can expect</h3>
        <div className=" border border-[#1f195e] rounded-lg w-2/3  md:justify-between flex md:flex-row flex-col">
          <div className=" w-full text-center py-2">
            <h2 className=" text-xl font-bold  text-neutral-400">Frontend</h2>
            
          </div>
           <div className=" w-full text-center py-2">
            <h2 className=" text-xl font-bold  text-neutral-400">Backend</h2>
          </div>
        </div>
       </div>
    </div>
  )
}

export default About



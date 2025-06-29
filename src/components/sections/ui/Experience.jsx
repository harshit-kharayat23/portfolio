 
import { motion } from "motion/react"

const Experience = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.5,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smoother easing
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const logoVariants = {
    hover: {
      scale: 0.95,
      rotate: [0, -2, 2, 0],
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        rotate: {
          duration: 0.6,
          ease: "easeInOut"
        }
      }
    }
  }

  return (
    <div className="w-full h-full px-3 sm:px-6 md:px-8 lg:px-10 space-y-6 sm:space-y-8 lg:space-y-10">
      <motion.h3
        initial={{ opacity: 0, y: -40, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            type: "spring",
            stiffness: 120,
            damping: 20
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="will-change-transform text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-transparent bg-radial text-shadow-2xl from-[#b1afb1] to-[#291d29] bg-clip-text font-semibold"
      >
        Work Experience
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="h-full p-3 sm:p-4 md:p-6 items-center justify-center flex-col w-full border border-neutral-900 shadow-2xl/22 shadow-[#6b6a6a] flex gap-8 md:gap-10 lg:gap-12 rounded-xl sm:rounded-2xl py-6 sm:py-8"
      >
        <motion.div 
          variants={itemVariants}
          className="items-center gap-4 flex flex-col sm:flex-row text-center sm:text-left"
        >     
          <motion.a 
            href="https://octoreal.com/"
            target="_blank"
            variants={logoVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            className="px-2 py-1 rounded-xl sm:rounded-2xl bg-gradient-to-t from-[#edeaeac2] to-[#34333300] shadow-xl/45 cursor-pointer shadow-[#6d6d6d] will-change-transform"
          >
            <img
              className="rounded-xl sm:rounded-2xl h-8 w-16 sm:h-10 sm:w-20"
              src="https://octoreal.com/_next/static/media/logoMain.8ea8d26f.svg"
              alt="Octoreal Logo"
            />
          </motion.a>

          <motion.p 
            initial={{ color: '#241e21' }}
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
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className='text-sm sm:text-lg md:text-xl font-light uppercase text-center px-2'
          >
            Contributed to two projects at Octoreal, focusing on:
          </motion.p>
        </motion.div>
 
        <div className="flex flex-col h-full w-full items-center p-2 sm:p-3 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              transition: { 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1] 
              }
            }}
            className="h-full w-full sm:w-5/6 md:w-4/5 lg:w-3/4 flex-col flex border border-[#292828] rounded-lg sm:rounded-xl shadow-xl/10 shadow-[#373636] items-center gap-1 p-4 sm:p-6 md:p-8 will-change-transform"
          >
            <h3 className="text-base sm:text-lg font-medium uppercase text-neutral-300 my-1 sm:my-2 text-center">
              Octoreal Website (Frontend Development)
            </h3>
            <p className="text-neutral-400 font-light text-sm sm:text-base text-center px-2">
              Built and optimized the frontend using Next.js, TypeScript (TSX), and modern UI libraries.
            </p>
            <p className="text-neutral-400 font-light text-sm sm:text-base text-center px-2">
              Collaborated with designers to implement responsive layouts and interactive components.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              transition: { 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1] 
              }
            }}
            className="h-full w-full sm:w-5/6 md:w-4/5 lg:w-3/4 flex-col flex border border-[#292828] rounded-lg sm:rounded-xl shadow-xl/10 shadow-[#373636] items-center gap-1 p-4 sm:p-6 md:p-8 will-change-transform"
          >
            <h3 className="text-base sm:text-lg font-medium uppercase text-neutral-300 my-1 sm:my-2 text-center">
              Jewelry E-Commerce Dashboard (Client Project)
            </h3>
            <p className="text-neutral-400 font-light text-sm sm:text-base text-center px-2">
              Developed login/signup flows and admin dashboard using React, TypeScript, and Redux Toolkit.
            </p>
            <p className="text-neutral-400 font-light text-sm sm:text-base text-center px-2">
              Integrated RESTful APIs with Axios for seamless data fetching and state management.
            </p>
            <p className="text-neutral-400 font-light text-sm sm:text-base text-center px-2">
              Implemented secure authentication and role-based access control
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.03,
              transition: { 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1] 
              }
            }}
            className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 h-full flex flex-col items-center border border-[#1e1c1c] rounded-lg sm:rounded-xl shadow-xl/20 shadow-[#373636] gap-1 p-4 sm:p-6 md:p-8 will-change-transform"
          >
            <h3 className="text-base sm:text-lg font-medium uppercase text-transparent bg-gradient-to-t from-[#ddc1ef] to-[#5a8189] bg-clip-text my-1 sm:my-2 text-center">
              Technologies Used
            </h3>
            <p className="text-transparent bg-gradient-to-t from-[#5b5c5c] to-[#bdeded] bg-clip-text font-medium text-sm sm:text-base text-center px-2">
              Frontend: Next.js, React, TypeScript (TSX), Tailwind CSS 
            </p>
            <p className="text-transparent bg-gradient-to-t from-[#5b5c5c] to-[#bdeded] bg-clip-text font-medium text-sm sm:text-base text-center px-2">
              State Management: Redux Toolkit
            </p> 
            <p className="text-transparent bg-gradient-to-t from-[#5b5c5c] to-[#bdeded] bg-clip-text font-medium text-sm sm:text-base text-center px-2">
              API Integration: Axios, RESTful APIs
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>    
  )
}

export default Experience
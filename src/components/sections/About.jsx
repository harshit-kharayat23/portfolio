 

import { motion } from "motion/react"
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs 
} from "react-icons/fa"
import { 
  SiTailwindcss, 
  SiRedux, 
  SiFramer, 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiNextdotjs 
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
// import Experience from "./ui/Experience.jsx"

const About = () => {
  // Skills data with React Icons
  const skillsData = [
    {
      id: 1,
      title: "HTML",
      icon: <FaHtml5 className="text-orange-500" />
    },
    {
      id: 2,
      title: "CSS",
      icon: <FaCss3Alt className="text-blue-500" />
    },
    {
      id: 3,
      title: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" />
    },
    {
      id: 4,
      title: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400" />
    },
    {
      id: 5,
      title: "React",
      icon: <FaReact className="text-cyan-300" />
    },
    {
      id: 6,
      title: "Redux",
      icon: <SiRedux className="text-purple-500" />
    },
    {
      id: 7,
      title: "Framer Motion",
      icon: <SiFramer className="text-pink-400" />
    },
    {
      id: 8,
      title: "TypeScript",
      icon: <SiTypescript className="text-blue-400" />
    },
    {
      id: 9,
      title: "Node.js",
      icon: <FaNodeJs className="text-green-500" />
    },
    {
      id: 10,
      title: "Express",
      icon: <SiExpress className="text-gray-300" />
    },
    {
      id: 11,
      title: "MongoDB",
      icon: <SiMongodb className="text-green-400" />
    },
    {
      id: 12,
      title: "REST API",
      icon: <TbApi className="text-blue-300" />
    },
    {
      id: 13,
      title: "Next.js",
      icon: <SiNextdotjs className="text-white" />
    }
  ]

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
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const skillCardVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }
  
  return (
    <div className='h-full w-full flex flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-32 xl:gap-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 md:py-10'>
      <div className="w-full flex md:flex-row flex-col justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-15">
        <motion.div 
          className='md:w-1/2 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 md:items-start items-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase font-bold bg-gradient-to-t from-[#3c3b3e] to-[#e1dbe5] bg-clip-text text-transparent text-center md:text-left'
          >
            About Me
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className='text-sm sm:text-base md:text-lg bg-gradient-to-t from-[#656265] to-[rgb(175,175,180)] bg-clip-text text-transparent w-full md:w-4/5 lg:w-3/5 md:text-left text-center leading-relaxed'
          >
            Whether it's a sleek front-end interface or a scalable full-stack application, I focus on writing clean, efficient code while keeping user experience at the forefront.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ 
            x: 0, 
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className='w-full md:w-1/2 flex justify-center md:justify-end p-2 sm:p-4'
        >
          <img
            src='https://avatars.githubusercontent.com/u/156515522?s=400&u=3ed669e41df6ea89bb42a7c392d877dac30cbe3a&v=4'
            className='max-h-[40vh] sm:max-h-[50vh] md:max-h-[55vh] lg:max-h-[60vh] w-auto max-w-full rounded-xl object-contain shadow-2xl/40 shadow-[#f5f3f3]'
            alt="Profile"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/360x400';
              e.target.alt = 'Placeholder image';
            }}
          />
        </motion.div>
      </div>
     {/* <Experience/>   */}

      <div className="h-full w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        <motion.h3 
          initial={{ opacity: 0, y: -20 ,scale:0.6}}
          whileInView={{ opacity: 1, y: 0 , scale:1}}
          viewport={{ once: true ,amount:0.3}}
          transition={{ duration: .7}}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-t from-[#272627] to-[#d6d4d6] bg-clip-text font-semibold will-change-transform text-center"
        >
          My Skills
        </motion.h3>
        
        <div className="w-full flex gap-3 sm:gap-4 justify-center flex-wrap px-2 sm:px-4 md:px-6 lg:px-0">
          {skillsData.map((item, index) => (
            <motion.div 
              key={item.id}
              variants={skillCardVariants}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-0.75rem)] xl:w-[200px] h-[50px] sm:h-[55px] md:h-[60px] bg-gradient-to-t from-[#201f23] to-transparent border rounded-lg border-[#1d1b24] justify-start flex items-center gap-2 sm:gap-3 p-3 sm:p-4 hover:border-neutral-400 transition-colors duration-300 cursor-pointer shadow-sm shadow-[#131316]"
            >
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-t text-transparent bg-clip-text from-[#3d3a49] to-[#f1ecec] flex-grow">{item.title}</span>
              <div className="text-lg sm:text-xl bg-neutral-900 p-1 rounded-sm flex flex-shrink-0">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
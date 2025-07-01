 

import { motion } from 'framer-motion'
import Card from './ui/Card'

const Projects = () => {
  const projectData1 = {
    title: "🎬 Moviezz",
    description:"AI-Powered Movie Discovery Platform",
    tech: ["React.js","TMDB API","AI Search","Tailwind CSS","Firebase","Redux","Framer Motion"],
    gitLink:"https://github.com/Priyanshu090803/Moviezzzzz......",
    liveLink:"https://moviezzzzz-25y6.vercel.app/",
    bgUrl:"https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720820.jpg",
    from:"#1d9679",
    to:"#111"
  };

  const projectData2 = {
    title: "🍔Swiggy clone",
    description:"Swiggy clone with react",
    tech: ["React.js","Swiggy API","Redux","Tailwind CSS","Lazy loading" ],
    gitLink:"https://github.com/Priyanshu090803/Swiggy-Food-order-clone",
    liveLink:"",
    bgUrl:"https://cdn.dribbble.com/userupload/28826307/file/original-cabd01f7f71182b6a9385f6256a64ccf.jpg?format=webp&resize=400x300&vertical=center",
    from:"#ff8d06",
    to:"#ffd6d1"
  };

  const projectData3 = {
    title: "Obyse Agency",
    description:"Obyse Agency with gsap, shery.js,locomotive",
    tech: ["Html","Css","JavaScript","Shery.js","GSAP","Locomotive"],
    gitLink:"https://github.com/Priyanshu090803/obys.agency-Clone",
    liveLink:"",
    bgUrl:"https://imgs.search.brave.com/yZdlHY4bJd3oOujjB8gd8uAZZrIjKnre0EhMAzBBFfE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3NzZGVzaWduYXdh/cmRzLmNvbS9kb3R5/LzIwMTkvMTEwMC9v/YnlzLmpwZw",
    from:"#0b090f",
    to:"#eeecf2"
  };

  const projectData4 = {
    title: "Hooman App",
    description:"A application where human connect with human",
    tech: ["React","Tailwind","Redux","Axios" , "Express","MongoDb" ,"Websockets" ],
    gitLink:"https://github.com/Priyanshu090803/Hooman",
    liveLink:"https://hooman-six.vercel.app/",
    bgUrl:"https://www.eusemfronteiras.com.br/wp-content/uploads/2019/04/77348807_m.jpg",
    from:"#102541",
    to:"#fcef8a"
  };

  const projectData5 = {
    title: "Youtube Clone",
    description:"YouTube clone using React   ",
    tech: ["React","Tailwind","Redux","YouTube api" ,"Api polling","Debouncing"],
    gitLink:"https://github.com/Priyanshu090803/YouTube-Clone",
    liveLink:"https://you-tube-clone-phi-seven.vercel.app/",
    bgUrl:"https://letsplays.b-cdn.net/wp-content/uploads/2014/10/youtube-iphone-app-logo.png",
    from:"#a00004",
    to:"#fb7190"
  };

  const projectsArray = [projectData1, projectData4, projectData5, projectData2, projectData3];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.3    // Initial delay before first child starts
      }
    }
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Title animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='h-full w-full flex flex-col gap-10 md:gap-16 lg:gap-20 xl:gap-30 py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20'>
      <div className='h-full w-full flex justify-center'>
        <motion.h3 
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-t from-[#131010] to-[#dddddd] text-center'
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Projects
        </motion.h3>
      </div>
      
      <motion.div 
        className='w-full h-full gap-6 sm:gap-8 md:gap-10 flex flex-wrap justify-center items-start'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsArray.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className='w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(30%-1.5rem)] max-w-[400px] min-w-[280px]'
          >
            <Card project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
import { motion } from "motion/react"

const Card = ({}) => {
  return (
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1,
          transition:{
            duration:3
          }}}
          viewport={{
            once:true
          }}
        className='card w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] min-w-[300px] min-h-[300px] rounded-3xl delay-300 duration-500 ease-in-out transition-all hover:scale-[0.98] p-5 relative overflow-hidden group bg-zinc-900 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/70'>
                    {/* Background with parallax effect on hover */}
            <div className='w-full absolute inset-0 z-0 opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 h-full rounded-3xl bg-[url(https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720820.jpg)] bg-cover bg-center bg-no-repeat'></div>
  
            {/* Glow overlay */}
            <div className='absolute inset-0 z-1 bg-gradient-to-b from-transparent via-black/70 to-black/90 rounded-3xl'></div>
  
            {/* Content container */}
            <div className='h-full w-full rounded-2xl flex flex-col items-center p-6 gap-6 justify-end relative z-10'>
            {/* Title with shine effect */}
            <div className='flex flex-col w-full text-white font-bold uppercase text-xl text-center'>
            <h3  className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-300 to-gray-800 font-extrabold text-2xl drop-shadow-lg'>
        🎬 Moviezz
            </h3>
            <p className='text-sm font-normal normal-case mt-2 text-zinc-300'>
            AI-Powered Movie Discovery Platform
            </p>
            </div>
    
             {/* Feature pills */}
            <div className='flex flex-wrap justify-center gap-2 w-full'>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>React.js</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>TMDB API</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>AI Search</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Tailwind CSS</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Firebase</span>

            </div>
    
              {/* CTA Buttons */}
            <div className='flex gap-3 w-full'>
      <a 
        href='https://netflix-ai-6b2ce.firebaseapp.com' 
        target='_blank'
        rel='noopener noreferrer'
        className='flex-1 will-change-transform text-center px-4 py-2 bg-gradient-to-r from-[#1e1d1d]   to-[#080808] shadow-2xl/60 shadow-[#414141] rounded-full text-white font-medium text-sm  transition-all duration-300 shadow-sm hover:[shadow-zinc-500] hover:scale-[1.01]  font-monoserrat'
      >
        Live Demo
      </a>
      <a 
        href='https://github.com/Priyanshu090803/Moviezzzzz......' 
        target='_blank'
        rel='noopener noreferrer'
        className= 'flex-1 will-change-transform text-center px-4 py-2 bg-gradient-to-r from-[#ffffff] to-[#3f3f3f0e] shadow-2xl/40 shadow-[#ffffff] rounded-full text-black font-semibold text-sm  transition-all duration-300 shadow-sm hover:shadow-zinc-500 hover:scale-[1.01]  font-monoserrat '
      >
        GitHub
      </a>
             </div>
             </div>
  
            { /* Subtle corner accent */}
            <div className='absolute top-0 right-0 w-16 h-16 border-t-2 border-r border-[#3d3c3c] -500/50 rounded-tr-3xl'></div>
        </motion.div>

  )
}

export default Card
 
const Navbar = () => {
  const handleScrollToSection=(sectionId)=>{
    const element = document.getElementById(sectionId)
    if(element){
      element.scrollIntoView({
        behavior:'smooth',
        block:"start"
      })
    }
  }
  return (
    <nav className='fixed top-0 left-0 right-0 md:h-16 h-12 md:py-2 py-1 px-4 w-full flex justify-center z-50 bg-transparent'>
        <div className='bg-black/20 backdrop-blur-sm border border-gray-800/40 shadow-2xl shadow-black/15 h-full md:w-2/5 w-full rounded-full flex items-center px-4 pr-6 justify-between hover:border-gray-600/60 transition-all duration-300 ease-in-out backdrop-saturate-150'>
        
        <div className='md:h-10 md:w-10 h-9 w-9 rounded-full overflow-hidden relative cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300'>
          <img 
          onClick={()=>handleScrollToSection('home')}
          src={"https://avatars.githubusercontent.com/u/156515522?v=4"}
             style={{
              position: 'absolute',
              top: '60%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '200%',
              minHeight: '130%'
            }}
          className='h-full w-full object-contain group-hover:scale-110 transition-transform duration-300'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
        </div>

        <div className='flex md:gap-8 gap-4'>
            <button 
              onClick={()=>handleScrollToSection('about')}  
              className='text-gray-400 hover:text-white cursor-pointer  text-sm font-medium relative group transition-all duration-300 ease-in-out'>
              About
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-in-out'></span>
            </button>
            
            <button 
              onClick={()=>handleScrollToSection('projects')}  
              className='text-gray-400 hover:text-white cursor-pointer  text-sm font-medium relative group transition-all duration-300 ease-in-out'>
              Projects
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-in-out'></span>
            </button>
            
            <button 
              onClick={()=>handleScrollToSection('contact')}  
              className='text-gray-400 hover:text-white cursor-pointer   text-sm font-medium relative group transition-all duration-300 ease-in-out'>
              Contact
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-in-out'></span>
            </button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
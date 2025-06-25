import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' h-16 py-2   w-full  flex justify-center '>
        <div className=' h-full w-2/5 border border-neutral-300 rounded-full flex items-center px-3 pr-5 justify-between
         backdrop:blur-2xl
        '>
        <div className=' h-10 w-9  rounded-full overflow-hidden relative'>
          <img src={"src/assets/profile.jpg"}
             style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%'
            }}
          className=' h-full w-full object-fill '
          />
        </div>
        <div className=' flex gap-8'>
            {/* <span href={"/about"} className=' text-neutral-500 text-base font-semibold underline'>About</span> */}
            <span href={"/about"} className=' text-neutral-500 text-base font-semibold underline'>Skills</span>
            <span href={"/about"} className=' text-neutral-500 text-base font-semibold underline'>Projects</span>
            <span href={"/about"} className=' text-neutral-500 text-base font-semibold underline'>Contact</span>

        </div>
        </div>
    </div>
  )
}

export default Navbar
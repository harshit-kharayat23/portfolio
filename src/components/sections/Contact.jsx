import { motion } from "motion/react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
const Contact = () => {
  return (
    <div className=' h-full w-full  flex flex-col p-10 gap-20  '>
     <motion.h3 
          className='md:text-7xl text-center text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-t from-[#4d5776] to-[#d1cfcf]'
          // variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Contact Me
        </motion.h3>
        <div className=" w-full h-full flex justify-center">
        <div className=" h-full w-1/2 flex-col flex items-center gap-8 ">
          <p className=" text-neutral-500 text-base font-medium uppercase">This far down? You clearly like what you see!<br></br>Let's chat about how I can help your team!</p>
          <div className=" w-1/2 p-2 flex gap-4 ">
          <a
          href="https://github.com/Priyanshu090803/"
          target="blank"
          >
            <FaGithub className=" text-neutral-200 hover:text-neutral-400 active:text-neutral-400  text-2xl hover:scale-95 active:scale-95 scale-100 duration-300 delay-150 ease-out will-change-transform "/>
          </a>
           <a
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEKiAKeL9mqGwAAAZe8mUngvHUZpUOlQmUaS_vndDBENF1VIGoKIz4ESZ3NecRnpTM-FXdib3Y7h9v80mG9PKCo2d14zGSJsHfP-lrjctYjvZV0K0Vib9CktFx74Bt4L_CauWk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fpriyanshu-chandra-tamta-641123320%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app"
          target="blank"
          >
            <FaLinkedin className=" text-neutral-200 hover:text-neutral-400 active:text-neutral-400  text-2xl hover:scale-95 active:scale-95 scale-100 duration-300 delay-150 ease-out will-change-transform "/>
          </a>
           <a
          href="https://x.com/priyanshu9_8_03?s=11"
          target="blank"
          >
            <FaSquareXTwitter className=" text-neutral-200 hover:text-neutral-400 active:text-neutral-400  text-2xl hover:scale-95 active:scale-95 scale-100 duration-300 delay-150 ease-out will-change-transform "/>
          </a>
            <a
          href="https://www.instagram.com/priyanshu_9_8_03?igsh=ejBiZmR0Y2w4Y2ow&utm_source=qr"
          target="blank"
          >
            <FaInstagram className=" text-neutral-200 hover:text-neutral-400 active:text-neutral-400  text-2xl hover:scale-95 active:scale-95 scale-100 duration-300 delay-150 ease-out will-change-transform "/>
          </a>
          </div>
        </div>
        <div className=" w-1/2 h-full">
        <motion.form
        initial={{z:0,y:0}}
        whileHover={{
          z:20,
          y:20,
          transition:{
            duration:1
          }
        }}
         whileTap={{
          z:20,
          y:20,
          transition:{
            duration:1
          }
        }}
        className=" bg-gradient-to-t from-[#050505] to-[#121212] w-3/4 p-10 h-full border rounded-lg shadow-xl/35 shadow-[#525151] border-[#1f1e1e] flex flex-col items-center gap-8 
        "
        >
        <input 
        placeholder="Your email......."
        type="email" id="email" className=" w-[75%] outline-neutral-800 focus:outline-neutral-600 duration-300 delay-150 ease-out  outline rounded-lg px-4 py-2 text-neutral-300 font-light "></input>
         
        <textarea
        rows={4}
        placeholder="Your message ....."
        type="text"    className=" w-[75%] outline-neutral-800 focus:outline-neutral-600 duration-300 delay-150 ease-out  outline rounded-lg px-4 py-2 font-light text-neutral-400"></textarea>
         
        <button className=" bg-gradient-to-t from-[#b6b6b6] to-[#ffffff] text-xl font-semibold px-4 py-1 rounded-lg
         shadow-xl/30 shadow-[#8c8c8c] 
         will-change-transform hover:scale-95 scale-100 duration-200 delay-150 ease-out active:scale-95 cursor-pointer
        ">Send</button>
        </motion.form>
        </div>
        </div>
    </div>
  )
}

export default Contact
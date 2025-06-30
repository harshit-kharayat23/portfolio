 

import { motion } from "framer-motion"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import emailjs from "emailjs-com"
import { useState } from "react"

const Contact = () => {
  const [formData,setFormData] =useState({
    name:"",
    email:"",
    message:""
  })
 
  const handelSubmit =(e)=>{
      e.preventDefault()
      
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY).then((res)=>{
        alert("Message sent!")
        setFormData({name:"",email:"",message:""})

      }).catch(()=>{
        alert("Something went wrong! Please try again")
      })
  }
  return (
    <div className='h-full w-full flex flex-col p-4 sm:p-6 md:p-10 gap-16 lg:gap-20'>
     <motion.h3 
          className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-center font-bold uppercase text-transparent bg-clip-text bg-gradient-to-t from-[#4d5776] to-[#d1cfcf]'
          initial="hidden"
          animate="visible"
        >
          Contact Me
        </motion.h3>
        
        <div className="w-full h-full flex flex-col lg:flex-row gap-6 md:gap-8 justify-center">
        {/* Left Section - Social Links */}
        <div className="h-full w-full lg:w-1/2 flex flex-col items-center gap-6 md:gap-8">
          <p className="text-neutral-500 text-sm xs:text-base text-center lg:text-left max-w-md">
            This far down? You clearly like what you see!<br/>
            Let's chat about how I can help your team!
          </p>
          
          <div className="w-full xs:w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 p-4 md:p-5 flex justify-center gap-3 sm:gap-4">
            {/* Social Icons - Responsive sizing */}
            <a href="https://github.com/Priyanshu090803/" target="blank">
              <FaGithub className="text-neutral-200 hover:text-neutral-400 active:text-neutral-400 text-lg sm:text-xl md:text-2xl hover:scale-95 active:scale-95 scale-100 duration-300 delay-150 ease-out will-change-transform"/>
            </a>
            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEKiAKeL9mqGwAAAZe8mUngvHUZpUOlQmUaS_vndDBENF1VIGoKIz4ESZ3NecRnpTM-FXdib3Y7h9v80mG9PKCo2d14zGSJsHfP-lrjctYjvZV0K0Vib9CktFx74Bt4L_CauWk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fpriyanshu-chandra-tamta-641123320%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app" target="blank">
              <FaLinkedin className="text-neutral-200 hover:text-neutral-400 active:text-neutral-400 text-lg sm:text-xl md:text-2xl hover:scale-95 active:scale-95 scale-100 duration-300 delay-150 ease-out will-change-transform"/>
            </a>
            <a href="https://x.com/priyanshu9_8_03?s=11" target="blank">
              <FaSquareXTwitter className="text-neutral-200 hover:text-neutral-400 active:text-neutral-400 text-lg sm:text-xl md:text-2xl hover:scale-95 active:scale-95 scale-100 duration-300 delay-150 ease-out will-change-transform"/>
            </a>
            <a href="https://www.instagram.com/priyanshu_9_8_03?igsh=ejBiZmR0Y2w4Y2ow&utm_source=qr" target="blank">
              <FaInstagram className="text-neutral-200 hover:text-neutral-400 active:text-neutral-400 text-lg sm:text-xl md:text-2xl hover:scale-95 active:scale-95 scale-100 duration-300 delay-150 ease-out will-change-transform"/>
            </a>
          </div>
        </div>
        
        {/* Right Section - Contact Form */}
        <div className="w-full lg:w-1/2 h-full">
          <motion.form
            onSubmit={handelSubmit}
            initial={{z:0,y:0}}
            whileHover={{
              z:20,
              y:20,
              transition:{ duration:1 }
            }}
            whileTap={{
              z:20,
              y:20,
              transition:{ duration:1 }
            }}
            className="bg-gradient-to-t from-[#050505] to-[#121212] w-full lg:w-3/4 py-8 sm:py-10 px-4 sm:px-6 md:px-10 h-full border rounded-lg shadow-xl/35 shadow-[#525151] border-[#1f1e1e] flex flex-col items-center gap-6 sm:gap-8"
          >
            <input 
              name="from_name"
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
              placeholder="Name..."
              type="text"
              className="w-full sm:w-[85%] md:w-[75%] outline-neutral-800 focus:outline-neutral-600 duration-300 delay-150 ease-out outline rounded-lg text-sm sm:text-base px-4 py-2 text-neutral-300 font-light"
            />
             
            <input 
              name="from_email"
              value={formData.email}
              onChange={(e)=>setFormData({...formData,email:e.target.value})}
              placeholder="Email..."
              type="email"
              className="w-full sm:w-[85%] md:w-[75%] outline-neutral-800 focus:outline-neutral-600 duration-300 delay-150 ease-out outline rounded-lg text-sm sm:text-base px-4 py-2 text-neutral-300 font-light"
            />
             
            <textarea
              name="message"
              value={formData.message}
              onChange={(e)=>setFormData({...formData,message:e.target.value})}
              rows={4}
              placeholder="Your message..."
              className="w-full sm:w-[85%] md:w-[75%] outline-neutral-800 focus:outline-neutral-600 duration-300 delay-150 ease-out outline rounded-lg text-sm sm:text-base px-4 py-2 font-light text-neutral-300"
            />
             
            <button className="bg-gradient-to-t from-[#b6b6b6] to-[#ffffff] text-base sm:text-lg md:text-xl font-semibold px-4 py-1 rounded-lg shadow-xl/30 shadow-[#8c8c8c] will-change-transform hover:scale-95 scale-100 duration-200 delay-150 ease-out active:scale-95 cursor-pointer">
              Send
            </button>
          </motion.form>
        </div>
        </div>
    </div>
  )
}

export default Contact
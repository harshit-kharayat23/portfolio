import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

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
        {/* Left Section */}
        <div className="h-full w-full lg:w-1/2 flex flex-col items-center gap-6 md:gap-8">
          <p className="text-neutral-500 text-sm xs:text-base text-center lg:text-left max-w-md">
            This far down? You clearly like what you see!<br />
            Let's chat about how I can help your team!
          </p>

          <div className="w-full xs:w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 p-4 md:p-5 flex justify-center gap-3 sm:gap-4">
            <a href="https://github.com/harshit-kharayat23" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-neutral-200 hover:text-neutral-400 text-xl md:text-2xl hover:scale-95 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/heyitzharshit/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-neutral-200 hover:text-neutral-400 text-xl md:text-2xl hover:scale-95 duration-300" />
            </a>
            <a href="https://x.com/23Harshitkk" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter className="text-neutral-200 hover:text-neutral-400 text-xl md:text-2xl hover:scale-95 duration-300" />
            </a>
            <a href="https://leetcode.com/u/heyitzharshit/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png"
                alt="LeetCode"
                className="w-6 md:w-7 hover:scale-95 duration-300"
              />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full lg:w-1/2 h-full">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ z: 0, y: 0 }}
            whileHover={{ z: 20, y: 20, transition: { duration: 1 } }}
            whileTap={{ z: 20, y: 20, transition: { duration: 1 } }}
            className="bg-gradient-to-t from-[#050505] to-[#121212] w-full lg:w-3/4 py-8 px-4 sm:px-6 md:px-10 h-full border rounded-lg shadow-xl/35 shadow-[#525151] border-[#1f1e1e] flex flex-col items-center gap-6 sm:gap-8"
          >
            <input
              name="from_name"
              value={formData.from_name}
              onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
              placeholder="Name..."
              type="text"
              required
              className="w-full sm:w-[85%] md:w-[75%] outline-neutral-800 focus:outline-neutral-600 rounded-lg text-sm px-4 py-2 text-neutral-300"
            />

            <input
              name="from_email"
              value={formData.from_email}
              onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
              placeholder="Email..."
              type="email"
              required
              className="w-full sm:w-[85%] md:w-[75%] outline-neutral-800 focus:outline-neutral-600 rounded-lg text-sm px-4 py-2 text-neutral-300"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              placeholder="Your message..."
              required
              className="w-full sm:w-[85%] md:w-[75%] outline-neutral-800 focus:outline-neutral-600 rounded-lg text-sm px-4 py-2 text-neutral-300"
            />

            <button
              type="submit"
              className="bg-gradient-to-t from-[#b6b6b6] to-[#ffffff] text-base font-semibold px-4 py-1 rounded-lg shadow-lg hover:scale-95 transition"
            >
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

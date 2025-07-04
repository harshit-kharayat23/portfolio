import { motion } from "framer-motion";
import { techIconMap } from "../../../utils/techIcons";

const Card = ({ project }) => {
  const { title, description, tech, gitLink, bgUrl, from, to } = project;
  const liveLink = project?.liveLink;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 3 },
      }}
      viewport={{ once: true }}
      className='card w-full aspect-square rounded-3xl delay-300 duration-500 ease-in-out transition-all hover:scale-[0.98] p-4 sm:p-5 md:p-2 relative overflow-hidden group bg-zinc-900 shadow-xl/40 shadow-[#494747] hover:shadow-xl hover:shadow-black/70'
    >
      {/* Background */}
      <div
        style={{ backgroundImage: `url('${bgUrl}')` }}
        className='w-full absolute inset-0 z-0 opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 h-full rounded-3xl bg-cover bg-center bg-no-repeat'
      ></div>

      {/* Glow overlay */}
      <div className='absolute inset-0 z-1 bg-gradient-to-b from-transparent via-black/70 to-black/90 rounded-3xl'></div>

      {/* Content */}
      <div className='h-full w-full rounded-2xl flex flex-col items-center p-3 sm:p-4 md:p-6 gap-3 sm:gap-4 md:gap-6 justify-end relative z-10'>
        {/* Title */}
        <div className='flex flex-col w-full text-white font-bold uppercase text-center'>
          <h3
            style={{
              backgroundImage: `linear-gradient(to top, ${from}, ${to})`,
            }}
            className='text-transparent bg-clip-text font-extrabold text-lg sm:text-xl md:text-2xl drop-shadow-lg'
          >
            {title}
          </h3>
          <p className='text-xs sm:text-sm md:text-sm font-normal normal-case mt-1 sm:mt-2 text-zinc-300 leading-tight'>
            {description}
          </p>
        </div>

        {/* Tech stack with icon */}
        <div className='flex flex-wrap justify-center gap-1 sm:gap-2 w-full'>
          {tech.map((techName, index) => {
            const Icon = techIconMap[techName];
            return (
              <span
                key={index}
                className='px-2 sm:px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50 flex items-center gap-1'
              >
                {Icon && <Icon className='text-white text-sm' />}
                {techName}
              </span>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className='flex gap-3 sm:gap-4 w-full justify-center my-2 sm:my-4'>
          {liveLink && (
            <motion.a
              href={liveLink}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ scale: 1 }}
              whileHover={{ scale: 0.9, transition: { ease: "linear" } }}
              className='cursor-pointer text-[#d1d0d0] text-sm sm:text-base text-center py-2 px-1 sm:px-3 w-20 sm:w-24 md:w-30 rounded-lg bg-gradient-to-t border border-[#323232] font-medium from-[#3b3b3b] to-[#080808] shadow-lg/30 shadow-[#737373] will-change-transform'
            >
              Live Demo
            </motion.a>
          )}
          <motion.a
            href={gitLink}
            target='_blank'
            rel='noopener noreferrer'
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9, transition: { ease: "linear" } }}
            className='cursor-pointer text-sm sm:text-base border text-center bg-gradient-to-t from-[#ffffff] to-[#c3c0c0] text-[#111] shadow-lg/30 shadow-[#c8c6c6] font-medium py-2 px-1 sm:px-3 w-20 sm:w-24 md:w-30 rounded-lg border-[#bcb7b7] will-change-transform'
          >
            GitHub
          </motion.a>
        </div>
      </div>

      {/* Corner Accent */}
      <div className='absolute top-0 right-0 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-t-2 border-r border-[#3d3c3c] rounded-tr-3xl'></div>
    </motion.div>
  );
};

export default Card;

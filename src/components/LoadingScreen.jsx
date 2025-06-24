// import React, { useEffect, useState } from 'react'

// const LoadingScreen = ({onComplete}) => {
//     const [text,setText] = useState("")
//     const fulltext = "<Portfolio is loading/>"
//     useEffect(()=>{
//         let index = 0
//         const interval = setInterval(() => {
//             setText(fulltext.substring(0,index))
//             index++;
//             if(index>fulltext.length){
//             clearInterval(interval)
//         setTimeout(() => {
//             onComplete()
//         }, 1000);
//         }
        
//         }, 100);
        
//         return ()=> clearInterval(interval)
//     },[onComplete])
//   return (
//     <div className=' fixed inset-0 z-50 text-[#15161a] flex flex-col justify-center items-center'>
//         <div className=' mb-4 text-4xl font-mono font-bold'>
//         {text}<span className=' animate-blink ml-1'>|</span>
//         </div>
//         <div className=' w-[450px] h-[2.67px] bg-[#e8d5d5] rounded   overflow-hidden shadow-md shadow-[#759ccc]' >
//         <div className=' w-[40%] h-4 bg-[#8790e4] shadow-[0_0_15px_#3b82f6] animate-loading-bar'>
//         {" "}
//         </div>
//         </div>
//     </div>
//   )
// }

// export default LoadingScreen


// import React, { useEffect, useState } from 'react'
// import { motion } from 'motion/react'
// const LoadingScreen = ({onComplete}) => {
//     const [text,setText] = useState("")
//     const fulltext = "Welcome to portfolio"
//     // useEffect(()=>{
//     //     let index = 0
//     //     const interval = setInterval(() => {
//     //         setText(fulltext.substring(0,index))
//     //         index++;
//     //         if(index>fulltext.length){
//     //         clearInterval(interval)
//     //     setTimeout(() => {
//     //         onComplete()
//     //     }, 1000);
//     //     }
        
//     //     }, 100);
        
//     //     return ()=> clearInterval(interval)
//     // },[onComplete])
//     setTimeout(() => {
//         onComplete()
//     }, 3000);
//   return (
//     <div className='  inset-0 z-50 text-[#15161a]  relative h-full w-full justify-center bg-amber-900  '>
//        <motion.h1
//     //    initial={{opacity:0, translateX:"-400px"}}
//     //    animate={{opacity:1,translateX:"0px"}}
//     //    transition={{
//     //     duration:2,
//     //     ease:"backInOut"}
//     //    }
//        className=' text-[100px] font-bold uppercase   '
//        style={{overflow:'hidden',whiteSpace:"nowrap"}}
//         initial={{width:0}}
//         animate={{width:"100%"}}
//         transition={{duration:3,ease:"easeInOut"}}
//        >
//          Portfolio is loading...
//        </motion.h1>
//     </div>
//   )
// }

// export default LoadingScreen



// import React, { useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const LoadingScreen = ({ onComplete }) => {
//   const words = ["Welcome", "to", "my", "Portfolio"];
//   const colors = ["#111827", "#374151", "#6B7280", "#9CA3AF"]; // Elegant gray scale

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onComplete();
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
//       <div className="flex flex-col items-center justify-center space-y-2">
//         <AnimatePresence>
//           {words.map((word, index) => (
//             <motion.div
//               key={word}
//               initial={{ 
//                 x: -100, 
//                 opacity: 0,
//                 filter: "blur(4px)"
//               }}
//               animate={{
//                 x: 0,
//                 opacity: 1,
//                 filter: "blur(0px)",
//                 transition: {
//                   delay: index * 0.2,
//                   duration: 0.8,
//                   ease: [0.22, 1, 0.36, 1] // Premium easing curve
//                 }
//               }}
//               exit={{ 
//                 opacity: 0,
//                 y: -20,
//                 transition: { duration: 0.3 }
//               }}
//               className="overflow-hidden"
//             >
//               <motion.h1
//                 className={`text-4xl md:text-5xl font-light tracking-tight`}
//                 style={{ color: colors[index] }}
//               >
//                 {word}
//               </motion.h1>
//             </motion.div>
//           ))}
//         </AnimatePresence>

//         {/* Subtle progress indicator */}
//         <motion.div 
//           className="mt-8 h-px bg-gray-200 w-64 overflow-hidden"
//           initial={{ width: 0 }}
//           animate={{ width: "100%" }}
//           transition={{ duration: 3, ease: "linear" }}
//         >
//           <motion.div 
//             className="h-full bg-gray-800"
//             initial={{ width: 0 }}
//             animate={{ width: "100%" }}
//             transition={{ duration: 3, ease: "linear" }}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        // Smooth progress animation
        const progressInterval = setInterval(() => {
            setProgress(prev => {      // prev is current state
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => onComplete?.(), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 60);

        return () => clearInterval(progressInterval);
    }, [onComplete]);

    // Text animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const textVariants = {
        hidden: { 
            x: -50, 
            opacity: 0,
            filter: "blur(4px)"
        },
        visible: { 
            x: 0, 
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const subtleVariants = {
        hidden: { 
            x: -30, 
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  ">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 opacity-60" />
            
            {/* Main content container */}
            <motion.div
                className="relative z-10 text-left max-w-2xl px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Main heading with staggered words */}
                <div className="mb-6 overflow-hidden">
                    <motion.h1
                        variants={textVariants}
                        className="text-6xl md:text-7xl font-light text-slate-900 leading-tight"
                    >
                        Portfolio
                    </motion.h1>
                </div>

                <div className="mb-8 overflow-hidden">
                    <motion.h2
                        variants={textVariants}
                        className="text-2xl md:text-3xl font-extralight text-slate-700 tracking-wide"
                    >
                        is loading
                    </motion.h2>
                </div>

                {/* Subtitle */}
                <div className="mb-12 overflow-hidden">
                    <motion.p
                        variants={subtleVariants}
                        className="text-slate-500 text-lg font-light tracking-wider"
                    >
                        Preparing your experience
                    </motion.p>
                </div>

                {/* Progress section */}
                <div className="space-y-4">
                    <div className="overflow-hidden">
                        <motion.div
                            variants={subtleVariants}
                            className="flex justify-between items-center text-sm text-slate-400 font-light tracking-widest uppercase"
                        >
                            <span>Loading</span>
                            <span>{progress}%</span>
                        </motion.div>
                    </div>

                    {/* Progress bar */}
                    <div className="overflow-hidden">
                        <motion.div
                            variants={subtleVariants}
                            className="h-px bg-slate-200 w-full relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-slate-400 to-slate-600"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Decorative element */}
                <div className="mt-16 overflow-hidden">
                    <motion.div
                        variants={subtleVariants}
                        className="flex space-x-1"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-1 h-1 bg-slate-300 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.8, 0.3]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Subtle floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-slate-300 rounded-full opacity-20"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`
                    }}
                    animate={{
                        y: [-10, 10, -10],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                    }}
                />
            ))}
        </div>
    );
};

export default LoadingScreen;
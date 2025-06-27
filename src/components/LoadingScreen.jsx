import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(prev => {
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

    // Enhanced animation variants
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
            x: -30, 
            opacity: 0,
            filter: "blur(3px)"
        },
        visible: { 
            x: 0, 
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // Premium easing
            }
        }
    };

    const subtleVariants = {
        hidden: { 
            x: -20, 
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-tr from-[#060606] via-45% via-[#0c0b0c] to-[#0e0e11] ">
            {/* Subtle gradient overlay with animation */}
            <motion.div 
                className="absolute inset-0 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1 }}
            />
            
            {/* Main content container */}
            <motion.div
                className="relative z-10 text-left max-w-2xl px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Portfolio title with elegant entrance */}
                <div className="mb-6 overflow-hidden">
                    <motion.h1
                        initial={{color:'#040714'}}
                        animate={{color:["#401c39","#924291","#8495b4","#aaa508","#100c13"]}}
                        transition={{duration:4,repeat:Infinity,ease:"linear"}}
                        variants={textVariants}
                        className="text-5xl md:text-8xl font-bold text-neutral-900 leading-tight tracking-tight"
                    >
                        Portfolio
                    </motion.h1>
                </div>

                {/* Subtitle with delayed entrance */}
                <div className="mb-8 overflow-hidden">
                    <motion.h2
                        variants={textVariants}
                        className="text-xl md:text-2xl font-extralight text-neutral-600 tracking-wider"
                    >
                        is loading
                    </motion.h2>
                </div>

                {/* Progress section */}
                <div className="space-y-4">
                    <div className="overflow-hidden">
                        <motion.div
                            variants={subtleVariants}
                            className="flex justify-between items-center text-xs text-neutral-400 font-light tracking-widest uppercase"
                        >
                            <span>Loading</span>
                            <span>{progress}%</span>
                        </motion.div>
                    </div>

                    {/* Enhanced progress bar */}
                    <div className="overflow-hidden">
                        <motion.div
                            variants={subtleVariants}
                            className="h-0.5 bg-slate-200 w-full relative overflow-hidden rounded-full"
                        >
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Elegant decorative dots */}
                <div className="mt-16 overflow-hidden">
                    <motion.div
                        variants={subtleVariants}
                        className="flex space-x-2 justify-center"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-1 h-1 bg-slate-300 rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 0.8, 0.4]
                                }}
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Subtle floating elements */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-slate-300 rounded-full"
                    style={{
                        left: `${15 + i * 20}%`,
                        top: `${25 + (i % 2) * 50}%`,
                        opacity: 0.2
                    }}
                    animate={{
                        y: [-5, 5, -5],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                    }}
                />
            ))}
        </div>
    );
};

export default LoadingScreen;
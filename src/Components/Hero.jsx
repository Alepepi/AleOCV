import React, { useState } from 'react'
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/AlexOProfile1.jpg"
import Resume from "../assets/SWE_Resume_Template_AOO_US V1.2.pdf"
import Resume2 from "../assets/SWE_Platilla_CV_AOO_MX V1.1.pdf"
import { delay, motion, AnimatePresence } from "framer-motion";
import { IoReturnDownBack } from "react-icons/io5";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible:{
        x:0,
        opacity: 1, 
        transition: {duration: 0.5, delay: delay},
    }
})

const menuVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.3 } }
}

const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * i }
    }),
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
}

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  };

  const handleOptionClick = () => {
    setShowMenu(false);
  };

  const handleReturnClick = () => {
  setTimeout(() => setShowMenu(false), 200); // 200ms matches exit animation
};

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-extralight tracking-tight lg:mt-16 lg:text-8xl">
                        Alejandro Ollivier
                    </motion.h1>
                    <motion.div
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2 my-2"
                    >
                    <span className="bg-gradient-to-r from-blue-300 via-slate-500 to-red-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Web Developer
                    </span>
                    <span className="text-4xl text-white font-light select-none">/</span>
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl tracking-tight text-transparent font-light ml-1">
                        IOS Developer
                    </span>
                    </motion.div>
                    <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                    <div className="relative my-4 flex flex-col items-center">
                        {!showMenu && (
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleDownloadClick}
                                className="bg-gray-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-full flex items-center transition-all duration-200"
                            >
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                Download
                            </motion.button>
                        )}
                        <AnimatePresence>
                        {showMenu && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={menuVariants}
                                className="flex gap-2 mt-2"
                            >
                                <motion.a
                                    custom={0}
                                    variants={buttonVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={Resume2}
                                    download
                                    onClick={handleOptionClick}
                                    className="bg-gray-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center transition-all duration-200"
                                >
                                    🇲🇽 MX
                                </motion.a>
                                <motion.a
                                    custom={1}
                                    variants={buttonVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={Resume}
                                    download
                                    onClick={handleOptionClick}
                                    className="bg-gray-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center transition-all duration-200"
                                >
                                    🇺🇸 US
                                </motion.a>
                                <motion.a
                                    custom={2}
                                    variants={buttonVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={Resume}
                                    download
                                    onClick={handleOptionClick}
                                    className="bg-gray-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center transition-all duration-200"
                                >
                                    🇪🇺 EU
                                </motion.a>
                                <motion.button
                                    custom={3}
                                    variants={buttonVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    whileHover={{ scale: 1.08, backgroundColor: "#d1d5db" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleReturnClick}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center transition-all duration-200 ml-2"
                                >
                                    <IoReturnDownBack className="mr-2" />
                                </motion.button>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{ x: 100, opacity: 0}}
                    animate={{ x:0, opacity:1}}
                    transition={{duration:1, delay:1.2}} 
                    className=" rounded-2xl" height={450} width={450}
                    src={profilePic} alt="Profile picture" /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
import React from 'react' //rafce "to import the template and begin"
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/AlexOProfile1.jpg"
import Resume from "../assets/Resume_AOO_V1.4.pdf"
import {delay, motion} from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible:{
        x:0,
        opacity: 1, 
        transition: {duration: 0.5, delay: delay},
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Alejandro Ollivier
                    </motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible" 
                    className="bg-gradient-to-r from-blue-300 via-slate-500 to-red-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Web Developer
                    </motion.span>
                    <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                    <a href={Resume} download>
                        <motion.button 
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible" 
                        class="bg-gray-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Download</span>
                        </motion.button>
                    </a>
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
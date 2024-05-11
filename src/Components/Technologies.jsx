import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNotionFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
    transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial= {{opacity: 0, y:-100}}
        transition={{duration: 1.5}}
        className=" my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial= {{opacity: 0, x:-100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className=" text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className=" text-7xl text-[#c96038]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className=" text-7xl text-[#07a1d5]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className=" text-7xl text-[#f6dd1e]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className=" text-7xl text-[#5d4284]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.6)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className=" text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.8)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiNotionFill className=" text-7xl text-white"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className=" text-7xl text-[#fed748]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4.2)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <SiCsharp className=" text-7xl text-[#6b9dd4]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4.4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FiFigma className=" text-7xl"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
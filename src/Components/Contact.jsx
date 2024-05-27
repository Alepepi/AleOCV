import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import { CONTACT } from "../constants"
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="contact">
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial= {{opacity: 0, y:-100}}
        transition={{duration: 1.5}}
        className="my-6 text-center text-4xl">Get in Touch</motion.h2>
        
        <div className="ml-3 flex items-center justify-center md:hidden lg:hidden offset">
          <a href="https://www.linkedin.com/in/alejandroollivierochoa/" className="text-gray-300 hover:text-white">
            <FaLinkedin className="mr-4" />
          </a>
          <a href="https://github.com/Alepepi" className="text-gray-300 hover:text-white">
            <FaGithub className="mr-4" />
          </a>
          <a href="https://wa.me/+5287133147569" className="text-gray-300 hover:text-white">
            <FaWhatsapp className="mr-4" />
          </a>
          <a href="https://leetcode.com/u/Alepepi/" className="text-gray-300 hover:text-white">
            <SiLeetcode className="" />
          </a>
        </div>

        <div className=" text-center tracking-tighter pb-4">
          <a href="tel:+528713314759">
            <motion.p
            whileInView={{opacity: 1, x:0}}
            initial= {{opacity: 0, x: 100}}
            transition={{duration: 1.5}}
            className=" my-4">{CONTACT.phoneNo}</motion.p></a>
            <a href="mailto:aleollivierochoa@gmail.com" className=" border-b my-8">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
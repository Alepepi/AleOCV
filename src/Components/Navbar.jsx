import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import logo from "../assets/Logo-sm-foto.png";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6" >
    <div className="flex flex-shrink-0 items-center">
      <img src={logo} width={80} height={80} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      
    <a href="https://www.linkedin.com/in/alejandroollivierochoa/">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/+5287133147569">
          <FaWhatsapp />
        </a>
      <a href="https://github.com/Alepepi">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/Alepepi/">
          <SiLeetcode />
        </a>
    </div>
  </nav>
}

export default Navbar
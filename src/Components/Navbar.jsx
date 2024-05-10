import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6" >
    <div className="flex flex-shrink-0 items-center">
      <img src="" alt="" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedin />
      <FaGithub />
      <FaWhatsapp />
      <FaInstagram />
      <SiLeetcode />
    </div>
  </nav>
}

export default Navbar
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

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
        <h2 className=" my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className=" text-7xl text-cyan-400"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className=" text-7xl text-[#c96038]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className=" text-7xl text-[#07a1d5]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className=" text-7xl text-[#f6dd1e]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className=" text-7xl text-[#5d4284]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className=" text-7xl text-cyan-400"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiNotionFill className=" text-7xl text-white"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className=" text-7xl text-[#fed748]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <SiCsharp className=" text-7xl text-[#6b9dd4]"/>
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FiFigma className=" text-7xl"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
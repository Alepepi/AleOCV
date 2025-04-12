import React from 'react'
import { EDUCATION } from "../constants"
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div className=" border-b border-neutral-900 pb-4" id="education">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className=" my-20 text-center text-4xl">Education</motion.h1>
            <div>
                {EDUCATION.map((education, index) => (
                    <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className=" w-full lg:w-1/4">
                            <p className=" mb-2 text-sm text-neutral-400">{education.year}</p>
                            {/*<img
                                src={education.image}
                                width={150}
                                height={150}
                                alt={education.title}
                                className=" mb-6 mr-6 mt-6 rounded"
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    objectFit: 'contain',
                                    objectPosition: 'center',
                                    marginBottom: '20px',
                                }}
                            />*/}
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className=" w-full max-w-xl lg:h-3/4">
                            <h6 className=" mb-2 font-semibold">
                                <span className=" text-sm text-purple-100">
                                    {education.title} - {education.institution}
                                </span>
                            </h6>
                            <p className=" mb-4 text-neutral-400">{education.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education

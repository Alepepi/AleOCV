import React, { useState } from 'react'
import { PROJECTS } from "../constants"
import { motion, AnimatePresence } from "framer-motion";
import { GoPlus } from "react-icons/go";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <div className="border-b border-neutral-900 pb-4" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="mb-8 flex flex-wrap lg:justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, type: "tween" }}
              layout
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4"
              >
                <a href={project.link}>
                  <img
                    src={project.image}
                    width={350}
                    height={200}
                    alt={project.title}
                    className="mb-6 mr-6 rounded"
                    style={{
                      width: '350px',
                      height: '200px',
                      objectFit: 'cover',
                      objectPosition: '50% 25%',
                      marginBottom: '20px',
                    }}
                  />
                </a>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-xl lg:w-3/4 lg:ml-6"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {(PROJECTS.length > 4) && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="px-4 py-1 rounded bg-white/10 text-white font-medium transition hover:bg-white/20 backdrop-blur-sm shadow-sm flex items-center justify-center"
            style={{ fontSize: '1.5rem', border: 'none', background: 'rgba(255,255,255,0.08)' }}
            aria-label={showAll ? "Show Less" : "Show More"}
          >
            <GoPlus className={`transition-transform ${showAll ? 'rotate-45' : ''}`} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects
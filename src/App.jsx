import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
import About from "./Components/About"
import Technologies from "./Components/Technologies"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Certificates from "./Components/Certificates"
import Education from "./Components/Education"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Helmet>
        <title>Alejandro Ollivier Ochoa | Portfolio</title>
        <meta name="description" content="Portfolio of Alejandro Ollivier Ochoa. Full Stack Developer, showcasing skills, projects, experience, and contact information." />
        <meta name="keywords" content="Alejandro Ollivier Ochoa, Portfolio, Developer, Full Stack, React, JavaScript, Projects, Experience" />
        <meta name="author" content="Alejandro Ollivier Ochoa" />
        <meta property="og:title" content="Alejandro Ollivier Ochoa | Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Alejandro Ollivier Ochoa, Full Stack Developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alejandro Ollivier Ochoa | Portfolio" />
        <meta name="twitter:description" content="Portfolio of Alejandro Ollivier Ochoa, Full Stack Developer." />
        <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
        <html lang="en" />
      </Helmet>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      </div>
    </div>
  )
}

export default App
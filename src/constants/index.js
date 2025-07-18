import project1 from "../assets/IOSProject.png";
import project2 from "../assets/IOT_Project.png";
import project3 from "../assets/PortafolioSite.png";
import project4 from "../assets/T1Project.png";
import project5 from "../assets/AIE-Website.png";
import project6 from "../assets/Julius' Damnation.jpeg";
import project7 from "../assets/Stomadida.jpeg";

import Cert1 from "../assets/EFCert.jpg";
import Cert2 from "../assets/GCCF.jpg";
import Cert3 from "../assets/iOSLabCert.jpg";
import Cert4 from "../assets/ImagePorcCertMT.jpg";

import Edu1 from "../assets/prepatec-logo.png";
import Edu2 from "../assets/udlap-logo.png";
import Edu3 from "../assets/unita-logo.png";

export const HERO_CONTENT = `I am a passionate Web developer with a dream of becoming an excellent developer with a focus in UX. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Tailwind, as well as some design technologies like Figma. My goal is to give great solutions for the clients in Front-end development asi well as making an excellent experience for the users, and finally keep my growth in the development industry.`;

//ABOUT ME
export const ABOUT_TEXT = `I am a dedicated and versatile Web developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React, Next.js, Figma, Python, C#, and more. My journey in web development began with a deep curiosity for how these pages come to live, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

//HOBBIES

//SKILLS

export const EXPERIENCES = [
  {
    year: " June 2024 - October 2024",
    role: "Junior Web Developer",
    company: "AIE Consultoria",
    description: `As a Junior Web Developer at AIE Consultoria, I was responsible for developing and maintaining the company website. I utilized Next.js and Tailwind CSS to create a responsive and user-friendly interface. Additionally, I integrated Google Tag Manager for enhanced tracking and analytics capabilities.`,
    technologies: ["Next.js", "Tailwind", "Odoo", "Google Tag Manager", "Builder.io"]
  },
  {
    year: " May 2023 - July 2023",
    role: "Game Developer",
    company: "Hammerbyte Games S.A de C.V.",
    description: `At Hammerbyte Games, I participated in multidisciplinary interventions in videogames, focusing on development for UEFN and working with UE5.`,
    technologies: ["Unreal 5", "UEFN", "Verse"]
  },
  {
    year: "December 2022",
    role: "Project Director Facebook Page",
    company: "Kareg Inmobiliaria",
    description: `As the Facebook Project Director at Kareg Inmobiliaria, I managed various aspects of Facebook marketing, including Facebook Ads, Facebook Business, Facebook Page management, and the implementation of a social media post grid strategy.`,
    technologies: ["Facebook Ads", "Canva"]
  },
  {
    year: " July 2022 - December 2022",
    role: "Full Stack Developer",
    company: "T-Systems",
    description: `During my time at T-Systems, I served as a Full Stack Developer, leading the update of web pages. Additionally, I provided consultancy on Figma and Notion and facilitated the implementation of the Design Thinking Methodology as a SCRUM Master.`,
    technologies: ["HTML", "CSS", "Figma", "Notion", "SCRUM"],
  },
];

//PROJECTS
export const PROJECTS = [
  {
    title: "MyStomadida",
    image: project7,
    description:
      "A multilingual health support app designed to guide patients and caregivers through proper stoma care using intuitive 3D tutorials and interactive instructions. Stomadida empowers users who are new to living with a stoma bag by offering step-by-step visual guidance, real patient stories, and self-check tools—all accessible fully offline. Developed with a user-first approach, this app demonstrates my ability to build accessible, health-oriented mobile experiences. It includes geolocation-based language support (English, Spanish, Italian), interactive content, and detailed material breakdowns. The app was designed for clarity, empathy, and technical reliability to support users in vulnerable medical situations.",
    technologies: ["Visual Composer Pro", "SwiftUI", "VisionKit", "Vision Pro"],
    link: "https://apps.apple.com/us/app/stomadida-stoma-care-guide/id6746772397"
  },
  {
    title: "Julius' Damnation",
    image: project6,
    description:
      "An infinite runner game set in a mythological underworld, where players control Julius Caesar in his fight to defend the souls of his fallen legion against demonic forces unleashed from Hell. Developed as a solo project, this app demonstrates my ability to combine engaging gameplay mechanics with narrative world-building. Built using Swift and SpriteKit, Julius’ Damnation features responsive touch controls, animated characters, and a dark, immersive visual style. The game also integrates performance optimization techniques and analytics tracking to monitor user engagement and retention.",
    technologies: ["Unity", "SwiftUI", "C#"],
    link: "https://apps.apple.com/us/app/julius-damnation/id6742834396"
  },
  {
    title: "AIE Consultoria Website",
    image: project5,
    description:
      "Custom-built consulting website developed with Next.js, Tailwind CSS, and Google Tag Manager integration. This platform showcases my professional services while demonstrating technical expertise in modern web development. The site features responsive design, optimized performance, and comprehensive analytics tracking to measure client engagement and conversion.",
    technologies: ["Next.js", "Tailwind CSS", "Google Tag Manager"],
    link: "https://aieconsulting.mx/"
  },
  {
    title: "IOS Game 'Serpientes y Escaleras' ",
    image: project1,
    description:
      "An educational app designed for children, featuring interactive poems and a game based on the classic 'Snakes and Ladders'. Developed during Social Service, this project allowed me to gain proficiency in XCode, Swift, and SpriteKit.",
    technologies: ["IOS", "Swift", "SpriteKit"],
    link: "https://github.com/Alepepi/Serpientesypoemas"
  },
  {
    title: "NFC Register Device & Platform for UDLAP",
    image: project2,
    description:
      "Developed as part of an IoT class project, this app provides comprehensive task management capabilities. It includes both front-end and back-end components, utilizing a tech stack that includes HTML, CSS, Vue.js, MongoDB, Vuetify, NuxtJS, and Chart.js.",
    technologies: ["HTML", "CSS", "Vue.js", "MongoDB", "Veutify", "NuxtJS", "Chart.js"],
    link: "https://github.com/MegaChestercat/IoT-Project"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal website showcasing my projects and skills in front-end development and design. Built with HTML, CSS, React, and Tailwind CSS, this website serves as a demonstration of my capabilities and projects.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://github.com/Alepepi/AleOCV"
  },
  {
    title: "Machine Learning F1 Prediction",
    image: project4,
    description:
      "A project undertaken in the 'Selected Topics 1: Machine Learning' course, focusing on predicting outcomes in Formula 1 seasons. The project employed technologies such as Jupyter Notebook, Python, Kaggle, CSV, and Google Colab to analyze and predict F1 race results.",
    technologies: ["Jupyter Notebook", "Python", "Kaggle", "CSV", "Google Colab"],
    link: "https://github.com/Alepepi/TS1P"
  },
];

//CERTIFICATES
export const CERTIFICATES = [
  {
    image: Cert1,
    certification: "EF English Certificate",
    description: `Proficient in English according to the EF Standard English Test (EFSET)`,
    tag: ["#English", "#EF"],
    link: "https://cert.efset.org/qK2ici"
  },
  {
    image: Cert2,
    certification: "Google Cloud Computing Foundations",
    description: `Successfully completed the Google Cloud Computing Foundations course`,
    tag: ["#Google", "#Cloud", "#CloudComputing"],
    link: "https://www.linkedin.com/in/alejandroollivierochoa/details/certifications/1711070026870/single-media-viewer/?profileId=ACoAACl83ccBKmhZBDRn3XFUJaeRq5zfIysT4rY"
  },
  {
    image: Cert3,
    certification: "IOS Lab Certificate",
    description: `Completed a comprehensive iOS development course at the UDLAP University iOS Lab, certified by Apple`,
    tag: ["#IOS", "#Swift", "#SpriteKit"],
    link: "https://www.linkedin.com/in/alejandroollivierochoa/details/certifications/1716833319826/single-media-viewer/?profileId=ACoAACl83ccBKmhZBDRn3XFUJaeRq5zfIysT4rY"
  },
  {
    image: Cert4,
    certification: "Image Processing",
    description: `Completed a course in Image Processing using MATLAB software.`,
    tag: ["#MatLab", "#MachineLearning"],
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=f9a47def-2e6c-49b9-aec5-a4fd3fcb679f&"
  },
];
//GIT COLLABORATION

//EDUCATION
export const EDUCATION = [
  {
    year: "Oct 2024 - Jul 2025",
    title: "Apple Developer Academy",
    institution: "Università degli Studi di Napoli Federico II",
    description: `Completed a comprehensive iOS development course at the Apple Developer Academy, focusing on Swift programming, app design, and user experience. Gained hands-on experience in building iOS applications and collaborating in a team environment.`,
    image: Edu3,
  },
  {
    year: "August 2019 - Jun 2024",
    title: "Bachelor's Degree in Computer Engineering",
    institution: "UDLAP University",
    description: "Achieved a Bachelor's degree in Computer Engineering at UDLAP University, with a focus on software development, data structures, and algorithms. Engaged in various projects and coursework to enhance programming skills and problem-solving abilities.",
    image: Edu2,
  },
  {
    year: "August 2016 - May 2019",
    title: "High School Diploma",
    institution: "Tecnológico de Monterrey",
    description: `Completed high school education at Tecnológico de Monterrey, with a focus on science and technology.`,
    image: Edu1,
  },
];

//CONTACT
export const CONTACT = {
  phoneNo: "+52 871 331 4759",
  email: "aleollivierochoa@gmail.com",
};

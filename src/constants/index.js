import project1 from "../assets/IOSProject.png";
import project2 from "../assets/IOT_Project.png";
import project3 from "../assets/PortafolioSite.png";
import project4 from "../assets/T1Project.png";
import project5 from "../assets/AIE-Website.png";

import Cert1 from "../assets/EFCert.jpg";
import Cert2 from "../assets/GCCF.jpg";
import Cert3 from "../assets/iOSLabCert.jpg";
import Cert4 from "../assets/ImagePorcCertMT.jpg";

export const HERO_CONTENT = `I am a passionate Web developer with a dream of becoming an excellent developer with a focus in UX. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Tailwind, as well as some design technologies like Figma. My goal is to give great solutions for the clients in Front-end development asi well as making an excellent experience for the users, and finally keep my growth in the development industry.`;

//ABOUT ME
export const ABOUT_TEXT = `I am a dedicated and versatile Web developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React, Next.js, Figma, Python, C#, and more. My journey in web development began with a deep curiosity for how these pages come to live, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

//HOBBIES

//SKILLS

export const EXPERIENCES = [
  {
    year: " June 2023 - October 2023",
    role: "Junior Web Developer",
    company: "AIE Consultoria",
    description: `As a Junior Web Developer at AIE Consultoria, I was responsible for developing and maintaining the company website. I utilized Next.js and Tailwind CSS to create a responsive and user-friendly interface. Additionally, I integrated Google Tag Manager for enhanced tracking and analytics capabilities.`,
    technologies: ["Next.js", "Tailwind", "Odoo", "Google Tag Manager"],
  },
  {
    year: " May 2023 - July 2023",
    role: "Game Developer",
    company: "Hammerbyte Games S.A de C.V.",
    description: `At Hammerbyte Games, I participated in multidisciplinary interventions in videogames, focusing on development for UEFN and working with UE5.`,
    technologies: ["Unreal 5", "UEFN", "Verse"],
  },
  {
    year: "December 2022",
    role: "Project Director Facebook Page",
    company: "Kareg Inmobiliaria",
    description: `As the Facebook Project Director at Kareg Inmobiliaria, I managed various aspects of Facebook marketing, including Facebook Ads, Facebook Business, Facebook Page management, and the implementation of a social media post grid strategy.`,
    technologies: ["Facebook Ads", "Canva"],
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
    title: "Pagina Web de AIE Consultoria",
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

//CONTACT
export const CONTACT = {
  phoneNo: "+52 871 331 4759 ",
  email: "aleollivierochoa@gmail.com",
};

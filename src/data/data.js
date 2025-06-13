import healthToolkitImg from '../assets/calculator.webp';
import typlyImg from '../assets/todo.avif';
import typeAceImg from '../assets/login.jpg';
import converterImg from '../assets/converter.jpg';

export const data = [
  {
    projectName: "File Converter",
    projectImg: converterImg,
    description: "A free online tool that converts JPG to PDF and PDF to JPG/PNG. Process files directly in the browser with no registration required.",
    liveLink: "https://convertjpgpdf.netlify.app/",
    githubLink: "https://github.com/abhijitlimited1/file-converter",
    technologies: ["JavaScript", "HTML5", "CSS3", "PDF.js", "File API"]
  },
  {
    projectName: "Health Toolkit",
    projectImg: healthToolkitImg,
    description: "A comprehensive health management application with tools for tracking fitness, nutrition, and wellness goals.",
    liveLink: "https://healthtoolkit.netlify.app/",
    githubLink: "https://github.com/abhijitlimited1/fitness-tools-site",
    technologies: ["React", "CSS", "JavaScript", "Health API"]
  },
  {
    projectName: "Typly",
    projectImg: typlyImg,
    description: "An intuitive typing application designed to improve typing speed and accuracy with interactive exercises.",
    liveLink: "https://typly.netlify.app/",
    githubLink: "https://github.com/abhijitlimited1/typing-test-website",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"]
  },
  {
    projectName: "TypeAce",
    projectImg: typeAceImg,
    description: "Advanced typing test platform with analytics, custom tests, and competitive features for typing enthusiasts.",
    liveLink: "https://typeace.netlify.app/",
    githubLink: "https://github.com/abhijitlimited1/main-typing-website",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  }
];
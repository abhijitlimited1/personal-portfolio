import healthToolkitImg from '../assets/calculator.webp';
import typlyImg from '../assets/todo.avif';
import typeAceImg from '../assets/login.jpg';
import converterImg from '../assets/converter.jpg';
import resumeBuilderImg from '../assets/resume.jpg';
// TODO: Replace with actual progress image when available
// import aiResumeProgressImg from '../assets/ai-resume-progress.jpg';

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
  },
  {
    projectName: "AI Resume Builder",
    projectImg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231a1a1a'/%3E%3Ctext x='200' y='110' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='20' font-weight='bold'%3E🤖 AI Resume Builder%3C/text%3E%3Ctext x='200' y='140' text-anchor='middle' fill='%23a0a0a0' font-family='Arial, sans-serif' font-size='14'%3EPowered by AI Technology%3C/text%3E%3Ctext x='200' y='170' text-anchor='middle' fill='%236366f1' font-family='Arial, sans-serif' font-size='12' font-weight='bold'%3E🚀 IN PROGRESS%3C/text%3E%3C/svg%3E",
    description: "An intelligent resume builder powered by AI that helps users create professional, ATS-friendly resumes with personalized suggestions and content optimization.",
    liveLink: null,
    githubLink: null,
    technologies: ["React", "Tailwind CSS", "Django", "OpenAI API"],
    status: "In Progress"
  }
];
// src/utils/techIcons.js
import {
  FaReact, FaNodeJs, FaPython, FaCss3Alt, FaHtml5,
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiSocketdotio, SiRedux, SiFirebase,
  SiExpress, SiScikitlearn, SiPandas, SiFlask, SiStreamlit
} from "react-icons/si";

export const techIconMap = {
  "React": FaReact,
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "Express.js": SiExpress,
  "Socket.IO": SiSocketdotio,
  "MongoDB": SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  "Redux": SiRedux,
  "Firebase": SiFirebase,
  "Python": FaPython,
  "Pandas": SiPandas,
  "Scikit-learn": SiScikitlearn,
  "NLTK": FaPython, // fallback icon
  "Flask": SiFlask,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "Streamlit": SiStreamlit,
};

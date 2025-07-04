import { motion } from "framer-motion";
import bg1 from "../../assets/portfolio1.jpg";
import bg2 from "../../assets/portfolio2.jpg";
import bg3 from "../../assets/portfolio3.jpg";
import bg4 from "../../assets/portfolio4.jpg";
import bg5 from "../../assets/portfolio5.jpg";
import Card from "./ui/Card";
import { techIconMap } from "../../utils/techIcons";

const Projects = () => {
  const projectData1 = {
    title: "💬 Chit Chat",
    description: "A real-time chat application using Socket.IO for instant messaging.",
    tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Tailwind CSS"],
    gitLink: "https://github.com/harshit-kharayat23/chat-app",
    liveLink: "https://chit-chat-qyxv.onrender.com/",
    bgUrl: bg1,
    from: "#1d2966",
    to: "#4a90e2",
  };

  const projectData2 = {
    title: "🐾 Bark Net",
    description:
      "A social network and dog breed identification system with EfficientNetB1-based classification integrated using Flask microservice.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Flask", "Python", "EfficientNet", "Tailwind CSS"],
    gitLink: "https://github.com/harshit-kharayat23/bark-net",
    liveLink: "",
    bgUrl: bg2,
    from: "#ff7e5f",
    to: "#feb47b",
  };

  const projectData3 = {
    title: "🚀 Dev Match",
    description:
      "A developer matchmaking platform with real-time chat using WebSockets and matching based on skills and interests.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS", "WebSockets"],
    gitLink: "https://github.com/harshit-kharayat23/dev-tinder",
    liveLink: "",
    bgUrl: bg3,
    from: "#833ab4",
    to: "#fd1d1d",
  };

  const projectData4 = {
    title: "🍿 Movie Recommendation System",
    description:
      "Content-based movie recommender using cosine similarity and filtering logic, offering personalized suggestions via API.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    gitLink: "https://github.com/harshit-kharayat23/Movie-Recommendation-System",
    liveLink: "",
    bgUrl: bg4,
    from: "#2c3e50",
    to: "#4ca1af",
  };

  const projectData5 = {
    title: "🧠 Sentiment Analysis",
    description:
      "Flipkart product review sentiment analyzer using Selenium, BeautifulSoup, and NLTK, visualized via Streamlit dashboard.",
    tech: ["Python", "NLTK", "Selenium", "BeautifulSoup", "Streamlit"],
    gitLink: "https://github.com/harshit-kharayat23/Sentimental_analysis",
    liveLink: "",
    bgUrl: bg5,
    from: "#f12711",
    to: "#f5af19",
  };

  const projectsArray = [
    projectData1,
    projectData2,
    projectData3,
    projectData4,
    projectData5,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="h-full w-full flex flex-col gap-10 md:gap-16 lg:gap-20 xl:gap-30 py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="h-full w-full flex justify-center">
        <motion.h3
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-t from-[#131010] to-[#dddddd] text-center"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Projects
        </motion.h3>
      </div>

      <motion.div
        className="w-full h-full gap-6 sm:gap-8 md:gap-10 flex flex-wrap justify-center items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsArray.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(30%-1.5rem)] max-w-[400px] min-w-[280px]"
          >
            <Card project={project} iconMap={techIconMap} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

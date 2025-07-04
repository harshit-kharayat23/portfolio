import { motion } from "framer-motion";
import Card from "./ui/Card";

const Projects = () => {
  const projectData1 = {
    title: "💬 Chat App",
    description:
      "A real-time chat application using Socket.IO for instant messaging.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
      "Tailwind CSS",
    ],
    gitLink: "https://github.com/harshit-kharayat23/chat-app",
    liveLink: "https://chit-chat-qyxv.onrender.com/",
    bgUrl:
      "https://img.freepik.com/premium-photo/3d-illustration-online-chatting-concept-mobile-phone_36845-641.jpg",
    from: "#1d2966",
    to: "#4a90e2",
  };

  const projectData2 = {
    title: "🐶 Bark Net",
    description:
      "A social network for dog lovers to connect, share, and showcase pets.",
    tech: ["React", "Redux", "Firebase", "Tailwind CSS"],
    gitLink: "https://github.com/harshit-kharayat23/bark-net",
    liveLink: "", // Add if hosted
    bgUrl:
      "https://img.freepik.com/premium-photo/funny-dog-with-social-media-concept_97843-1067.jpg",
    from: "#ff7e5f",
    to: "#feb47b",
  };

  const projectData3 = {
    title: "❤️ Dev Tinder",
    description:
      "Swipe-style matching platform for developers to find collaborators.",
    tech: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
    gitLink: "https://github.com/harshit-kharayat23/dev-tinder",
    liveLink: "", // Add if hosted
    bgUrl:
      "https://img.freepik.com/premium-vector/online-dating-app-concept-young-couple-dating-via-mobile-application-flat-vector-illustration_128772-1432.jpg",
    from: "#833ab4",
    to: "#fd1d1d",
  };

  const projectData4 = {
    title: "🎞️ Movie Recommendation System",
    description:
      "Content-based movie recommender that suggests similar movies.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    gitLink:
      "https://github.com/harshit-kharayat23/Movie-Recommendation-System",
    liveLink: "", // Add if hosted
    bgUrl:
      "https://img.freepik.com/premium-photo/movie-night-elements-popcorn-3d-glasses-film-strip-generative-ai_900101-17120.jpg",
    from: "#2c3e50",
    to: "#4ca1af",
  };

  const projectData5 = {
    title: "🧠 Sentiment Analysis",
    description:
      "Analyzes user input to detect sentiment using NLP techniques.",
    tech: ["Python", "Flask", "NLTK", "Sklearn", "HTML", "CSS"],
    gitLink: "https://github.com/harshit-kharayat23/Sentimental_analysis",
    liveLink: "", // Add if hosted
    bgUrl:
      "https://img.freepik.com/premium-vector/sentiment-analysis-concept-illustration_251005-445.jpg",
    from: "#f12711",
    to: "#f5af19",
  };

  const projectsArray = [
    projectData1,
    projectData2,
    projectData3,
    projectData4,
    projectData5,
    // Add your older projects below this if you want
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.3, // Initial delay before first child starts
      },
    },
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Title animation variants
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
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
            <Card project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

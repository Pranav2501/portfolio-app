import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { renderIcon } from '../../utils/iconUtils';

const Home: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <h2 className="text-secondary text-xl font-medium">Hello, I'm</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-textPrimary">
              Pranav Raj Sowrirajan Balaji
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-medium text-textSecondary">
              Software Engineer | Full Stack Developer | ML Enthusiast
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12 text-textSecondary max-w-2xl mx-auto md:mx-0"
          >
            <p className="text-lg">
              A software engineer driven to build scalable full-stack systems and AI-powered applications.
              Seeking roles in backend development, mobile application development and cloud infrastructure
              to create high-performance, impactful solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button 
              onClick={scrollToAbout}
              className="bg-transparent border-2 border-secondary text-secondary px-8 py-3 rounded-md 
              hover:bg-secondary hover:bg-opacity-20 transition-all duration-300 flex items-center"
            >
              Explore My Work {renderIcon(FaArrowDown, { className: "ml-2" })}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-primary bg-opacity-80">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary opacity-10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary opacity-10 filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Home; 
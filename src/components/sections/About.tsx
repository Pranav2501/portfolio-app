import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Try to import the profile image, but provide fallback if it doesn't exist
let profileImage: string | undefined;
try {
  profileImage = require('../../assets/images/profile.jpg');
} catch (e) {
  profileImage = undefined;
}

const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-2">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-secondary mx-auto md:mx-0 max-w-xs">
              {!imageError && profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Pranav Raj Sowrirajan Balaji" 
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="bg-accent h-full w-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-secondary">PR</span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3"
          >
            <div className="text-textSecondary space-y-4">
              <p>
                I'm a passionate Software Engineer currently pursuing a Master's in Computer Science at Northeastern University, Oakland, CA. My academic journey began with a Bachelor's in Computer Science & Engineering from Sri Sivasubramaniya Nadar College of Engineering in Chennai, India.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I specialize in creating scalable full-stack systems and AI-powered applications. My experience spans web development, mobile applications, machine learning, and data visualization.
              </p>
              <p>
                I'm particularly interested in roles that allow me to leverage my skills in backend development, mobile application development, and cloud infrastructure to build high-performance, impactful solutions.
              </p>
              <div className="pt-4">
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">▹</span> Full Stack Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">▹</span> Mobile App Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">▹</span> Machine Learning
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">▹</span> Cloud Infrastructure
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">▹</span> Data Visualization
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">▹</span> Database Management
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
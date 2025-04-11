import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaCode, FaMobile, FaServer, FaChartArea, FaDatabase } from 'react-icons/fa';
import { renderIcon } from '../../utils/iconUtils';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  type: 'web' | 'mobile' | 'ml' | 'data' | 'systems';
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  image,
  github,
  demo,
  type
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'web': return renderIcon(FaCode, { className: "text-secondary", size: 20 });
      case 'mobile': return renderIcon(FaMobile, { className: "text-secondary", size: 20 });
      case 'ml': return renderIcon(FaServer, { className: "text-secondary", size: 20 });
      case 'data': return renderIcon(FaChartArea, { className: "text-secondary", size: 20 });
      case 'systems': return renderIcon(FaDatabase, { className: "text-secondary", size: 20 });
      default: return renderIcon(FaCode, { className: "text-secondary", size: 20 });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-accent rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 bg-primary flex items-center justify-center relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center flex-col">
            {getIcon()}
            <span className="text-textSecondary mt-2">{type.toUpperCase()} Project</span>
          </div>
        )}
        
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center p-4"
          >
            <div className="flex space-x-4">
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 transition-all"
                >
                  {renderIcon(FaGithub, { className: "text-secondary", size: 20 })}
                </a>
              )}
              {demo && (
                <a 
                  href={demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 transition-all"
                >
                  {renderIcon(FaLink, { className: "text-secondary", size: 16 })}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-textPrimary mb-2">{title}</h3>
        <p className="text-textSecondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-md bg-primary text-secondary border border-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Reddish - Key : Value Database with CLI",
      description:
        "Built a custom in-memory key-value store with support for strings, lists, sets, and hashes. Implemented features like key expiration, pub/sub messaging, and snapshot-based persistence with a CLI client in TypeScript.",
      technologies: ["Node.js", "TypeScript", "RESP Protocol", "Systems Programming"],
      github: "https://github.com/Pranav2501/reddish", 
      type: "systems"
    },
    {
      title: "SocketShare - Cloud File Sharing App",
      description:
      "Built a file-sharing platform using React, Flask, and AWS S3 with secure uploads, file search, and download support. Implemented pre-signed URLs, CORS protection, and frontend search with debounce logic.",
      technologies: ["React", "Flask", "AWS S3", "Bootstrap", "Python", "CORS"],
      github: "https://socketshare-client.onrender.com",
      type: "web"
    },
    {
      title: "Lockbox - Password Manager App",
      description: "Developed a secure password management app using Swift and Firebase, integrating geo-tracking via Apple Maps Kit to monitor password usage locations, enhancing security insights for users.",
      technologies: ["Swift", "Firebase", "Apple Maps Kit", "Encryption"],
      github: "https://github.com/agnibha-chatterjee/lockbox",
      type: "mobile"
    },
    {
      title: "Kanbas - Learning Management System",
      description: "Developed a fully functional learning management system called Kanbas using React, Node.js and MongoDB, incorporating authentication, role-based access control and dynamic course association.",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      github: "https://project--kanbas-react-web-app-pv.netlify.app/#/Kanbas/Account/Signup",
      type: "web"
    },
    {
      title: "Vehicle Detection for Autonomous Systems",
      description:
        "Built a real-time vehicle detection and tracking system using YOLOv4 and YOLOv8 on COCO datasets with sub-30ms inference times. Integrated Dlib tracking for short-term object continuity in autonomous traffic simulations.",
      technologies: ["Python", "YOLOv4", "YOLOv8", "OpenCV", "Dlib"],
      github: "https://github.com/Pranav2501/vehicle-detection", 
      type: "ml"
    },
    {
      title: "Stock Market Prediction & Analysis",
      description: "Created a machine learning-based stock market prediction system utilizing LSTM neural networks, achieving 94.6% accuracy in forecasting price movements over a six-month period.",
      technologies: ["Python", "LSTM", "TensorFlow", "Data Analysis"],
      github: "https://github.com/Pranav2501/Stock-Price-Prediction-System",
      type: "data"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textPrimary inline-block relative">
            Featured Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform -translate-y-1"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
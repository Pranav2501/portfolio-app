import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarker } from 'react-icons/fa';
import { renderIcon } from '../../utils/iconUtils';

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  active: boolean;
  onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ title, company, location, period, responsibilities, active, onClick }) => {
  return (
    <div 
      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        active ? 'bg-accent shadow-lg' : 'hover:bg-accent hover:bg-opacity-50'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
          <h4 className="text-secondary font-medium">{company}</h4>
        </div>
        <div className={`p-2 rounded-full ${active ? 'bg-secondary bg-opacity-20' : 'bg-accent'}`}>
          {renderIcon(FaBriefcase, { className: "text-secondary" })}
        </div>
      </div>
      <div className="mt-2 text-sm text-textSecondary flex items-center space-x-4">
        <span className="flex items-center">
          {renderIcon(FaCalendar, { className: "mr-1" })} {period}
        </span>
        <span className="flex items-center">
          {renderIcon(FaMapMarker, { className: "mr-1" })} {location}
        </span>
      </div>
      {active && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <ul className="space-y-2 text-textSecondary">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex">
                <span className="text-secondary mr-2">▹</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: "Graduate Teaching Assistant",
      company: "Northeastern University",
      location: "Oakland, CA",
      period: "Sep 2024 - Present",
      responsibilities: [
        "Support the professor in running usability experiments to assess the effectiveness of students' visualizations in real-world data analysis scenarios.",
        "Evaluate assignments on creating interactive web-based visualizations and provide feedback to improve design efficiency based on best practices.",
        "Conduct weekly office hours to assist graduate students with data visualization concepts & tools like D3.js and Vega-Lite."
      ]
    },
    {
      title: "Software Development Intern",
      company: "Chain-Sys Corporation",
      location: "Chennai, India",
      period: "Jul 2024 - Aug 2024",
      responsibilities: [
        "Developed and deployed a scalable job board application using the Spring Framework, MongoDB and Netlify, streamlining job postings for over 500 users with enhanced UI through Slickgrid and Thymeleaf integration.",
        "Implemented Swagger documentation, improving API clarity and reducing development and testing time by 30%.",
        "Optimized MVC functionalities for different user roles, leveraging IoC containers and Spring Security, to improve scalabilty and system security."
      ]
    },
    {
      title: "Software Development Intern",
      company: "Logic Information Systems",
      location: "Chennai, India",
      period: "May 2022 - Jul 2022",
      responsibilities: [
        "Developed RESTful APIs for a retail management platform serving over 3,000 active users, achieving a 25% improvement in response times through optimized database queries and indexing.",
        "Integrated AWS S3 for scalable storage of product descriptions and details, managing data for over 5,000 products.",
        "Automated CI/CD pipelines with Docker and Kubernetes, enabling version-controlled deployments and cutting production release times by 30%."
      ]
    },
    {
      title: "Backend Development Intern",
      company: "Logic Information Systems",
      location: "Chennai, India",
      period: "Sep 2021 - Oct 2021",
      responsibilities: [
        "Optimized database schemas for a high-traffic retail application, resulting in a 20% reduction in query execution time and improved user response rates during peak traffic.",
        "Implemented caching strategies using Redis to enhance data retrieval speeds, leading to a 30% increase in data retrieval speeds.",
        "Enhanced security infrastructure by integrating OAuth 2.0 for user authentication, safeguarding sensitive data and reducing unauthorized access attempts."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Sri Sivasubramaniya Nadar College of Engineering",
      location: "Chennai, India",
      period: "Nov 2020 - Aug 2022",
      responsibilities: [
        "Directed a team of four in the development of an educational portal, which successfully increased English language proficiency among 200+ rural students.",
        "Designed and implemented key features of the portal using Django Framework & PostgreSQL, optimizing deployment processes to reduce server and operational costs by 25%.",
        "Conducted comprehensive user testing to drive iterative enhancements and optimize user experience."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textPrimary inline-block relative">
            Work Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform -translate-y-1"></span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ExperienceCard
                {...experience}
                active={activeExperience === index}
                onClick={() => setActiveExperience(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 
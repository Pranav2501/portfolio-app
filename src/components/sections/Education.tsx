import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaMapMarker } from 'react-icons/fa';
import { renderIcon } from '../../utils/iconUtils';

interface EducationItemProps {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  courses?: string[];
  delay: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  institution, degree, location, period, gpa, courses, delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-textPrimary">{institution}</h3>
          <h4 className="text-secondary font-medium">{degree}</h4>
        </div>
        <div className="p-2 rounded-full bg-secondary bg-opacity-20">
          {renderIcon(FaGraduationCap, { className: "text-secondary", size: 24 })}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap text-sm text-textSecondary">
        <div className="mr-4 mb-2 flex items-center">
          {renderIcon(FaCalendar, { className: "mr-1" })} {period}
        </div>
        <div className="mr-4 mb-2 flex items-center">
          {renderIcon(FaMapMarker, { className: "mr-1" })} {location}
        </div>
        <div className="mb-2 flex items-center">
          GPA: <span className="text-secondary ml-1">{gpa}</span>
        </div>
      </div>

      {courses && (
        <div className="mt-4">
          <h5 className="text-textPrimary font-medium mb-2">Relevant Coursework:</h5>
          <p className="text-textSecondary text-sm">{courses.join(", ")}</p>
        </div>
      )}
    </motion.div>
  );
};

const Education: React.FC = () => {
  const educationItems: EducationItemProps[] = [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Computer Science",
      location: "Oakland, CA",
      period: "Sep 2023 - April 2025 (Expected)",
      gpa: "4.0/4.0",
      courses: [
        "Object Oriented Programming", 
        "Algorithms", 
        "Data Visualization", 
        "Computer Vision", 
        "Mobile Application Development (iOS)", 
        "Database Management Systems", 
        "Web Development", 
        "Computer Networks"
      ],
      delay: 0.1
    },
    {
      institution: "Sri Sivasubramaniya Nadar College of Engineering",
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      location: "Chennai, India",
      period: "Aug 2019 - May 2023",
      gpa: "8.578/10.0",
      delay: 0.3
    }
  ];

  return (
    <section id="education" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textPrimary inline-block relative">
            Education
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform -translate-y-1"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationItems.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 
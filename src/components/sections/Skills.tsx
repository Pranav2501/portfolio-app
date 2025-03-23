import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { 
  FaCode, FaServer, FaDatabase, FaCloud, FaChartLine, 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaPython, FaJava, FaAws, FaDocker
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiTailwindcss, SiFlutter, SiMongodb, SiPostgresql, SiFirebase } from 'react-icons/si';
import { renderIcon } from '../../utils/iconUtils';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: IconType;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-bgSecondary p-6 rounded-xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mr-3">
          {renderIcon(icon, { className: "text-secondary" })}
        </div>
        <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-accent rounded-full text-sm text-textSecondary"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  // Define icons to use
  const skillIcons: { name: string; icon: IconType }[] = [
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Redux', icon: SiRedux },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Python', icon: FaPython },
    { name: 'Java', icon: FaJava },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'AWS', icon: FaAws },
    { name: 'Docker', icon: FaDocker }
  ];

  const skillCategories: { icon: IconType; title: string; skills: string[]; delay: number }[] = [
    {
      icon: FaCode,
      title: "Programming Languages",
      skills: ["Python", "Java", "C/C++", "JavaScript", "Swift", "R"],
      delay: 0.1
    },
    {
      icon: FaServer,
      title: "Frameworks & Libraries",
      skills: ["React", "Django", "Flask", "Spring", "NodeJS"],
      delay: 0.2
    },
    {
      icon: FaDatabase,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      delay: 0.3
    },
    {
      icon: FaCloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Firebase", "GCP", "Docker", "Kubernetes"],
      delay: 0.4
    },
    {
      icon: FaChartLine,
      title: "Data & ML Tools",
      skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "D3.js", "Apache Spark"],
      delay: 0.5
    }
  ];

  return (
    <section id="skills" className="py-20 bg-bgPrimary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-2">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-textSecondary max-w-2xl mx-auto">
            Here are some of the skills and technologies I've been working with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={category.delay}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            {skillIcons.map((item, index) => (
              <div 
                key={index}
                className="w-16 h-16 bg-bgSecondary rounded-full flex items-center justify-center
                          hover:bg-secondary hover:bg-opacity-10 transition-all duration-300
                          shadow-sm text-2xl text-secondary"
                title={item.name}
              >
                {renderIcon(item.icon)}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
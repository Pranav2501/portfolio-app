import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { renderIcon } from '../../utils/iconUtils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-accent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-textSecondary text-sm">
              &copy; {new Date().getFullYear()} Pranav Raj Sowrirajan Balaji. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/pranavraj-sb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              {renderIcon(FaLinkedin, { size: 20 })}
            </a>
            <a 
              href="https://github.com/Pranav2501" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              {renderIcon(FaGithub, { size: 20 })}
            </a>
            <a 
              href="mailto:pranavraj.sb@gmail.com" 
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              {renderIcon(FaEnvelope, { size: 20 })}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
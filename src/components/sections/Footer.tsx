import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { renderIcon } from '../../utils/iconUtils';

const Footer = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <a 
        href="https://www.linkedin.com/in/pranav-raj-sb/" 
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
  );
};

export default Footer; 
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarker } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { renderIcon } from '../../utils/iconUtils';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitSuccess(false);
    
    // EmailJS credentials from environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const userId = process.env.REACT_APP_EMAILJS_USER_ID || 'your_user_id';
    
    emailjs.sendForm(serviceId, templateId, form.current!, userId)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset the success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setIsSubmitting(false);
        setSubmitError(true);
        setErrorMessage('Failed to send email. Please try again later or contact me directly.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textPrimary inline-block relative">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform -translate-y-1"></span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row max-w-5xl mx-auto gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/5 space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-textPrimary mb-4">Contact Information</h3>
              <p className="text-textSecondary">
                Feel free to reach out to me via any of the channels below. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-textSecondary">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-3">
                  {renderIcon(FaEnvelope, { className: "text-secondary" })}
                </div>
                <div>
                  <h4 className="text-textPrimary font-medium">Email</h4>
                  <a href="mailto:pranavraj.sb@gmail.com" className="hover:text-secondary transition-colors">
                    pranavraj.sb@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center text-textSecondary">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-3">
                  {renderIcon(FaPhone, { className: "text-secondary" })}
                </div>
                <div>
                  <h4 className="text-textPrimary font-medium">Phone</h4>
                  <a href="tel:+14062023651" className="hover:text-secondary transition-colors">
                    +1 (406) 202-3651
                  </a>
                </div>
              </div>

              <div className="flex items-center text-textSecondary">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-3">
                  {renderIcon(FaMapMarker, { className: "text-secondary" })}
                </div>
                <div>
                  <h4 className="text-textPrimary font-medium">Location</h4>
                  <p>Oakland, California</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-textPrimary font-medium mb-3">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/pranav-raj-sb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-secondary hover:bg-opacity-20 transition-all"
                >
                  {renderIcon(FaLinkedin, { className: "text-secondary" })}
                </a>
                <a 
                  href="https://github.com/Pranav2501" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-secondary hover:bg-opacity-20 transition-all"
                >
                  {renderIcon(FaGithub, { className: "text-secondary" })}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <form ref={form} onSubmit={handleSubmit} className="bg-accent p-6 rounded-lg shadow-lg">
              {submitSuccess && (
                <div className="mb-6 p-4 bg-secondary bg-opacity-20 rounded-lg text-secondary text-center">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-500 bg-opacity-20 rounded-lg text-red-500 text-center">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-textPrimary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md bg-primary text-textPrimary border border-accent focus:border-secondary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-textPrimary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md bg-primary text-textPrimary border border-accent focus:border-secondary focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-textPrimary mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-primary text-textPrimary border border-accent focus:border-secondary focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-textPrimary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-md bg-primary text-textPrimary border border-accent focus:border-secondary focus:outline-none resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-md text-primary font-medium bg-secondary hover:bg-opacity-90 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
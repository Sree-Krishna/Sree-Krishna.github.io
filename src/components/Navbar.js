import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css'; // Import your CSS file

const sections = [
  'about-section',
  'skills-section',
  'projects-section',
  'experience-section',
  'contact-section', // Replace with your contact section ID if different
];

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState('');
  useEffect(() => {
    setCurrentSection('about-section'); 
    const handleScroll = () => {
      const sectionInView = sections.find((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const padding = 300; // Adjust as needed
          return rect.top >= -padding && rect.bottom <= window.innerHeight + padding;
        }
        return false;
      });
  
      if (sectionInView) {
        setCurrentSection(sectionInView);
      } else {
        setCurrentSection(''); // Reset if no section is in view
      }
    };
  
    // Remove this line:
    // setCurrentSection('about-section')
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []); // Empty dependency array to run only once

  return (
    <nav className={styles.nav}>
      <a href="#about-section">
        <div className={styles.sign}></div>
      </a>
      <div className={styles.navLink}>
        <span className={`${currentSection === 'about-section' ? styles.active : ''}`}>
          <a href="#about-section" >
            ABOUT
          </a>
        </span>
        <span className={`${currentSection === 'skills-section' ? styles.active : ''}`}>
          <a href="#skills-section">
            SKILLS
          </a>
        </span>
        <span className={`${currentSection === 'projects-section' ? styles.active : ''}`}>
          <a href="#projects-section" >
            PROJECTS
          </a>
        </span>
        <span className={`${currentSection === 'experience-section' ? styles.active : ''}`}>
          <a href="#experience-section">
            EXPERIENCE
          </a>
        </span>
        <span style={{paddingRight: "20px"}} className={`${currentSection === 'contact-section' ? styles.active : ''}`}>
          <a href="#contact-section">
            CONTACT
          </a>
        </span>
      </div>
    </nav>
  );
};



export default Navbar;

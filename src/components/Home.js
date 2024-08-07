import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'; // Import statement
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  // const roles = ['Data Scientist', 'Full Stack Developer', 'AI Enthusiast'];
  const roles = ['DATA SCIENTIST', 'FULL STACK DEVELOPER', 'AI ENTHUSIAST'];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500); // Adjust delay as needed
    return () => clearTimeout(timer); // Cleanup function for timer
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change the duration of each role
    return () => clearInterval(interval); // Cleanup function for interval
  }, []);

  const handleScrollToSkills = () => {
    event.preventDefault()
    const skillsSection = document.getElementById('about-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  return (
    <section id="home-section" className={styles.home}>
      <div className={visible ? styles.containerOne : styles.noDisplay}>
        <div > <span className={styles.hi}>HI, I AM</span></div>
        <div>
        <span className={styles.sreeKrishna}>SREE KRISHNA </span>
        <span className={styles.suresh}>SURESH</span>
        </div>
        <div ><span className={styles.roles}>{roles[roleIndex]}</span></div>
      </div>
      <div className={visible ? styles.resume: styles.noDisplay}>
        <a href="/resume/resume.pdf" download="Sree_Krishna_Suresh_Resume.pdf">
          RESUME
        </a>
        </div>
      <div className={visible ? styles.socialLinks: styles.noDisplay}>
          <IconButton href="https://www.linkedin.com/in/sree-krishna/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
          </IconButton>
          <IconButton href="https://github.com/Sree-Krishna" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
          </IconButton>
          <IconButton href="mailto:suesh.sr@northeastern.edu" target="_blank" rel="noopener noreferrer">
              <MailIcon />
          </IconButton>
      </div>
      <div style={{position: 'absolute', bottom: 0}} className={styles.continerTwo}>
        <a href="#about-section" onClick={handleScrollToSkills}>
          <div className={styles.downArrow}></div>
        </a>
      </div>
    </section>
  );
};

export default Home;

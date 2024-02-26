import React, { useEffect, useState } from 'react';
import styles from './About.module.css'; // Import statement
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500); // Adjust delay as needed
    return () => clearTimeout(timer); // Cleanup function for timer
  }, []);

  return (
    <section id="about-section" className={styles.about}>
      <div className={styles.container}>
        <div className="row">
          <div className={`col-md-6 ${styles.aboutText}`}>
            <p className={visible ? styles.visible : ''}>
              I am a passionate and driven AI, ML, and Data Science professional
              with [number] years of experience in the field. I am highly skilled
              in [list of key skills, separated by commas], and I am always
              eager to learn and explore new challenges. I am particularly interested
              in [mention specific areas of interest within AI, ML, or DS]. In my
              work, I strive to [mention your goals and aspirations in your field].
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

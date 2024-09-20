import React, { useEffect, useState, useRef } from 'react';
import styles from './About.module.css'
import Skills from './Skills';


const About = () => {
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), 500); // Adjust delay as needed
          observer.unobserve(aboutRef.current);
          return () => clearTimeout(timer);
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <section id="about-section" ref={aboutRef} className={styles.about}>
      <div className={visible ? styles.aboutInfo: styles.noabout}>
        <div className = {styles.mydetails}>
          <img src="\images\about\profile1.jpg" alt="Sree Krishna Suresh" className={styles.aboutProfilePicture} />
          <div className={styles.bio}>
            <p className={styles.bioAbout}>ABOUT ME</p>
            <p>
            Welcome to my creative space! I’m Sree Krishna, a passionate software developer who thrives on innovation and pushing the boundaries of technology. With a unique blend of technical expertise, creativity, and a touch of originality, I bring ideas to life. Whether it’s designing immersive user experiences, crafting engaging narratives, or exploring the depths of data, I’m dedicated to transforming visions into reality and creating impactful solutions.
            </p>
            <p>
              {/* Add links to your social media profiles or portfolio websites */}
              My Hobbies: Photography, Painting, Badminton
              {/* <a href="#about-section"> </a> */}
              {/* Add links to other platforms as needed */}
            </p>
          </div>
        </div>
        <div className = {styles.myskills}>
          <Skills/>
        </div>
      </div>
    </section>
  );
};

export default About;
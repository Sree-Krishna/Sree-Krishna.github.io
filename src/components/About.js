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
          <img src="\images\about\profile.png" alt="Your Name" className={styles.aboutProfilePicture} />
          <div className={styles.bio}>
            <h2>About Me</h2>
            <p>
            Welcome to my creative hub! I &apos m Sree Krishna,
            a dynamic software Developer with a penchant for pushing boundaries
            and crafting captivating experiences. With a blend of innovation,
            expertise, and a dash of quirkiness,
            I thrive on transforming ideas into reality.
            Whether it &apos s designing immersive user interfaces,
            crafting compelling narratives, or diving into the depths of data,
            I&aposm here to bring visions to life.
            </p>
            <p>
              {/* Add links to your social media profiles or portfolio websites */}
              You can also find me on:
              <a href="https://www.linkedin.com/in/your-linkedin-profile">LinkedIn</a>
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
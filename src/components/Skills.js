import React, { useEffect, useState, useRef } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Skills is in View')
          const timer = setTimeout(() => setVisible(true), 500); // Adjust delay as needed
          observer.unobserve(skillsRef.current);
          return () => clearTimeout(timer);
        }
      });
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <section id="skills-section" ref={skillsRef} className={visible? styles.skills: styles.noSkills}>
      <div className={visible ? styles.programming: styles.noSkills}>
        <span>PROGRAMMING & TOOLS</span>
        <div className={styles.icons}>
          <div>
          <img src="\images\skills\python.png" alt="Python" />
          <span>Python</span>
          </div>
          <div>
          <img src="\images\skills\git.png" alt="Git" />
          <span>Git</span>
          </div>
          <div>
          <img src="\images\skills\java.png" alt="Java" />
          <span>Java</span>
          </div>
          <div>
          <img src="\images\skills\c-plus-plus.svg" alt="C++" />
          <span>C++</span>
          </div>
          {/* Add other icons as needed */}
        </div>
      </div>
      <div className={visible ? styles.dataScience: styles.noSkills}>
      <span>DATA SCIENCE & MACHINE LEARNING</span>
        <div className={styles.icons}>
        <img src="\images\skills\tensorflow.svg" alt="Python" />
          <img src="\images\skills\tensorflow.svg" alt="Python" />
          <img src="\images\skills\tensorflow.svg" alt="Python" />
          <img src="\images\skills\tensorflow.svg" alt="Python" />
          <img src="\images\skills\tensorflow.svg" alt="Python" />
          <img src="\images\skills\tensorflow.svg" alt="Python" />
          {/* Add other icons as needed */}
        </div>
      </div>
      <div className={visible ? styles.webDevelopment: styles.noSkills}>
      <span>WEB DEVELOPMENT</span>
        <div className={styles.icons}>
        <img src="\images\skills\css.png" alt="Python" />
          <img src="\images\skills\typescript.png" alt="Python" />
          <img src="\images\skills\react.png" alt="Python" />
          {/* Add other icons as needed */}
        </div>
      </div>
      
    </section>
  );
};

export default Skills;

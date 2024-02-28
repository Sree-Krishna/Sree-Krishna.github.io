import React, { useEffect, useState, useRef }  from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const expRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Experience is in View')
          const timer = setTimeout(() => setVisible(true), 1000); // Adjust delay as needed
          observer.unobserve(expRef.current);
          return () => clearTimeout(timer);
        }
      });
    });

    if (expRef.current) {
      observer.observe(expRef.current);
    }

    return () => {
      if (expRef.current) {
        observer.unobserve(expRef.current);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <section id="experience-section" ref={expRef} className={styles.experience}>
      <div className={styles.content}>
        <h1>Hi, I &apos m Your Name</h1>
        <p>
          I am a [Your profession] with [years] years of experience. I am passionate
          about [your passion].
        </p>
      </div>
    </section>
  );
};

export default Experience;

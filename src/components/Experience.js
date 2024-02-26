import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience-section" className={styles.experience}>
      <div className={styles.content}>
        <h1>Hi, I'm [Your Name]</h1>
        <p>
          I am a [Your profession] with [years] years of experience. I am passionate
          about [your passion].
        </p>
      </div>
    </section>
  );
};

export default Experience;

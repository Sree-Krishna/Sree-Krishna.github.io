import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {

  return (
    <section id="skills-section" className={styles.skills}>
      <h2>Skills</h2>
      <div>Programming : Python, R, Java, C, C++, MATLAB</div>
      <div>Data Science & ML : Pytorch, TensorFlow, NumPy, Pandas, Scikit-Learn, NLTK, Matplotlib, Plotly</div>
      <div>Web & Database : Angular, Spring, JavaScript, HTML5, CSS, Git, SQL, PostgreSQL</div>
      <div>Tools & Technologies : AWS, Tableau, PySpark, TeamCity, Jenkins, Terraform, MS Excel</div>
    </section>
  );
};

export default Skills;

import React, { useState } from 'react';
import styles from './Skills.module.css';

const iconsSkills = [[
  // Replace these with your actual icon data (names, paths, etc.)
  { name: 'Airflow', path: '/images/skills/airflow.svg' },
  { name: 'TeamCity', path: '/images/skills/teamcity.svg' },
  { name: 'Terraform', path: '/images/skills/terraform.svg' },
  { name: 'PyCharm', path: '/images/skills/PyCHarm.svg' },
  { name: 'VS Code', path: '/images/skills/VScode.svg' },
  { name: 'Jenkins', path: '/images/skills/jenkins.svg' },
  { name: 'Jira', path: '/images/skills/jira.svg' },
  { name: 'Jupyter', path: '/images/skills/jupyter.svg' },
  { name: 'Docker', path: '/images/skills/docker.png' },
  { name: 'colab', path: '/images/skills/colab.svg' },
  { name: 'Anaconda', path: '/images/skills/Anaconda.svg' },
  { name: 'InteliiJ', path: '/images/skills/Intellij.svg' },
],
[
  // Replace these with your actual icon data (names, paths, etc.)
  { name: 'Python', path: '/images/skills/python.png' },
  { name: 'Java', path: '/images/skills/java.png' },
  { name: 'C++', path: '/images/skills/c-plus-plus.svg' },
  { name: 'Angular', path: '/images/skills/angular.svg' },
  { name: 'TypeScript', path: '/images/skills/typescript.png' },
  { name: 'React', path: '/images/skills/react.png' },
  { name: 'Streamlit', path: '/images/skills/streamlit.svg' },
  { name: 'Spring', path: '/images/skills/spring.svg' },
  { name: 'HTML5', path: '/images/skills/html.png' },
  { name: 'CSS', path: '/images/skills/css.png' },
  { name: 'JavaScript', path: '/images/skills/javascript-js.svg' }
],
[
  // Replace these with your actual icon data (names, paths, etc.)
  { name: 'TensorFlow', path: '/images/skills/tensorflow.svg' },
  { name: 'PyTorch', path: '/images/skills/PyTorch.svg' },
  { name: 'Numpy', path: '/images/skills/numpy.svg' },
  { name: 'Pandas', path: '/images/skills/pandas.svg' },
  { name: 'Scikit-Learn', path: '/images/skills/sk-learn.jpg' },
  { name: 'Matplotlib', path: '/images/skills/Matplotlib.svg' },
  { name: 'Tableau', path: '/images/skills/tableau.svg' },
  { name: 'PowerBI', path: '/images/skills/powerbi.svg' },
  { name: 'AWS', path: '/images/skills/aws.svg' },
  { name: 'SageMaker', path: '/images/skills/sagemaker.svg' },
  { name: 'PySpark', path: '/images/skills/apache_spark.svg' },
],
[
  // Replace these with your actual icon data (names, paths, etc.)
  { name: 'SQL', path: '/images/skills/mysql.png' },
  { name: 'PostgreSQL', path: '/images/skills/postgresql.svg' },
  { name: 'MongoDB', path: '/images/skills/mongodb-original.svg' },
  { name: 'ElasticDB', path: '/images/skills/elasticsearch.svg' },
  { name: 'Swagger', path: '/images/skills/swagger.svg' },
  { name: 'Postman', path: '/images/skills/postman.svg' },
  { name: 'Logstash', path: '/images/skills/logstash.svg' },
  { name: 'GraphQL', path: '/images/skills/graphql.svg' },
  { name: 'FastAPI', path: '/images/skills/fastapi.svg' },
]];


const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleLeftArrowClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleRightArrowClick = () => {
    const newIndex = (currentIndex + 1);
    setCurrentIndex(newIndex);
  };

  const handleLinkClick = (tag) => {
    event.preventDefault();
    setCurrentIndex(tag);
  }


  return (
    <section id="skills-section" className={styles.skills}>
      <div className={styles.iconCarousel}>
        <button className={styles.arrow} onClick={handleLeftArrowClick} disabled={currentIndex === 0}>
          <img className={styles.arrowleft} src="/images/skills/left.svg" />
        </button>
        <div className={styles.iconContainer}>
          {iconsSkills[currentIndex].map((icon) => (
            <div key={icon.name}>
            <img src={icon.path} alt={icon.name} className={styles.icons} />
            <span>{icon.name}</span>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={handleRightArrowClick} disabled={currentIndex === 3}>
        <img className={styles.arrowright} src="/images/skills/right.svg" />
        </button>
      </div>
      <div className={styles.navigate}>
        <span className={`${currentIndex === 0 ? styles.active : ''}`}>
          <a href="#about-section" onClick={(event) => handleLinkClick(0)}>Developer Tools</a>
        </span>
        <span className={`${currentIndex === 1 ? styles.active : ''}`}>
          <a href="#about-section" onClick={(event) => handleLinkClick(1)}>Programming & Web Development</a>
        </span>
        <span className={`${currentIndex === 2 ? styles.active : ''}`}>
          <a href="#about-section" onClick={(event) => handleLinkClick(2)}>Data Science & Machine Learning</a>
        </span>
        <span className={`${currentIndex === 3 ? styles.active : ''}`}>
          <a href="#about-section" onClick={(event) => handleLinkClick(3)}>Database & API</a>
        </span>
      </div>
    </section>
  );
};

export default Skills;

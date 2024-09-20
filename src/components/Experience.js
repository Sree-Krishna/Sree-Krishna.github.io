import React, { useState, useRef, useEffect } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const expRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const milestones = [
    {
      id: 1,
      title: 'Data Scientist',
      year: '2024 – Present',
      company: 'Profile City, San Francisco, CA',
      details: 'Improved user engagement by 80% through statistical models and A/B testing. Reduced model deployment time by 50% with an MLOps initiative. Built a Gen AI application for candidate shortlisting with RAG-LLM.',
    },
    {
      id: 2,
      title: 'Data Science & ML Research Intern',
      year: 'Jan 2023 – Jul 2023',
      company: 'Lightforce Orthodontics, Boston, MA',
      details: 'Automated 5TB data processing using AWS Airflow. Reduced design costs by $50k annually with 3D CNN models on AWS SageMaker.',
    },
    {
      id: 3,
      title: 'Graduate Teaching Assistant',
      year: 'Sep 2022 – Dec 2023',
      company: 'Northeastern University, Boston, MA',
      details: 'Mentored 40 students in machine learning and data mining. Improved engagement by 20% through in-class activities.',
    },
    {
      id: 4,
      title: 'Data Engineer',
      year: 'May 2018 – Aug 2021',
      company: 'Wipro',
      details: 'Saved $200k annually and improved data retrieval by 25% with an ETL pipeline. Reduced processing time by 60% using GraphQL and SQL optimizations.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), 1000);
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
  }, []);

  return (
    <section id="experience-section" ref={expRef} className={styles.experience}>
      <div className={styles.timelineContainer}>
        <h1 className={`${styles.title} ${visible ? styles.fadeIn : ''}`}>EXPERIENCE</h1>
        <div className={styles.timeline}>
          {milestones.map((milestone) => (
            <div key={milestone.id} className={styles.milestone}>
              {/* <div className={styles.year}>{milestone.year}</div> */}
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.company}</p>
                  </div>
                  <div className={styles.flipCardBack}>
                    <p>{milestone.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

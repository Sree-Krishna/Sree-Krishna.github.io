import React from 'react';
import styles from './Projects.module.css'

const projects = [
  // Add your project details here: name, description, links, etc.
  {
    name: 'My Project 1',
    description: '...',
    link: '...',
  },
  // ...
];

const Projects = () => {
  return (
    <section id="projects-section" className={styles.projects}>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.link && <a href={project.link}>View Project</a>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

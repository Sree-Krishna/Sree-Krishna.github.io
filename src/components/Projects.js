import React from 'react';
import styles from './Projects.module.css';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const projects = [
  { name: 'IMAGE CAPTION GENERATION',
    image: '/images/projects/imagecaption.jpg',
    description: 'Generate descriptive captions for images using state-of-the-art deep learning techniques',
    link: 'https://github.com/Sree-Krishna/Image-Caption-Generation-AI',
    live: '',
    technology: ['Python', 'PyTorch', 'LSTM', 'Transformers']},
  { name: 'CROP YIELD PREDICTION',
    image: '/images/projects/cropyield.jpg',
    description: 'Crop yield prediction using remote sensing data and a thorough statistical study about crop production',
    link: 'https://github.com/Sree-Krishna/Crop-Yield-Prediction-Using-Remote-Sensing-Data',
    live: 'https://sites.google.com/view/crop-yield-analysis-prediction/home',
    technology: ['Python', 'PyTorch', 'LSTM', 'Transformers']},
  { name: 'DIEBETIC RETINOPATY CLASSIFICATION',
    image: '/images/projects/diebetic.jfif',
    description: 'Classified the images based on severity',
    link: 'https://github.com/Sree-Krishna/Diabetic-Blindness-Detection',
    live: '',
    technology: ['Python', 'PyTorch', 'LSTM', 'Transformers']},
  { name: 'AUTO SUGGEST NEXT WORD',
    image: '/images/projects/autosuggest.jfif',
    description: 'Generate the next word given a sentence',
    link: 'https://github.com/Sree-Krishna/Autosuggest-Next-Word-Custom-GPT',
    live: '',
    technology: ['Python', 'PyTorch', 'LSTM', 'Transformers']},
  { name: 'POLICY RECOMMENDATION',
    image: '/images/projects/policy.jfif',
    description: 'Generate agriculture policy based on remote sensing data, textual data and statistical data',
    live: 'https://policyrecommendation-cloudera.streamlit.app/',
    link: 'https://github.com/Sree-Krishna/Policy_Recommendation',
    technology: ['Python', 'PyTorch', 'LSTM', 'Transformers']},
  { name: 'MICROSOFT CONVERSATIONAL AGENT',
    image: '/images/projects/agent.jfif',
    description: 'Information retrevial based on BM25 model',
    link: 'https://github.com/Sree-Krishna/Microsoft-Conversational-Agent',
    live: '',
    technology: ['Python', 'PyTorch', 'LSTM', 'Transformers']},
];

const Projects = () => {
  return (
    <section id="projects-section" className={styles.projects}>
      <div className={styles.heading}>PROJECTS</div>
      <div className={styles.projectalign}>
          {projects.map((project) => (
            <div key={project.name} className={styles.projectdiv}>
              <img src={project.image} className={styles.projectImage} alt={project.name}/>
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.projectDescription}>{project.description}</span>
              <span className={styles.projectLink}>
                {/* {project.link && <a href={project.link}>Github</a>} */}
                <IconButton href={project.link} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                </IconButton>
                {project.live && 
                <IconButton href={project.live} target="_blank" rel="noopener noreferrer">
                <LiveTvIcon />
                </IconButton>}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
// import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
    </div>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route index path="/" element={<Home />} />  {/* Home component at root path */}
    //     <Route path="/" element={<About />} />  {/* About component at root path */}
    //     <Route path="/">  {/* Nested route for the last 3 components */}
    //       <Route path="experience" element={<Experience />} />  {/* Experience at nested path */}
    //       <Route path="skills" element={<Skills />} />  {/* Skills at nested path */}
    //       <Route path="projects" element={<Projects />} />  {/* Projects at nested path */}
    //       <Route path="contact" element={<Contact />} />  {/* Projects at nested path */}
    //     </Route>
    //   </Routes>
    // </Router>
  );
};

export default App;

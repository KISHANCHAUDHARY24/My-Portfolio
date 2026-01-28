// import { useRef, useState, useEffect } from 'react';

// import '../index.css'
// import AnimatedSection from './Portfolio.jsx';

//  export const ProjectCard = ({ project, delay, isLoaded }) => (
//   <AnimatedSection delay={delay} isLoaded={isLoaded}>
//     <div className="project-card">
//       <img src={project.image} alt={project.title} className="project-image" />
//       <div className="project-content">
//         <h3>{project.title}</h3>
//         <p>{project.description}</p>
//         <div className="project-technologies">
//           {project.technologies.map((tech, index) => (
//             <span key={index} className="tech-tag">{tech}</span>
//           ))}
//         </div>
//         <div className="project-links">
//           <a href={project.github} className="project-link">Code</a>
//           <a href={project.live || ''} className="project-link-live">Live Demo</a>
//         </div>
//       </div>
//     </div>
//   </AnimatedSection>
// );

// const ProjectsSection = ({ projects, isLoaded }) => (
//   <section id="projects" className="projects-section">
//     <AnimatedSection isLoaded={isLoaded}>
//       <h2>Featured Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <ProjectCard key={project.id} project={project} delay={200 + index * 100} isLoaded={isLoaded} />
//         ))}
//       </div>
//     </AnimatedSection>
//   </section>
// );



// export default  ProjectsSection;


// import react, { useRef, useState, useEffect } from 'react';
// import '../index.css';


// const ProjectsSection = ({ projects, isLoaded }) => {
//   // Inline ProjectCard definition
//   const ProjectCard = ({ project, delay, isLoaded }) => (
//     <AnimatedSection delay={delay} isLoaded={isLoaded}>
//       <div className="project-card">
//         <img src={project.image} alt={project.title} className="project-image" />
//         <div className="project-content">
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//           <div className="project-technologies">
//             {project.technologies.map((tech, index) => (
//               <span key={index} className="tech-tag">{tech}</span>
//             ))}
//           </div>
//           <div className="project-links">
//             <a href={project.github} className="project-link">Code</a>
//             <a href={project.live || ''} className="project-link-live">Live Demo</a>
//           </div>
//         </div>
//       </div>
//     </AnimatedSection>
//   );

//   return (
//     <section id="projects" className="projects-section">
//       <AnimatedSection isLoaded={isLoaded}>
//         <h2>Featured Projects</h2>
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               delay={200 + index * 100}
//               isLoaded={isLoaded}
//             />
//           ))}
//         </div>
//       </AnimatedSection>
//     </section>
//   );
// };

// export default ProjectsSection;
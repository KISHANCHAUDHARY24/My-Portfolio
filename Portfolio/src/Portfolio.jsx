


import { useState, useEffect } from 'react';
import './index.css';

// Data Objects
const personalInfo = {
  name: "Kishan Chaudhary",
  title: "Frontend Developer",
  location: "Kathmandu, Nepal",
  email: "kncy24@gmail.com",
  phone: "9746592097",
  bio: "As a front-end developer and AI enthusiast, I sculpt captivating web experiences with HTML, CSS, and JavaScript. My curiosity for artificial intelligence drives me to explore innovative algorithms, blending tech and creativity. I’m dedicated to crafting intuitive interfaces that spark connection and inspire progress."
};

const skills = {
  languages: ['JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  frameworks: ['React', 'Django'],
  libraries: ['Numpy', 'Pandas', 'Open Cv'],
  tools: ['Git'],
  other: ['IOT',]
};

const projects = [
  {
    id: 1,
    title: "MockUp Interview ",
    description: "",
    technologies: ['Python', 'Django', 'SQL', 'API', 'HTML', 'CSS'],
    image: "src/assets/Mockupinterview.png",
    github: "https://github.com/KISHANCHAUDHARY24/Mockup-Interview-Project",
    live: "#"
  },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description: "Collaborative project management tool with real-time updates",
  //   technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
  //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
  //   github: "#",
  //   live: "#"
  // },
  // {
  //   id: 3,
  //   title: "AI Chat Application",
  //   description: "Real-time chat app with AI integration and modern UI",
  //   technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'Vercel'],
  //   image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop",
  //   github: "#",
  //   live: "#"
  // }
];

// const education = [
//   {
//     degree: "Bachelor of Computer Science",
//     school: "University of Technology",
//     year: "2021",
//     gpa: "3.8/4.0"
//   }
// ];

// Utility Functions
const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

// Reusable Components
const Logo = ({ name }) => (
  <div className="logo">
    <img src="src/assets/logo.jpg" alt="logo" className='logo-image' />
    <span>{name}</span>
  </div>
);

const Header = ({ scrollToSection, toggleDarkMode, isDarkMode }) => (
  <header className="header">
    <div className="header-container">
      <Logo name={personalInfo.name} />
      <nav className="nav">
        <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
        <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {isDarkMode ? <img src='src/assets/MoonIcon.png' alt='Half Moon icon' className='Toogle-icon-moon
          '/> : <img src='src/assets/SunIcon.png' alt='Sun icon' className='Toogle-icon-sun' />}
        </button>
      </nav>
    </div>
  </header>
);

const Footer = ({ name }) => (
  <footer className="footer">
    <div className="footer-container">
      <Logo name={name} />
      <p className="footer-tagline">Building the future, one line of code at a time.</p>
      <div className="social-links">
        <a href="https://github.com/KISHANCHAUDHARY24" className="social-link"><img src="src\assets\github.png" alt=""  className = 'socialmedia-icon'/></a>
        <a href="https://www.linkedin.com/in/kishan-c-ab8450326/" className="social-link"><img src="src\assets\Linkedin.png" alt=""  className = 'socialmedia-icon'/></a>
        <a href="https://x.com/KRITATYAGHYA24?t=9m3j48WuHAM9Aw5Th4zb7w&s=09" className="social-link"><img src="src\assets\twitter.png" alt=""  className = 'socialmedia-icon'/></a>
      </div>
      <p>© 2025 {name}. All rights reserved.</p>
    </div>
  </footer>
);

const AnimatedSection = ({ children, delay = 0, isLoaded }) => (
  <div
    className={`animated-section ${isLoaded ? 'loaded' : ''}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

// Section Components
const HeroSection = ({ name, title, bio, scrollToSection, isLoaded }) => (
  <section className="hero-section">
   
    <AnimatedSection isLoaded={isLoaded}>
      <div className="hero-content">
          
        {/* <div className="hero-avatar">{name.split(' ').map(n => n[0]).join('')}</div> */}
        
        <h1>Hello, I'm <span className="gradient-text">{name}</span></h1>
        <p className="hero-title">{title}</p>
        <p className="hero-bio">{bio}</p>
        <div className="hero-actions">
          <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
            View My Work
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
            Get In Touch
          </button>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

const AboutSection = ({ bio, location, education, isLoaded }) => (
  <section id="about" className="about-section">
    <AnimatedSection isLoaded={isLoaded}>
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <h3>My Journey</h3>
          <p className='AboutUs-paragraph'>
              
              Hi, I’m Kishan Chaudhary I’m an AI student and full-stack developer with a passion for blending cutting-edge technology with real-world impact. My journey began with a fascination for AI’s potential to mimic human intelligence, leading me to master tools like Python, TensorFlow, and OpenCV, while also crafting seamless web experiences using HTML, CSS, JavaScript, and React.
          </p>    
          <p className='AboutUs-paragraph'>
              From building a mock interview platform to designing a sleek UI for a surgical instruments website during college projects, I’ve honed my skills in full-stack development, creating intuitive and dynamic applications. Currently, I’m diving into the world of IoT and computer vision, working on an innovative robotic hand that combines real-time vision processing with IoT connectivity—a project that feels like bringing science fiction to life.
          </p> 
          <p className='AboutUs-paragraph'>   
              I thrive on solving complex problems, whether it’s optimizing a neural network or designing a responsive webpage. When I’m not coding or tinkering with circuits, I’m exploring new ways to merge AI, IoT, and web development to create solutions that are both smart and user-friendly. My goal is to build technology that empowers people and shapes a smarter future. Let’s create something extraordinary together!
          </p>   
          
          <p className='AboutUs-paragraph'>When I'm not coding, you can find me exploring new technologies or contributing to open source.</p>
          <div className="contact-info">
            <span><img src="src/assets/location.png" alt="locaion Icon"  className = 'socialmedia-icon'/>{location}</span>
          </div>
        </div>
        {/* <div className="education-section">
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <span>🎓</span>
                <h4>{edu.degree}</h4>
              </div>
              <p>{edu.school} • {edu.year}</p>
              <p>GPA: {edu.gpa}</p>
            </div>
          ))}
        </div> */}
      </div>
    </AnimatedSection>
  </section>
);

const SkillCard = ({ title, skills, delay, isLoaded }) => (
  <AnimatedSection delay={delay} isLoaded={isLoaded}>
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const SkillsSection = ({ skills, isLoaded }) => (
  <section id="skills" className="skills-section">
    <AnimatedSection isLoaded={isLoaded}>
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        <SkillCard title="Programming Languages" skills={skills.languages} delay={200} isLoaded={isLoaded} />
        <SkillCard title="Frameworks" skills={skills.frameworks} delay={300} isLoaded={isLoaded} />
        <SkillCard title="Libraries" skills={skills.libraries} delay={400} isLoaded={isLoaded} />
        <SkillCard title="Tools & Platforms" skills={skills.tools} delay={500} isLoaded={isLoaded} />
        <SkillCard title="Other Skills" skills={skills.other} delay={600} isLoaded={isLoaded} />
      </div>
    </AnimatedSection>
  </section>
);




const ProjectCard = ({ project, delay, isLoaded }) => (
  <AnimatedSection delay={delay} isLoaded={isLoaded}>
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} className="project-link">Code</a>
          <a href='' className="project-link-live">Live Demo</a>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const ProjectsSection = ({ projects, isLoaded }) => (
  <section id="projects" className="projects-section">
    <AnimatedSection isLoaded={isLoaded}>
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={200 + index * 100} isLoaded={isLoaded} />
        ))}
      </div>
    </AnimatedSection>
  </section>
);

const ContactSection = ({ email, phone, location, isLoaded }) => (
  <section id="contact" className="contact-section">
    <AnimatedSection isLoaded={isLoaded}>
      <h2>Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-info-section">
          <h3>Let's Work Together</h3>
          <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
          <div className="contact-details">
            <div className="contact-item">
              <img src="src/assets/Email.png" alt="Email"  className = 'socialmedia-icon'/>
              <span>{email}</span>
            </div>
            <div className="contact-item">
               <img src="src/assets/call.png" alt="call icon"  className = 'socialmedia-icon'/>
              <span>{phone}</span>
            </div>
            <div className="contact-item">
               <img src="src/assets/location.png" alt="locaion Icon"  className = 'socialmedia-icon'/>
              <span>{location}</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/KISHANCHAUDHARY24" className="social-link"><img src="src\assets\github.png" alt=""  className = 'socialmedia-icon'/></a>
            <a href="https://www.linkedin.com/in/kishan-c-ab8450326/" className="social-link"><img src="src/assets/Linkedin.png" alt=""  className = 'socialmedia-icon' /></a>
            <a href="https://x.com/KRITATYAGHYA24?t=9m3j48WuHAM9Aw5Th4zb7w&s=09" className="social-link"><img src="src/assets/twitter.png" alt="" className = 'socialmedia-icon'/></a>
          </div>
        </div>
        <div className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-input" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-input" placeholder="your.email@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" className="form-input form-textarea" placeholder="Tell me about your project..."></textarea>
          </div>
          <button
            onClick={() => alert('Thank you for your message! I\'ll get back to you soon.')}
            className="btn btn-primary"
          >
            Send Message
          </button>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

// Main Portfolio Component
const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);  // Better: use functional update
  }
  return (
    

    <div data-theme={isDarkMode ? 'dark' : 'light'} className="portfolio">
  

      <Header
        scrollToSection={scrollToSection}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <main className="main-content">
        <HeroSection
          name={personalInfo.name}
          title={personalInfo.title}
          bio={personalInfo.bio}
          scrollToSection={scrollToSection}
          isLoaded={isLoaded}
        />
        <AboutSection
          bio={personalInfo.bio}
          location={personalInfo.location}
          // education={education}
          isLoaded={isLoaded}
        />
        <SkillsSection skills={skills} isLoaded={isLoaded} />
        <ProjectsSection projects={projects} isLoaded={isLoaded} />
        <ContactSection
          email={personalInfo.email}
          phone={personalInfo.phone}
          location={personalInfo.location}
          isLoaded={isLoaded}
        />
      </main>
      <Footer name={personalInfo.name} />
    </div>
  );
};

export default Portfolio;









// import { useState, useEffect } from 'react';
// import '../index.css';
// import '../App.css';

// // Data Objects
// const personalInfo = {
//   name: "Kishan Chaudhary",
//   title: "Frontend Developer",
//   location: "Kathmandu, Nepal",
//   email: "kncy24@gmail.com",
//   phone: "9746592097",
//   bio: "As a front-end developer and AI enthusiast, I sculpt captivating web experiences with HTML, CSS, and JavaScript. My curiosity for artificial intelligence drives me to explore innovative algorithms, blending tech and creativity. I'm dedicated to crafting intuitive interfaces that spark connection and inspire progress."
// };

// const skills = {
//   languages: ['JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS', 'SQL'],
//   frameworks: ['React', 'Django'],
//   libraries: ['Numpy', 'Pandas', 'Open Cv'],
//   tools: ['Git'],
//   other: ['IOT',]
// };

// const projects = [
//   {
//     id: 1,
//     title: "MockUp Interview ",
//     description: "",
//     technologies: ['Python', 'Django', 'SQL', 'API', 'HTML', 'CSS'],
//     image: "src/assets/Mockupinterview.png",
//     github: "https://github.com/KISHANCHAUDHARY24/Mockup-Interview-Project",
//     live: "#"
//   },
//   // {
//   //   id: 2,
//   //   title: "Task Management App",
//   //   description: "Collaborative project management tool with real-time updates",
//   //   technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
//   //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
//   //   github: "#",
//   //   live: "#"
//   // },
//   // {
//   //   id: 3,
//   //   title: "AI Chat Application",
//   //   description: "Real-time chat app with AI integration and modern UI",
//   //   technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'Vercel'],
//   //   image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop",
//   //   github: "#",
//   //   live: "#"
//   // }
// ];

// // const education = [
// //   {
// //     degree: "Bachelor of Computer Science",
// //     school: "University of Technology",
// //     year: "2021",
// //     gpa: "3.8/4.0"
// //   }
// // ];

// // Utility Functions
// const scrollToSection = (sectionId) => {
//   document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
// };

// // Reusable Components
// const Logo = ({ name }) => (
//   <div className="logo">
//     <img src="src/assets/logo.jpg" alt="logo" className='logo-image' />
//     <span>{name}</span>
//   </div>
// );

// const Header = ({ scrollToSection, toggleDarkMode, isDarkMode }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(prev => !prev);
//   };

//   const handleNavClick = (sectionId) => {
//     scrollToSection(sectionId);
//     setIsMenuOpen(false); // Close menu after navigation
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         <Logo name={personalInfo.name} />
        
//         {/* Desktop Navigation */}
//         <nav className="nav desktop-nav">
//           <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
//           <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
//           <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
//           <button onClick={toggleDarkMode} className="theme-toggle">
//             {isDarkMode ? <img src='src/assets/MoonIcon.png' alt='Half Moon icon' className='toggle-icon-moon'/> : <img src='src/assets/SunIcon.png' alt='Sun icon' className='toggle-icon-sun' />}
//           </button>
//         </nav>

//         {/* Mobile/Tablet Navigation */}
//         <div className="mobile-nav">
//           <button onClick={toggleDarkMode} className="theme-toggle mobile-theme-toggle">
//             {isDarkMode ? <img src='src/assets/MoonIcon.png' alt='Half Moon icon' className='toggle-icon-moon'/> : <img src='src/assets/SunIcon.png' alt='Sun icon' className='toggle-icon-sun' />}
//           </button>
//           <button 
//             className={`hamburger ${isMenuOpen ? 'active' : ''}`}
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <span className="hamburger-line"></span>
//             <span className="hamburger-line"></span>
//             <span className="hamburger-line"></span>
//           </button>
//         </div>

//         {/* Mobile Menu Overlay */}
//         <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
//           <nav className="mobile-menu">
//             <button onClick={() => handleNavClick('about')} className="mobile-nav-link">About</button>
//             <button onClick={() => handleNavClick('projects')} className="mobile-nav-link">Projects</button>
//             <button onClick={() => handleNavClick('contact')} className="mobile-nav-link">Contact</button>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// const Footer = ({ name }) => (
//   <footer className="footer">
//     <div className="footer-container">
//       <Logo name={name} />
//       <p className="footer-tagline">Building the future, one line of code at a time.</p>
//       <div className="social-links">
//         <a href="https://github.com/KISHANCHAUDHARY24" className="social-link"><img src="src\assets\github.png" alt=""  className = 'socialmedia-icon'/></a>
//         <a href="https://www.linkedin.com/in/kishan-c-ab8450326/" className="social-link"><img src="src\assets\Linkedin.png" alt=""  className = 'socialmedia-icon'/></a>
//         <a href="https://x.com/KRITATYAGHYA24?t=9m3j48WuHAM9Aw5Th4zb7w&s=09" className="social-link"><img src="src\assets\twitter.png" alt=""  className = 'socialmedia-icon'/></a>
//       </div>
//       <p>© 2025 {name}. All rights reserved.</p>
//     </div>
//   </footer>
// );

// const AnimatedSection = ({ children, delay = 0, isLoaded }) => (
//   <div
//     className={`animated-section ${isLoaded ? 'loaded' : ''}`}
//     style={{ transitionDelay: `${delay}ms` }}
//   >
//     {children}
//   </div>
// );

// // Section Components
// const HeroSection = ({ name, title, bio, scrollToSection, isLoaded }) => (
//   <section className="hero-section">
//     <AnimatedSection isLoaded={isLoaded}>
//       <div className="hero-content">
//         <h1>Hello, I'm <span className="gradient-text">{name}</span></h1>
//         <p className="hero-title">{title}</p>
//         <p className="hero-bio">{bio}</p>
//         <div className="hero-actions">
//           <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
//             View My Work
//           </button>
//           <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
//             Get In Touch
//           </button>
//         </div>
//       </div>
//     </AnimatedSection>
//   </section>
// );

// const AboutSection = ({ bio, location, education, isLoaded }) => (
//   <section id="about" className="about-section">
//     <AnimatedSection isLoaded={isLoaded}>
//       <h2>About Me</h2>
//       <div className="about-grid">
//         <div className="about-text">
//           <h3>My Journey</h3>
//           <p className='about-paragraph'>
//             Hi, I'm Kishan Chaudhary I'm an AI student and full-stack developer with a passion for blending cutting-edge technology with real-world impact. My journey began with a fascination for AI's potential to mimic human intelligence, leading me to master tools like Python, TensorFlow, and OpenCV, while also crafting seamless web experiences using HTML, CSS, JavaScript, and React.
//           </p>    
//           <p className='about-paragraph'>
//             From building a mock interview platform to designing a sleek UI for a surgical instruments website during college projects, I've honed my skills in full-stack development, creating intuitive and dynamic applications. Currently, I'm diving into the world of IoT and computer vision, working on an innovative robotic hand that combines real-time vision processing with IoT connectivity—a project that feels like bringing science fiction to life.
//           </p> 
//           <p className='about-paragraph'>   
//             I thrive on solving complex problems, whether it's optimizing a neural network or designing a responsive webpage. When I'm not coding or tinkering with circuits, I'm exploring new ways to merge AI, IoT, and web development to create solutions that are both smart and user-friendly. My goal is to build technology that empowers people and shapes a smarter future. Let's create something extraordinary together!
//           </p>   
          
//           <p className='about-paragraph'>When I'm not coding, you can find me exploring new technologies or contributing to open source.</p>
//           <div className="contact-info">
//             <span><img src="src/assets/location.png" alt="location Icon"  className = 'socialmedia-icon'/>{location}</span>
//           </div>
//         </div>
//       </div>
//     </AnimatedSection>
//   </section>
// );

// const SkillCard = ({ title, skills, delay, isLoaded }) => (
//   <AnimatedSection delay={delay} isLoaded={isLoaded}>
//     <div className="skill-card">
//       <h3>{title}</h3>
//       <div className="skill-tags">
//         {skills.map((skill, index) => (
//           <span key={index} className="skill-tag">{skill}</span>
//         ))}
//       </div>
//     </div>
//   </AnimatedSection>
// );

// const SkillsSection = ({ skills, isLoaded }) => (
//   <section id="skills" className="skills-section">
//     <AnimatedSection isLoaded={isLoaded}>
//       <h2>Skills & Technologies</h2>
//       <div className="skills-grid">
//         <SkillCard title="Programming Languages" skills={skills.languages} delay={200} isLoaded={isLoaded} />
//         <SkillCard title="Frameworks" skills={skills.frameworks} delay={300} isLoaded={isLoaded} />
//         <SkillCard title="Libraries" skills={skills.libraries} delay={400} isLoaded={isLoaded} />
//         <SkillCard title="Tools & Platforms" skills={skills.tools} delay={500} isLoaded={isLoaded} />
//         <SkillCard title="Other Skills" skills={skills.other} delay={600} isLoaded={isLoaded} />
//       </div>
//     </AnimatedSection>
//   </section>
// );

// const ProjectCard = ({ project, delay, isLoaded }) => (
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
//           <a href='' className="project-link-live">Live Demo</a>
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

// const ContactSection = ({ email, phone, location, isLoaded }) => (
//   <section id="contact" className="contact-section">
//     <AnimatedSection isLoaded={isLoaded}>
//       <h2>Get In Touch</h2>
//       <div className="contact-grid">
//         <div className="contact-info-section">
//           <h3>Let's Work Together</h3>
//           <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
//           <div className="contact-details">
//             <div className="contact-item">
//               <img src="src/assets/Email.png" alt="Email"  className = 'socialmedia-icon'/>
//               <span>{email}</span>
//             </div>
//             <div className="contact-item">
//                <img src="src/assets/call.png" alt="call icon"  className = 'socialmedia-icon'/>
//               <span>{phone}</span>
//             </div>
//             <div className="contact-item">
//                <img src="src/assets/location.png" alt="location Icon"  className = 'socialmedia-icon'/>
//               <span>{location}</span>
//             </div>
//           </div>
//           <div className="social-links">
//             <a href="https://github.com/KISHANCHAUDHARY24" className="social-link"><img src="src\assets\github.png" alt=""  className = 'socialmedia-icon'/></a>
//             <a href="https://www.linkedin.com/in/kishan-c-ab8450326/" className="social-link"><img src="src/assets/Linkedin.png" alt=""  className = 'socialmedia-icon' /></a>
//             <a href="https://x.com/KRITATYAGHYA24?t=9m3j48WuHAM9Aw5Th4zb7w&s=09" className="social-link"><img src="src/assets/twitter.png" alt="" className = 'socialmedia-icon'/></a>
//           </div>
//         </div>
//         <div className="contact-form">
//           <div className="form-group">
//             <label>Name</label>
//             <input type="text" className="form-input" placeholder="Your Name" />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" className="form-input" placeholder="your.email@example.com" />
//           </div>
//           <div className="form-group">
//             <label>Message</label>
//             <textarea rows="5" className="form-input form-textarea" placeholder="Tell me about your project..."></textarea>
//           </div>
//           <button
//             onClick={() => alert('Thank you for your message! I\'ll get back to you soon.')}
//             className="btn btn-primary"
//           >
//             Send Message
//           </button>
//         </div>
//       </div>
//     </AnimatedSection>
//   </section>
// );

// // Main Portfolio Component
// const Portfolio = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode(prev => !prev);
//   };

//   return (
//     <div data-theme={isDarkMode ? 'dark' : 'light'} className="portfolio">
//       <Header
//         scrollToSection={scrollToSection}
//         toggleDarkMode={toggleDarkMode}
//         isDarkMode={isDarkMode}
//       />
//       <main className="main-content">
//         <HeroSection
//           name={personalInfo.name}
//           title={personalInfo.title}
//           bio={personalInfo.bio}
//           scrollToSection={scrollToSection}
//           isLoaded={isLoaded}
//         />
//         <AboutSection
//           bio={personalInfo.bio}
//           location={personalInfo.location}
//           // education={education}
//           isLoaded={isLoaded}
//         />
//         <SkillsSection skills={skills} isLoaded={isLoaded} />
//         <ProjectsSection projects={projects} isLoaded={isLoaded} />
//         <ContactSection
//           email={personalInfo.email}
//           phone={personalInfo.phone}
//           location={personalInfo.location}
//           isLoaded={isLoaded}
//         />
//       </main>
//       <Footer name={personalInfo.name} />
//     </div>
//   );
// };

// export default Portfolio;
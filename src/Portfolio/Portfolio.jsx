import { useRef, useState, useEffect } from 'react';
import '../index.css';
import { personalInfo, skills, projects } from './Data.jsx';



import LogoSvg from '../assets/K.svg';
import GitHubIcon from '../assets/github.png';
import LinkedinIcon from '../assets/Linkedin.png';
import TwitterIcon from '../assets/twitter.png';
import MoonIcon from '../assets/MoonIcon.png';
import SunIcon from '../assets/SunIcon.png';
import MyPicture from '../assets/MyPicture.jpg';
import LocationIcon from '../assets/location.png';
import EmailIcon from '../assets/Email.png';
import CallIcon from '../assets/call.png';





// Utility Functions
const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

// Reusable Components
const Logo = ({ name }) => (
  <div className="logo">
    <a href="#home" className="logo-link">
      <img src={LogoSvg} alt="logo" className="logo-image" />
      <span className="logo-name">{name}</span>
    </a>
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
        <button onClick={() => alert('Blogs coming soon')} className="nav-link">Blogs</button>
      </nav>
      <nav className="side-nav-social-link-container">
        <a href="https://github.com/KISHANCHAUDHARY24" className="side-nav-social-link">
          <img src={GitHubIcon} alt="GitHub" className="side-nav-social-link-img" />
        </a>
        <a href="https://www.linkedin.com/in/kishan-c-ab8450326/" className="side-nav-social-link">
          <img src={LinkedinIcon} alt="LinkedIn" className="side-nav-social-link-img" />
        </a>
        <a href="https://x.com/KRITATYAGHYA24?t=9m3j48WuHAM9Aw5Th4zb7w&s=09" className="side-nav-social-link">
          <img src={TwitterIcon} alt="Twitter" className="side-nav-social-link-img" />
        </a>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {isDarkMode ? (
            <img src={MoonIcon} alt="Half Moon icon" className="toggle-icon-moon" />
          ) : (
            <img src={SunIcon} alt="Sun icon" className="toggle-icon-sun" />
          )}
        </button>
      </nav>
    </div>
  </header>
);

const Footer = ({ name }) => (
  <footer className="footer">
    <div className="footer-container">
      {/* <Logo className='logo-name-footer' name={name} /> */}
      <p className="footer-tagline">Building the future, one line of code at a time.</p>
      <div className="social-links">
        <a href="https://github.com/KISHANCHAUDHARY24" className="social-link">
          <img src={GitHubIcon} alt="GitHub" className="socialmedia-icon" />
        </a>
        <a href="https://www.linkedin.com/in/kishan-c-ab8450326/" className="social-link">
          <img src={TwitterIcon} alt="LinkedIn" className="socialmedia-icon" />
        </a>
        <a href="https://x.com/KRITATYAGHYA24?t=9m3j48WuHAM9Aw5Th4zb7w&s=09" className="social-link">
          <img src={TwitterIcon} alt="Twitter" className="socialmedia-icon" />
        </a>
      </div>
      <p className="footer-tagline">© 2025 {name}. All rights reserved.</p>
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

// HeroSection Component
const HeroSection = ({ name, title, bio, scrollToSection, isLoaded }) => (
  <section className="hero-section">
    <AnimatedSection isLoaded={isLoaded}>
      <div className="hero-main-container">
        <div className="hero-content">
          <h1  className="gradient-text">
            Hello, I'm <span className="gradient-text">{name}</span>
          </h1>
          <p className="hero-title">{title}</p>
          <p className="hero-bio">{bio}</p>
          <div className="hero-actions">
            <a
              href="Kishan-Chaudhary-FlowCV-Resume-20250404 (1)-1.pdf (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-section"
            >
              Download CV
            </a>
            <button onClick={() => scrollToSection('contact')} className="btn-hero-section">
              Get In Touch
            </button>
          </div>
        </div>
        <div className="my-picture-container">
          <div className='pic-container-ring'>
            <img src={MyPicture} alt="My picture" className="my-picture" />
          </div>
          
        </div>


     

        
      </div>
    </AnimatedSection>
  </section>
);



const AboutSection = ({ bio, location, isLoaded }) => (
  <section id="about" className="about-section">
    <AnimatedSection isLoaded={isLoaded}>
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <h3>My Journey</h3>
          <p className="AboutUs-paragraph">
           I am a Python-focused Developer and Aspiring Data Scientist with a strong foundation in data analysis, backend development, and scalable application design. My work revolves around transforming raw data into meaningful insights and building reliable backend systems that power real-world applications.
          </p>
          <p className="AboutUs-paragraph">
            I have hands-on experience with Python for data processing and analytics, using libraries such as NumPy, Pandas, Matplotlib, and Scikit-learn to clean data, perform analysis, and build machine learning models. I also work with TensorFlow and OpenCV, enabling me to explore deep learning and computer vision–based solutions.
          </p>
          <p className="AboutUs-paragraph">
           On the backend side, I develop robust web applications using Django, REST APIs, and SQL-based databases, ensuring secure data handling and efficient system performance. I am comfortable working across the stack with JavaScript, TypeScript, React, HTML, and CSS, allowing seamless integration between frontend interfaces and backend logic.
          </p>
          <p className="AboutUs-paragraph">I follow best practices in version control (Git), structured coding, and modular design, and I enjoy solving complex problems that sit at the intersection of data, systems, and software engineering. My goal is to contribute as a Data Scientist or Python Backend Developer, where I can apply data-driven thinking to build impactful and scalable solutions.</p>
          <div className="contact-info">
            <span>
              <img src="src/assets/location.png" alt="location Icon" className="socialmedia-icon" />
              {location}
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

// SkillCard Component
const SkillCard = ({ title, skills, delay, isLoaded }) => (
  <AnimatedSection delay={delay} isLoaded={isLoaded}>
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-tag">{skill.name}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

// SkillsSection Component
const SkillsSection = ({ skills, isLoaded }) => (
  <section id="skills" className="skills-section">
    <AnimatedSection isLoaded={isLoaded}>
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        <SkillCard title="Programming Languages" skills={skills.languages} delay={200} isLoaded={isLoaded} />
        <SkillCard title="Frameworks" skills={skills.frameworks} delay={100} isLoaded={isLoaded} />
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
          <a href={'projects'} className="project-link-live">Live Demo</a>
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
//               <img src="src/assets/Email.png" alt="Email" className="socialmedia-icon" />
//               <span>{email}</span>
//             </div>
//             <div className="contact-item">
//               <img src="src/assets/call.png" alt="Call icon" className="socialmedia-icon" />
//               <span>{phone}</span>
//             </div>
//             <div className="contact-item">
//               <img src="src/assets/location.png" alt="Location Icon" className="socialmedia-icon" />
//               <span>{location}</span>
//             </div>
//           </div>
//           <div className="social-links">
//             <a href="https://github.com/KISHANCHAUDHARY24" className="social-link">
//               <img src="src/assets/github.png" alt="GitHub" className="socialmedia-icon" />
//             </a>
//             <a href="https://www.linkedin.com/in/kishan-c-ab8450326/" className="social-link">
//               <img src="src/assets/Linkedin.png" alt="LinkedIn" className="socialmedia-icon" />
//             </a>
//             <a href="https://x.com/KRITATYAGHYA24?t=9m3j48WuHAM9Aw5Th4zb7w&s=09" className="social-link">
//               <img src="src/assets/twitter.png" alt="Twitter" className="socialmedia-icon" />
//             </a>
//           </div>
//         </div>
//         <div className="contact-form">
//           <div className="form-group">
//             <label>Name</label>
//             <input type="text" className="form-input" placeholder="Your Name" required />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" className="form-input" placeholder="your.email@example.com" required />
//           </div>
//           <div className="form-group">
//             <label>Message</label>
//             <textarea
//               rows="5"
//               className="form-input form-textarea"
//               placeholder="Tell me about your project..."
//               required
//             ></textarea>
//           </div>
//           <button
//             onClick={() => alert("Thank you for your message! I'll get back to you soon.")}
//             className="btn btn-primary"
//           >
//             Send Message
//           </button>
//         </div>
//       </div>
//     </AnimatedSection>
//   </section>
// );








const CustomModal = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* onClick={onClose} allows clicking outside to close */}
      <div 
        className={`modal-content ${type === 'error' ? 'modal-error' : 'modal-success'}`}
        onClick={e => e.stopPropagation()} // Prevents closing when clicking the box itself
      >
        <span className="modal-icon">
          {type === 'error' ? 'ℹ️' : '✅'}
        </span>
        <h3>{type === 'error' ? 'Action Required' : 'Message Received'}</h3>
        <p>
          {type === 'error' 
            ? 'Please complete all fields to send your message.' 
            : 'Thank you for reaching out. I will get back to you shortly.'}
        </p>
        <button onClick={onClose} className="btn btn-primary">
          Confirm
        </button>
      </div>
    </div>
  );
};




const ContactSection = ({ email, phone, location, isLoaded }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [modal, setModal] = useState({ isOpen: false, type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setModal({ isOpen: true, type: 'error' });
      return;
    }

    try {
      // Replace YOUR_FORM_ID with your actual Formspree ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModal({ isOpen: true, type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Server Error. Please check your Formspree ID.");
      }
    } catch (error) {
      alert("Check your internet connection.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <CustomModal 
        isOpen={modal.isOpen} 
        type={modal.type} 
        onClose={() => setModal({ ...modal, isOpen: false })} 
      />
      
      <AnimatedSection isLoaded={isLoaded}>
        <h2>Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info-section">
            <h3>Let's Work Together</h3>
            <p>Fill out the form and I'll get back to you within 24 hours.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <img src="src/assets/Email.png" alt="Email" className="socialmedia-icon" />
                <span>{email}</span>
              </div>
              <div className="contact-item">
                <img src="src/assets/call.png" alt="Call icon" className="socialmedia-icon" />
                <span>{phone}</span>
              </div>
              <div className="contact-item">
                <img src="src/assets/location.png" alt="Location Icon" className="socialmedia-icon" />
                <span>{location}</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/KISHANCHAUDHARY24" className="social-link">
                <img src="src/assets/github.png" alt="GitHub" className="socialmedia-icon" />
              </a>
              <a href="https://www.linkedin.com/in/kishan-c-ab8450326/" className="social-link">
                <img src="src/assets/Linkedin.png" alt="LinkedIn" className="socialmedia-icon" />
              </a>
              <a href="https://x.com/KRITATYAGHYA24?t=9m3j48WuHAM9Aw5Th4zb7w&s=09" className="social-link">
                <img src="src/assets/twitter.png" alt="Twitter" className="socialmedia-icon" />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                className="form-input" 
                placeholder="Your Name" 
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                className="form-input" 
                placeholder="email@example.com" 
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="form-input form-textarea"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
};









// Main Portfolio Component
const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

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
        <AboutSection bio={personalInfo.bio} location={personalInfo.location} isLoaded={isLoaded} />
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
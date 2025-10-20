// import React, { useState } from 'react';
// import '../skill.css';
// import '../index.css';

// const SkillGalaxy = () => {
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   const skillCategories = {
//     programming: {
//       title: "Programming Language",
//       position: { top: "40%", left: "15%" },
//       centerColor: "#000000",
//       skills: [
//         { name: "Python", icon: <img src="src/assets/Python-img.png" alt="" />, proficiency: 85, color: "#000000", angle: 0 },
//         { name: "JavaScript", icon: <img src="src/assets/javascript.png" alt="" /> , proficiency: 78, color: "#000000", angle: 72 },
//         { name: "TypeScript", icon: <img src="src/assets/typescript-img.png" alt="" />, proficiency: 72, color: "#000000", angle: 144 },
//         { name: "HTML", icon: <img src="src/assets/html-img.png" alt="" />, proficiency: 65, color: "#000000", angle: 216 },
//         { name: "CSS", icon: <img src="src/assets/css-img.png" alt="" />, proficiency: 65, color: "#000000", angle: 288 }
//       ]
//     },
//     frameworks: {
//       title: "Frameworks",
//       position: { top: "50%", right: "50%" },
//       centerColor: "#000000",
//       skills: [
//         { name: "React", icon: <img src="src/assets/react-img.png" alt="" />, proficiency: 82, color: "#000000", angle: 0 },
//         { name: "Django", icon: <img src="src/assets/django.png" alt="" />, proficiency: 75, color: "#000000", angle: 90 },
//       ]
//     },
//     Library: {
//       title: "Library",
//       position: { top: "40%", right: "15%" },
//       centerColor: "#000000",
//       skills: [
//         { name: "Numpy", icon: <img src="src/assets/numpy-img.png" alt="" />, proficiency: 82, color: "#000000", angle: 0 },
//         { name: "Pandas", icon :<img src="src/assets/pandas-img.png" alt="" />, proficiency: 75, color: "#000000", angle: 90 },
//         { name: "Open VC", icon: <img src="src/assets/opencv-img.png" alt="" />, proficiency: 68, color: "#000000", angle: 180 },
//         { name: "Node.js", icon: <img src="src/assets/Python-img.png" alt="" />, proficiency: 70, color: "#000000", angle: 270 }
//       ]
//     },
//     databases: {
//       title: "Databases",
//       position: { bottom: "10%", left: "20%" },
//       centerColor: "#000000",
//       skills: [
//         { name: "PostgreSQL", icon : <img src="src/assets/sql-img.png" alt="" />, proficiency: 70, color: "#000000", angle: 90 },
//       ]
//     },
//     tools: {
//       title: "Tools",
//       position: { bottom: "10%", right: "20%" },
//       centerColor: "#000000",
//       skills: [
//         { name: "Git", icon: <img src="src/assets/git-img.png" alt="" />, proficiency: 85, color: "#000000", angle: 0 },
//         { name: "AWS", icon: <img src="src/assets/.png" alt="" />, proficiency: 60, color: "#000000", angle: 90 },
//         { name: "Linux", icon: <img src="src/assets/linux-img.png" alt="" />, proficiency: 70, color: "#000000", angle: 180 },
//         { name: "VS Code", icon: <img src="src/assets/vscode-img.png" alt="" />, proficiency: 90, color: "#000000", angle: 270 }
//       ]
//     }
//   };

//   const getSkillColor = (proficiency) => {
//     if (proficiency >= 80) return "#000000"; // Green
//     if (proficiency >= 70) return "#facc15"; // Yellow
//     if (proficiency >= 60) return "#fb923c"; // Orange
//     return "#ef4444"; // Red
//   };

//   const getOrbitPosition = (angle, radius) => {
//     const radian = (angle * Math.PI) / 180;
//     return {
//       x: Math.cos(radian) * radius,
//       y: Math.sin(radian) * radius,
//     };
//   };

//   const SkillOrb = ({ skill, categoryKey, index }) => {
//     const isHovered = hoveredSkill === `${categoryKey}-${index}`;
//     const orbSize = Math.max(50, 40 + (skill.proficiency * 0.4));
//     const orbitRadius = 120;
//     const position = getOrbitPosition(skill.angle, orbitRadius);
    
//     return (
//       <div
//         className={`skill-orb ${isHovered ? 'hovered' : ''}`}
//         style={{
//           width: `${orbSize}px`,
//           height: `${orbSize}px`,
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           backgroundColor: skill.color,
//           borderColor: getSkillColor(skill.proficiency),
//           boxShadow: isHovered 
//             ? `0 0 40px ${skill.color}, 0 0 20px ${getSkillColor(skill.proficiency)}, inset 0 0 20px rgba(255,255,255,0.3)` 
//             : `0 0 20px ${skill.color}60, inset 0 0 10px rgba(255,255,255,0.2)`
//         }}
//         onMouseEnter={() => setHoveredSkill(`${categoryKey}-${index}`)}
//         onMouseLeave={() => setHoveredSkill(null)}
//       >
//         <div className="skill-orb-inner">
//           <div 
//             className="proficiency-ring" 
//             style={{
//               background: `conic-gradient(${getSkillColor(skill.proficiency)} ${skill.proficiency * 3.6}deg, transparent 0deg)`
//             }}
//           />
//           <span className="skill-icon">{skill.icon}</span>
//           <div 
//             className="orbit-trail" 
//             style={{
//               width: `${orbitRadius * 2}px`,
//               height: `${orbitRadius * 2}px`,
//               transform: `translate(-50%, -50%) translate(${-position.x}px, ${-position.y}px)`
//             }}
//           />
//           {isHovered && (
//             <div className="skill-tooltip">
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-percentage" style={{ color: getSkillColor(skill.proficiency) }}>
//                 {skill.proficiency}%
//               </div>
//               <div className="tooltip-arrow" />
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const CategoryCenter = ({ category, categoryKey }) => {
//     return (
//       <div
//         className={`category-center ${hoveredSkill === `center-${categoryKey}` ? 'hovered' : ''}`}
//         // style={{
//         //   backgroundColor: category.centerColor,
//         //   boxShadow: `0 0 30px ${category.centerColor}80, inset 0 0 20px rgba(255,255,255,0.2)`
//         // }}
//         onMouseEnter={() => setHoveredSkill(`center-${categoryKey}`)}
//         onMouseLeave={() => setHoveredSkill(null)}
//       >
//         <div className="category-title">
//           {category.title.split(' ').map((word, i) => (
//             <div key={i}>{word}</div>
//           ))}
//         </div>
        
//         {hoveredSkill === `center-${categoryKey}` && (
//           <div className="category-tooltip">
//             <div className="category-tooltip-title">{category.title}</div>
//             <div className="category-tooltip-count">
//               {category.skills.length} skill{category.skills.length !== 1 ? 's' : ''}
//             </div>
//             <div className="tooltip-arrow" />
//           </div>
//         )}
//       </div>
//     );
//   };

//   const CategoryCluster = ({ category, categoryKey }) => (
//     <div className="category-cluster" style={category.position}>
//       <CategoryCenter category={category} categoryKey={categoryKey} />
//       <div className="skills-container">
//         {category.skills.map((skill, index) => (
//           <SkillOrb
//             key={skill.name}
//             skill={skill}
//             categoryKey={categoryKey}
//             index={index}
//           />
//         ))}
//       </div>
//     </div>
//   );

//    return (
//     <div className="skill-galaxy">
//       {/* Stars background */}
//       <div className="stars-container">
//         {[...Array(150)].map((_, i) => (
//           <div
//             key={i}
//             className="star"
//             style={{
//               width: `${1 + Math.random() * 2}px`,
//               height: `${1 + Math.random() * 2}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0.3 + Math.random() * 0.7,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 4}s`
//             }}
//           />
//         ))}
//       </div>

//       // Galaxy center glow
//       // <div className="galaxy-center-glow" />

//       {/* Constellation lines */}
//       {/* <svg className="constellation-lines">
//         <defs>
//           <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
//             <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
//             <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
//           </linearGradient>
//         </defs>
//         <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" />
//         <line x1="20%" y1="80%" x2="80%" y2="80%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" />
//         <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" />
//         <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" />
//         <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="url(#connectionGradient)" strokeWidth="1" strokeDasharray="10,5" opacity="0.5" />
//         <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="url(#connectionGradient)" strokeWidth="1" strokeDasharray="10,5" opacity="0.5" />
//       </svg> */}
  
//       {/* Main title */}
//       <div className="main-title">
//         <h1 className="title-text">Skill and Technology</h1>
//       </div>

//       {/*  main /Skill categories / whole skill */}
//       {Object.entries(skillCategories).map(([key, category]) => (
//         <CategoryCluster key={key} category={category} categoryKey={key} />
//       ))}
// {/* 
//       Legend
//       <div className="legend">
//         <h4 className="legend-title">Proficiency Guide</h4>
//         <div className="legend-items">
//           <div className="legend-item">
//             <div className="legend-color expert"></div>
//             <span>Expert (80%+)</span>
//           </div>
//           <div className="legend-item">
//             <div className="legend-color proficient"></div>
//             <span>Proficient (70-79%)</span>
//           </div>
//           <div className="legend-item">
//             <div className="legend-color intermediate"></div>
//             <span>Intermediate (60-69%)</span>
//           </div>
//           <div className="legend-item">
//             <div className="legend-color beginner"></div>
//             <span>Beginner (Below 60%)</span>
//           </div>
//         </div>
//         <div className="legend-note">
//           Hover over skills for details
//         </div>
//       </div> */}

//       {/* Stats panel
//       <div className="stats-panel">
//         <h4 className="stats-title">Portfolio Stats</h4>
//         <div className="stats-items">
//           <div className="stats-item">
//             <span>Total Skills:</span>
//             <span className="stats-value total">16</span>
//           </div>
//           <div className="stats-item">
//             <span>Categories:</span>
//             <span className="stats-value categories">5</span>
//           </div>
//           <div className="stats-item">
//             <span>Avg. Proficiency:</span>
//             <span className="stats-value average">73%</span>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default SkillGalaxy;
import React, { useRef } from 'react';
import { projects as projectsData } from '../data/portfolioData';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `translateY(-10px) rotateX(${y * -8}deg) rotateY(${x * 8}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  };

  return (
    <div 
      className="project-card" 
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-top">
        <div className={`proj-bg ${project.colorClass}`}></div>
        <div className="project-icon-big">{project.icon}</div>
      </div>
      <div className="project-body">
        <div className="project-title">{project.title}</div>
        <div className="project-desc">{project.desc}</div>
        <div className="project-footer">
          <div className="project-stack">
            {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
          </div>
          <div className="project-links" style={{ display: 'flex', gap: '15px' }}>
            {project.github && (
              <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                GitHub →
              </a>
            )}
            {project.live && (
              <a href={project.live} className="project-link" target="_blank" rel="noreferrer">
                Live →
              </a>
            )}
            {project.customLink && (
              <a href={project.customLink.url} className={project.customLink.url === '#' ? "project-link disabled" : "project-link"} target={project.customLink.url === '#' ? "_self" : "_blank"} rel="noreferrer">
                {project.customLink.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-label">// 03. projects</div>
        <h2 className="section-title">What I've <span>Built</span></h2>
        <div className="projects-grid">
          {projectsData.map((p, i) => <ProjectCard project={p} key={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { skills as skillsData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-label">// 02. tech stack</div>
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="skills-grid">
          {skillsData.map((s, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-title">{s.title}</div>
              <div className="skill-sub">{s.sub}</div>
              <div className="skill-tags">
                {s.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

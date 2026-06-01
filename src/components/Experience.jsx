import React from 'react';
import { experiences as experiencesData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-label">// 04. experience</div>
        <h2 className="section-title">My <span>Journey</span></h2>
        <div className="timeline">
          {experiencesData.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"></div>
              <div className="tl-top">
                <div className="tl-role">{exp.role}</div>
                <div className="tl-date">{exp.date}</div>
              </div>
              <div className="tl-company">{exp.company}</div>
              <div className="tl-desc">{exp.desc}</div>
              <div className="tl-tags">
                {exp.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

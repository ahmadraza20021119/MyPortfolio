import React, { useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const cardRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const rx = ((e.clientY - r.top - r.height / 2) / r.height) * 18;
    const ry = ((e.clientX - r.left - r.width / 2) / r.width) * -18;
    cardRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0) rotateY(0)';
    }
  };

  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-label">// 01. about me</div>
            <h2 className="section-title">Who I <span>Am</span></h2>
            {personalInfo.aboutText.map((p, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
            ))}
            <div className="stat-row">
              {personalInfo.stats.map((s, index) => (
                <div className="stat" key={index}>
                  <span className="stat-num">{s.num}</span>
                  <div className="stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div 
            className="profile-card-wrap" 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
          >
            <div className="profile-card" ref={cardRef}>
              <div className="profile-avatar">
                {personalInfo.profileImage && !imageError ? (
                  <img 
                    src={personalInfo.profileImage} 
                    alt={personalInfo.name} 
                    onError={() => setImageError(true)} 
                  />
                ) : (
                  personalInfo.firstName.charAt(0) + personalInfo.lastName.charAt(0)
                )}
              </div>
              <h3>{personalInfo.name}</h3>
              <div className="role">// Software Engineer</div>
              <div className="profile-info">
                <div className="info-row"><span>📍</span>{personalInfo.location}</div>
                <div className="info-row"><span>🎓</span>B.Tech CSE · 2022–2026 · CGPA {personalInfo.cgpa}</div>
                <div className="info-row"><span>📧</span>{personalInfo.email}</div>
                <div className="info-row"><span>🔗</span>{personalInfo.linkedin.replace('https://', '')}</div>
                <div className="info-row"><span>💻</span>{personalInfo.github.replace('https://', '')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

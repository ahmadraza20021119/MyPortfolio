import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-inner">
          <span className="section-label">// 06. contact</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <a href={`mailto:${personalInfo.email}`} className="contact-email">{personalInfo.email}</a>
          <div className="socials">
            <a href={personalInfo.linkedin} className="social-link" target="_blank" rel="noreferrer">
              <span>in</span> LinkedIn
            </a>
            <a href={personalInfo.github} className="social-link" target="_blank" rel="noreferrer">
              <span>&lt;/&gt;</span> GitHub
            </a>
            <a href="https://wanderlust-j5f2.onrender.com/listings" className="social-link" target="_blank" rel="noreferrer">
              <span>🌐</span> Live Project
            </a>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">Say Hello →</a>
        </div>
      </section>
      
      <footer>
        <p>Designed & Built by {personalInfo.name} &nbsp;·&nbsp; {personalInfo.location} &nbsp;·&nbsp; 2026</p>
      </footer>
    </>
  );
};

export default Contact;

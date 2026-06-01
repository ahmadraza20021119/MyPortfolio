import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-tag">// {personalInfo.role}</div>
        <h1 className="hero-name">
          <div>{personalInfo.firstName}</div>
          <div className="outline glitch" data-text={personalInfo.lastName}>{personalInfo.lastName}</div>
        </h1>
        <p className="hero-tagline">
          Building scalable web experiences with the <strong style={{ color: 'var(--accent)' }}>MERN stack</strong>.<br/>
          Research presenter @ ICCET 2026. 6 GitHub projects. Based in {personalInfo.location}
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#certificates" className="btn btn-outline">Certificates</a>
          <a href="#contact" className="btn btn-outline">Contact</a>
        </div>
      </div>
      <div className="hero-3d">
        <div className="orbit-ring ring1"></div>
        <div className="orbit-ring ring2"></div>
        <div className="orbit-ring ring3"></div>
        <div className="cube">
          <div className="face front">MERN</div>
          <div className="face back">React</div>
          <div className="face left">Node</div>
          <div className="face right">Mongo</div>
          <div className="face top">JS</div>
          <div className="face bot">APIs</div>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;

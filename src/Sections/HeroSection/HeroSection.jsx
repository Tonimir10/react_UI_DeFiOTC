// src/components/Hero.js
import React from 'react';
import './HeroSection.css';
import Button from '../../Componentes/Button/Button.jsx';
import { FaBars } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <nav className="hero-nav d-flex justify-content-between align-items-center mt-0 px-5 w-100">
          <div className="logo">OTCX</div>
          <div className="d-flex gap-2 justify-content-center align-items-center">
            <FaBars />
            <Button text="Request Early Access" onClick={() => {}} variant="primary" />
          </div>
        </nav>

        <div className="hero-content text-white text-center text-md-start">
          <h1 className="hero-title fw-bold">
            DEFI OTC TRADING FOR <span> </span>
            <span className="highlight">EVERYONE</span>
          </h1>
          <p className="hero-subtitle">Trade tokens off-market Without price impact or stippage</p>
          <div className="mt-4"></div>
          <div className="hero-buttons d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
            <Button text="Request Early Access" onClick={() => {}} variant="primary" />
            <Button text="Learn More" onClick={() => {}} variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

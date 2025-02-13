import React from "react";
import "../assets/HeroSection.css"; // ✅ Исправленный путь к CSS
import tokenImage from "../assets/images/token.png"; // ✅ Исправленный путь к изображению

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        THE CREATOR OF <span className="bold">NOTHING</span> IS <span className="bold">NO ONE</span>
      </h1>
      <p className="hero-text">
        This is a group of anonymous investors who got <span className="bold">ANYONE</span> to make this site and promote this project.
      </p>

      <div className="hero-content">
        <div className="hero-text-block">
          <h2 className="pitch-title">PITCH AN IDEA</h2>
          <p className="pitch-text">
            We have the power to do <span className="bold">EVERYTHING</span>. Our project is aimed at realizing your ideas. Just send it to us and we will contact you.
          </p>
          <button className="hero-button">SEND US</button>
        </div>
        <img src={tokenImage} alt="Token" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;

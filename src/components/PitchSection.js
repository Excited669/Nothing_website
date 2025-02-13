import React from "react";
import { motion } from "framer-motion";
import tokenImage from "../assets/images/token.png"; // ✅ Проверь путь
import "../assets/PitchSection.css"; // ✅ Проверь, что стили загружаются

const PitchSection = () => {
  console.log("PitchSection загружен!"); // ✅ Для отладки

  return (
    <div className="pitch-container">
      <h1 className="pitch-title">
        THE CREATOR OF <br /> <span className="bold">NOTHING</span> IS <span className="bold">NO ONE</span>
      </h1>
      <p className="pitch-text">
        This is a group of anonymous investors who got <span className="bold">ANYONE </span> 
         to make this site and promote this project.
      </p>

      <div className="pitch-content">
        <div className="pitch-left">
          <h2 className="pitch-subtitle">PITCH AN IDEA</h2>
          <p>
            We have the power to do <span className="bold">EVERYTHING.</span> 
            Our project is aimed at realizing your ideas. Just send it to us and we will contact you.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "black", color: "#ECE7DA" }}
            whileTap={{ scale: 0.95 }}
            className="pitch-button"
          >
            SEND US
          </motion.button>
        </div>

        {/* ✅ Анимация левитации монеты */}
        <motion.div 
          className="pitch-image-container"
          animate={{
            y: [0, -15, 0], // Движение вверх-вниз
          }}
          transition={{
            duration: 2, // Длительность анимации
            repeat: Infinity, // Повтор бесконечно
            ease: "easeInOut"
          }}
        >
          <img src={tokenImage} alt="Token" className="pitch-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default PitchSection;

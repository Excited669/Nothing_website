import React from "react";
import { motion } from "framer-motion";
import "../assets/FixedButtons.css"; // ✅ Стили для кнопок

const FixedButtons = () => {
  return (
    <div className="fixed-buttons">
      {/* Ссылка на X */}
      <motion.a 
        href="https://x.com/nothing17_17" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, backgroundColor: "black", color: "white" }}
        whileTap={{ scale: 0.9 }}
      >
        FOLLOW ON X
      </motion.a>

      {/* Ссылка на Telegram Chat */}
      <motion.a 
        href="https://t.me/nonexistenproject" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, backgroundColor: "black", color: "white" }}
        whileTap={{ scale: 0.9 }}
      >
        JOIN TG CHAT
      </motion.a>

      {/* Ссылка на Telegram Channel */}
      <motion.a 
        href="https://t.me/n0nexistentchat" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, backgroundColor: "black", color: "white" }}
        whileTap={{ scale: 0.9 }}
      >
        JOIN TG CHANNEL
      </motion.a>

      {/* Ссылка на ваш сайт (если нужно) */}
      <motion.a 
        href="https://yourwebsite.com" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, backgroundColor: "black", color: "white" }}
        whileTap={{ scale: 0.9 }}
      >
        Buy Token
      </motion.a>
    </div>
  );
};

export default FixedButtons;

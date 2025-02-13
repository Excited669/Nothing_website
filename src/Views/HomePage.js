import React from "react";
import { motion } from "framer-motion";
import FixedButtons from "../components/FixedButtons"; // ✅ Фиксированные кнопки наверху
import "../assets/HomePage.css"; // ✅ Стили
import PitchSection from "../components/PitchSection"; // ✅ Импорт новой секции

const storyData = [
  { title: "Nothing Universe", text: "About 15-17 billion years ago, EVERYTHING came into existence out of NOTHING. EVERYTHING that exists now is created by chance, and ideas are born out of NOTHING. We can help you make EVERYTHING out of NOTHING." },
  { title: "Create a Universe", text: "The project started by accident, the creators are NOBODY, but they have EVERYTHING. How did this happen? Simple. When you have nothing, you have nothing to lose, but you are forced to create. But when you have everything, you have a choice to keep creating or watch others create, and we chose to keep creating." },
  { title: "Future together", text: "We don’t reveal our identity. It won’t always be that way, but it can only be that way now. WE’RE NOBODY, GIVING YOU THE OPPORTUNITY TO HAVE EVERYTHING." },
  { title: "$NTHG", text: "Our token $NTHG(NOTHING) is a tool to popularize the project and the idea in general. Through token advertising campaign, we will make ourselves known in the cheapest way possible. Most of the tokens bought by the creators will be distributed among the users of the project." },
  { title: "Choice between envy and respect", text: "We envy those who have EVERYTHING and despise those who have NOTHING. You have a choice of who you want to be. We will try to help you. need a title" }
];

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Главный экран */}
      <div className="hero-section">
        <motion.h1 
          className="home-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NOTHING
        </motion.h1>

        <motion.p 
          className="home-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ALL OR NONE
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "black", color: "#ECE7DA" }}
          whileTap={{ scale: 0.95 }}
          className="home-button"
        >
          TOKEN
        </motion.button>
      </div>

      {/* Фиксированные кнопки под "TOKEN" */}
      <FixedButtons />

      {/* Раздел "OUR STORY" */}
      <div className="story-container">
        {/* Левая часть (OUR STORY) */}
        <div className="story-left">
          <h2><span>OUR</span> STORY</h2>
          <p>
            The idea of NOTHING is simple: everything comes from nothing. 
            We embrace the philosophy that creation begins where nothing exists. 
            This is more than a project; this is a movement.
          </p>
          <button className="home-button">
          <a 
      href="https://x.com/nothing17_17" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }} // Добавляем стиль
    >
      Follow on X
    </a>
  </button>
        </div>

        {/* Правая часть с блоками */}
        <div className="story-right">
          <div className="timeline"></div>

          {storyData.map((item, index) => (
            <motion.div 
              key={index} 
              className="story-box"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="circle"></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Вставляем PitchSection внизу */}
      <PitchSection />
    </div>
  );
};

export default HomePage;

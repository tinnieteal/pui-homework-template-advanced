import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menuitem from "../components/menuitem";

const beanItems = [
  {
    name: "robusta",
    caffeine: "High (2.2% to 2.7%)",
    origin: "Central and Western Africa",
    found: "Espresso blends, instant coffee",
    taste: "Strong, bold, and harsh",
    fact: "Robusta beans are more robust and resistant to pests and diseases, which makes them easier and cheaper to cultivate.",
    img: "assets/bean/robusta.jpeg",
  },
  {
    name: "arabica",
    caffeine: "Low(1.2% to 1.5%)",
    origin: "Yemen in the Arabian Peninsula",
    found: "Daily Specialty coffee",
    taste: "Sweet, smooth, and fruity",
    fact: "Arabica is widely used in a variety of coffee drinks due to their superior flavor and aroma. They are more sensitive to the environment, which makes them more expensive to cultivate.",
    img: "assets/bean/arabica.jpeg",
  },
  {
    name: "liberica",
    caffeine: "Medium (1.5% to 2.5%)",
    origin: "Liberia",
    found: "Philippines and Malaysia",
    taste: "Fruity, floral, and woody",
    fact: "Liberica beans are larger and more irregular in shape compared to Arabica and Robusta. Its flavor is robust, making it a unique choice for adventure-seeking coffee enthusiasts.",
    img: "assets/bean/liberica.jpeg",
  },
  {
    name: "excelsa",
    caffeine: "Medium (1.5% to 2.5%)",
    origin: "Southeast Asia",
    found: "Not commonly found as a single-origin coffee",
    fact: "Although Excelsa was once considered a distinct species, it's now often classified as a variety of Liberica.",
    img: "assets/bean/excelsa.jpeg",
  },
];

function Bean() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const item = beanItems[selectedIndex];

  return (
    <div className="home">
      <div className="homeicon" onClick={() => navigate("/home")}>
        <img src="assets/logo2.svg" alt="Logo" />
      </div>
      <div className="frame">
        {beanItems.map((item, index) => (
          <Menuitem
            key={index}
            name={item.name}
            isSelected={selectedIndex === index}
            select={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== -1 ? (
        <div className="content">
          <div>
            <div className="content-top-bar">
              <div
                className="btn btn-close"
                onClick={() => setSelectedIndex(-1)}
              >
                <span>Close</span>
              </div>
            </div>
            <div className="bean-header">
              <div className="bean-image">
                <img src={item.img} alt={`${item.name} Coffee Beans`} />
              </div>
              <h1>{item.name}</h1>
            </div>
            <div className="bean-content">
              <div className="bean-row">
                <div className="bean-cell">
                  <h3>Caffeine Level:</h3>
                  <p>{item.caffeine}</p>
                </div>
                <div className="bean-cell">
                  <h3>Origin:</h3>
                  <p>{item.origin}</p>
                </div>
              </div>
              <div className="bean-row">
                <div className="bean-cell">
                  <h3>Commonly Found In:</h3>
                  <p>{item.found}</p>
                </div>
                <div className="bean-cell">
                  <h3>Taste Profile:</h3>
                  <p>{item.taste}</p>
                </div>
              </div>
            </div>
            <div className="bean-content">
              <h3>Fun Fact:</h3>
              <p>{item.fact}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Bean;

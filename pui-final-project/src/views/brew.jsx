import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const brewItems = [
  {
    name: "expresso",
    procedure: [
      {
        title: "Grind Coffee",
        description:
          "Grind the coffee to a fine consistency, similar to table salt.",
        img: "assets/brewing/espresso-1.jpeg",
      },
      {
        title: "Dose and Tamp",
        description:
          "Dose the ground coffee into the portafilter (usually 18-20 grams for a double shot). Distribute it evenly and tamp it down firmly and levelly.",
        img: "assets/brewing/espresso-2.jpeg",
      },
      {
        title: "Preheat the Machine",
        description:
          "Run a shot of hot water through the machine to preheat it.",
        img: "assets/brewing/espresso-3.jpeg",
      },
      {
        title: "Pull the Shot",
        description:
          "Lock the portafilter into the machine and start the shot. A typical espresso shot is 25-30 seconds long.",
        img: "assets/brewing/espresso-4.jpeg",
      },
      {
        title: "Serve",
        description:
          "Serve the espresso immediately, or use it as a base for other drinks like lattes or cappuccinos.",
        img: "assets/brewing/espresso-5.jpeg",
      },
    ],
  },
];

function Brew() {
  const navigate = useNavigate();

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("li").forEach((el) => {
        el.classList.add("show");
      });
    }
  }, [isIntersecting]);

  return (
    <div className="home">
      <div className="homeicon" onClick={() => navigate("/home")}>
        <img src="assets/logo2.svg" alt="Logo" />
      </div>

      <div className="brew-timeline">
        <h1>Espresso Brewing</h1>
        <ul ref={ref}>
          {brewItems[0].procedure.map((item, index) => (
            <li key={index}>
              <div className="brew-step">
                <div className="brew-step-id">{index + 1}</div>
                <div className="brew-step-content">
                  <h3>{item.title} </h3>
                  <p>{item.description}</p>
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Brew;

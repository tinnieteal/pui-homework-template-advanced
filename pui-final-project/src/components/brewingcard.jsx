import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Brewingcard() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="brewingcard"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={() => navigate("/brew")}
    >
      {onHover ? (
        <img
          src="assets/home/brewing-onhover.svg"
          alt="Brewing Image On Hover"
        />
      ) : (
        <div>
          <div className="brewing-overlay-text">BREWING</div>
          <img src="assets/home/brewing-panel-bg.svg" alt="Bean Panel Image" />
        </div>
      )}
    </div>
  );
}

export default Brewingcard;

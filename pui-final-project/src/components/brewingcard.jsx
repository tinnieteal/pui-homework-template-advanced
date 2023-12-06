import React, { useState } from "react";

function Brewingcard() {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="brewingcard"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
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

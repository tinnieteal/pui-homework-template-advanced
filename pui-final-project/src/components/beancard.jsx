import React, { useState } from "react";

function Beancard() {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="beancard"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {onHover ? (
        <img src="assets/home/beans-onhover.svg" alt="Bean Image On Hover" />
      ) : (
        <div>
          <div className="beans-overlay-text">BEANS</div>
          <img src="assets/home/beans-panel-bg.svg" alt="Bean Panel Image" />
        </div>
      )}
    </div>
  );
}

export default Beancard;

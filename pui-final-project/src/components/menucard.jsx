import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Menucard() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="menucard"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={() => navigate("/menu")}
    >   
      {onHover ? (
        <img src="assets/home/menu-panel.svg" alt="Menu Image On Hover" />
      ) : (
        <div>
          {/* <div className="beans-overlay-text">BEANS</div> */}
          <img src="assets/home/menu-panel-bg.svg" alt="Menu Panel Image" />
        </div>
      )}
    </div>
  );
}

export default Menucard;
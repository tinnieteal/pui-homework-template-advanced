import Beancard from "../components/beancard";
import Brewingcard from "../components/brewingcard";
import { motion, useScroll, useSpring } from "framer-motion";
import Menucard from "../components/menucard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="wrap-layer">
      <Menucard />
      <div className="home-container-right">
        <div className="component-container">
          <Beancard />
        </div>
        <div className="home-container-right-bottom">
          <div
            className="component-container"
            onClick={() => navigate("/home")}
          >
            <Brewingcard />
          </div>
          <img src="assets/home/coffee-table.svg" alt="Coffee Table Image" />
        </div>
      </div>
      <div className="background-layer" width="100%" height="100%">
        <img src="assets/home/line-background.svg" alt="3D Lines" />
      </div>
    </div>
  );
}

export default Home;

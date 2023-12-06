import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, stagger } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

function Landing() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`home`);
  };

  return (
    <div>
      <div className="landing-container">
        <motion.img
          src="assets/landing/landing-graphic.svg"
          alt="Coffee House Illustration"
          initial={{ opacity: 0, y: -1000 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring", bounce: 0.8 },
          }}
        />
        <motion.div
          className="landing-textcontainer"
          initial={{ opacity: 0, x: 1000 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              type: "spring",
              bounce: 0.3,
              delay: 1,
            },
          }}
        >
          <p className="title-landing">WELCOME TO</p>
          <p className="subtitle-landing">The Coffee House</p>
          <div className="btn btn-one" onClick={routeChange}>
            <span>Enter →</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;

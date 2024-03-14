import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../images/hero5.png";
import heroImage1 from "../images/hero1.jpg";
import heroImage2 from "../images/hero2.jpg";
import heroImage3 from "../images/hero3.jpg";
import heroImage4 from "../images/hero4.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const heroBgStyles = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <header className="main__header" style={heroBgStyles}>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Fitness is a second power</h4>
          <h1>We want a healthier, stronger you.</h1>
          <p>
            Unleash Your Potential: Transform Your Body, Ignite Your Spirit,
            Conquer Your Goals
          </p>
          <Link to="/plans" className="btn lg">
            Book Now
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={heroImage} alt="hero image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Lewa część */}
      <div className="hero-left">
        <h1>Lorem Ipsum Dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Nam totam dolor ab deserunt reiciendis illum, voluptas, non voluptates vel molestiae molestias eligendi 
          quisquam qui enim laudantium ipsam accusamus asperiores officiis?
        </p>
        <button className="explore-btn">Explore</button>
      </div>

      {/* Prawa część */}
      <div className="hero-right">
        <video controls>
          <source src="/video.mp4" type="video/mp4" />
          Twój przeglądarka nie obsługuje wideo.
        </video>
      </div>
    </section>
  );
};

export default Hero;

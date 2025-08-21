import React from 'react';
import './AboutUsPage.css';

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-container">
      <h1>Poznaj Naszą Historię</h1>
      
      <div className="about-us-content">
        {/* Kolumna z wideo w formacie telefonu */}
        <div className="about-video-wrapper">
          <div className="phone-frame">
            <video 
              src="/video-about.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              aria-label="Krótki film prezentujący zespół lub produkt"
            >
              Twoja przeglądarka nie obsługuje wideo.
            </video>
          </div>
        </div>

        {/* Kolumna z tekstem */}
        <div className="about-text-content">
          <h2>Nasza Misja</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          </p>
          <h2>Nasza Wizja</h2>
          <p>
            Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
          </p>
          <p>
            Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Sorbi et per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
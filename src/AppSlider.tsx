import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

import appData from './apps.json';
import './AppSlider.css';
interface AppTileProps {
  slug: string;
  icon: string;
  title: string;
  description: string;
}

const AppTile: React.FC<AppTileProps> = ({ slug, icon, title, description }) => {
  // Dodajemy stan do śledzenia ładowania obrazka
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link to={`/app/${slug}`} className="app-tile-link">
      <div className="app-tile">
        <div className="app-icon-container">
          {/* Pokazuj placeholder tylko, gdy obrazek się ładuje */}
          {isLoading && <div className="app-icon-placeholder">✨</div>}
          
          <img 
            src={icon} 
            alt={`${title} icon`} 
            className="app-icon"
            // Ukryj obrazek, dopóki się nie załaduje
            style={{ display: isLoading ? 'none' : 'block' }}
            // Gdy obrazek się załaduje, ukryj placeholder
            onLoad={() => setIsLoading(false)}
            // W razie błędu, również przestań ładować (onError zniknie)
            onError={() => setIsLoading(false)}
          />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};


interface AppsSliderProps {
  title: string;
}

const AppsSlider: React.FC<AppsSliderProps> = ({ title }) => {
  // ... (logika slidera pozostaje bez zmian)
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(appData.length / itemsPerPage);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  
  const sliderStyle = { transform: `translateX(-${currentIndex * 100}%)` };

  return (
    <div className="apps-slider-wrapper">
      <h2>{title}</h2>
      <div className="apps-slider-container">
        <button className="slider-arrow prev" onClick={goToPrev} disabled={appData.length <= itemsPerPage}>‹</button>
        <div className="slider-overflow-container">
          <div className="apps-slider" style={sliderStyle}>
            {appData.map((app) => (
              <AppTile 
                key={app.id} 
                slug={app.slug}
                icon={app.icon}
                title={app.title} 
                description={app.opis_krotki} // Używamy opisu krótkiego
              />
            ))}
          </div>
        </div>
        <button className="slider-arrow next" onClick={goToNext} disabled={appData.length <= itemsPerPage}>›</button>
      </div>
    </div>
  );
};

export default AppsSlider;

import React, { useState } from 'react';
import './AppSlider.css';

// Przykładowe dane dla kafelków aplikacji
const appData = [
  { id: 1, icon: 'path/to/icon1.png', title: 'Aplikacja 1', description: 'Krótki opis funkcji i zalet aplikacji numer jeden.' },
  { id: 2, icon: 'path/to/icon2.png', title: 'Aplikacja 2', description: 'Opis drugiej aplikacji, która rewolucjonizuje rynek.' },
  { id: 3, icon: 'path/to/icon3.png', title: 'Aplikacja 3', description: 'Trzecia aplikacja, idealna do codziennego użytku.' },
  { id: 4, icon: 'path/to/icon4.png', title: 'Aplikacja 4', description: 'Czwarta propozycja dla wymagających użytkowników.' },
  { id: 5, icon: 'path/to/icon5.png', title: 'Aplikacja 5', description: 'Piąta aplikacja, która zaskoczy Cię swoją prostotą.' },
  { id: 6, icon: 'path/to/icon6.png', title: 'Aplikacja 6', description: 'Kolejna świetna aplikacja w naszym zestawieniu.' },
  { id: 7, icon: 'path/to/icon7.png', title: 'Aplikacja 7', description: 'Siódma aplikacja o niesamowitych możliwościach.' },
];

interface AppTileProps {
  icon: string;
  title: string;
  description: string;
}

const AppTile: React.FC<AppTileProps> = ({ icon, title, description }) => (
  <div className="app-tile">
    <div className="app-icon-container">
      {/* Użyj <img> jeśli masz prawdziwe ikony, w innym razie zostaw placeholder */}
      <img src={icon} alt={`${title} icon`} className="app-icon" onError={(e) => (e.currentTarget.style.display = 'none')} />
      <div className="app-icon-placeholder">✨</div>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

interface AppsSliderProps {
  title: string;
}

const AppsSlider: React.FC<AppsSliderProps> = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(appData.length / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  // Obliczamy transformację na podstawie aktualnego indeksu
  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div className="apps-slider-wrapper">
      <h2>{title}</h2>
      <div className="apps-slider-container">
        <button className="slider-arrow prev" onClick={goToPrev} disabled={appData.length <= itemsPerPage}>‹</button>
        <div className="slider-overflow-container">
          <div className="apps-slider" style={sliderStyle}>
            {appData.map((app) => (
              <AppTile key={app.id} {...app} />
            ))}
          </div>
        </div>
        <button className="slider-arrow next" onClick={goToNext} disabled={appData.length <= itemsPerPage}>›</button>
      </div>
    </div>
  );
};

export default AppsSlider;
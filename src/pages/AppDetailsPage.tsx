import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import appData from '../apps.json';
import './AppDetailsPage.css';

// --- POPRAWKA 1: Definiujemy propsy dla ikon, aby naprawić błąd TypeScript ---
interface IconProps {
  style?: React.CSSProperties; // Mówimy TS, że 'style' jest opcjonalnym propsem
}

const ShieldCheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

// Stosujemy zdefiniowane propsy do komponentu StarIcon
const StarIcon: React.FC<IconProps> = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
);

const AppDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const app = appData.find((app) => app.slug === slug);
  const [selectedImage, setSelectedImage] = useState(
    app && app.zdjecia.length > 0 ? app.zdjecia[0] : ''
  );

  if (!app) {
    return <div className="app-details-container not-found"><h2>Nie znaleziono aplikacji.</h2></div>;
  }

  return (
    <div className="app-details-container">
      <div className="app-header">
        <div className="app-icon-large">
            <img src={app.icon} alt={`${app.title} icon`} />
        </div>
       <div className="app-title-group">
          <h1>{app.title}</h1>

          {/* --- ZMIANA TUTAJ: Dodajemy kontener dla tagów --- */}
          <div className="tags-container">
              <span className="app-category">{app.kategoria}</span>
              {app.isTrusted && (
                  <div className="trust-badge">
                      <ShieldCheckIcon />
                      <span>Zweryfikowana i zaufana</span>
                  </div>
              )}
          </div>
          
      </div>
      </div>

      <div className="app-layout">
        <div className="app-gallery">
          {/* --- POPRAWKA 2: Przywracamy pełną zawartość galerii --- */}
          <h3>Galeria</h3>
          {app.zdjecia.length > 0 ? (
            <div className="image-gallery">
              <div className="main-image-container">
                <img src={selectedImage} alt="Wybrany zrzut ekranu" className="main-image"/>
              </div>
              <div className="thumbnail-container">
                {app.zdjecia.map((foto, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${selectedImage === foto ? 'active' : ''}`}
                    onClick={() => setSelectedImage(foto)}
                  >
                    <img src={foto} alt={`Miniaturka ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Brak zrzutów ekranu.</p>
          )}
        </div>

        <div className="app-info">
          {/* --- POPRAWKA 2: Przywracamy pełną zawartość sekcji info --- */}
          <h3>Opis</h3>
          <p>{app.opis_dlugi}</p>
          <h3>Pobierz</h3>
          <div className="download-links">
            {app.link1 && <a href={app.link1} className="download-btn" target="_blank" rel="noopener noreferrer">Pobierz (Link 1)</a>}
            {app.link2 && <a href={app.link2} className="download-btn secondary" target="_blank" rel="noopener noreferrer">Pobierz (Link 2)</a>}
          </div>
        </div>
      </div>

      {/* Ta sekcja była już poprawna */}
      <div className="app-extended-info">
        {app.geneza && (
          <div className="info-section">
            <h3>Geneza Aplikacji</h3>
            <p>{app.geneza}</p>
          </div>
        )}
        {app.bezpieczenstwo_info && (
            <div className="info-section">
                <h3><ShieldCheckIcon /> Informacje o bezpieczeństwie</h3>
                <p>{app.bezpieczenstwo_info}</p>
            </div>
        )}
        {app.opinie && app.opinie.length > 0 && (
          <div className="info-section reviews-section">
            <h3>Opinie użytkowników</h3>
            <div className="reviews-container">
              {app.opinie.map((opinia, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <h4>{opinia.autor}</h4>
                    <div className="star-rating">
                      {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon key={i} style={{ color: i < opinia.gwiazdki ? '#ffc107' : '#e0e0e0' }}/>
                      ))}
                    </div>
                  </div>
                  <p>"{opinia.tresc}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppDetailsPage;
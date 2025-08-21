import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import appData from '../apps.json';
import { SearchContext } from '../context/SearchContext';
import './AllAppsPage.css';

const AllAppsPage: React.FC = () => {
  // Pobieramy wpisaną frazę z naszego globalnego kontekstu
  const { searchTerm } = useContext(SearchContext);

  // Filtrujemy aplikacje na podstawie searchTerm
  const filteredApps = appData.filter(app => {
    const term = searchTerm.toLowerCase();
    return (
      app.title.toLowerCase().includes(term) ||
      app.kategoria.toLowerCase().includes(term)
    );
  });

  return (
    <div className="all-apps-container">
      <h1>Wszystkie programy</h1>
      <p>
        {filteredApps.length > 0
          ? `Znaleziono ${filteredApps.length} aplikacji pasujących do Twojego zapytania.`
          : 'Nie znaleziono aplikacji pasujących do Twojego zapytania.'}
      </p>

      <div className="apps-grid">
        {filteredApps.map(app => (
          <Link to={`/app/${app.slug}`} key={app.id} className="app-card-link">
            <div className="app-card">
              <img src={app.icon} alt={`${app.title} icon`} className="app-card-icon" />
              <h3>{app.title}</h3>
              <p>{app.opis_krotki}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllAppsPage;
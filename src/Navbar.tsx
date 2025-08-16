import React, { useState, useEffect } from 'react';
import './navbar.css'; // Upewnij się, że importujesz właściwy plik CSS
import { Link } from 'react-router-dom';
// Prosta ikona wyszukiwania (można zastąpić ikoną z biblioteki)
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efekt do obsługi scrollowania
  useEffect(() => {
    const handleScroll = () => {
      // Jeśli użytkownik przewinął więcej niż 50px, ustaw isScrolled na true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Dodaj nasłuchiwanie na zdarzenie scroll
    window.addEventListener('scroll', handleScroll);

    // Wyczyść nasłuchiwanie po odmontowaniu komponentu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-content">
        <a href="/" className="logo">
          Patchers.com
        </a>

        {/* Linki na desktop */}
        <div className="nav-links">
          <Link to="/">Strona Główna</Link>
          <Link to="/apps">Wszystkie programy</Link>
          <Link to="/about">O nas</Link>
          <Link to="/contact">Kontakt</Link>
        </div>

        {/* Wyszukiwarka */}
        <div className="search-container">
          <input type="text" placeholder="Szukaj aplikacji..." />
          <button className="search-btn">
            <SearchIcon />
          </button>
        </div>

        {/* Hamburger menu dla mobile */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </div>

      {/* Menu mobilne */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/">Strona Główna</Link>
          <Link to="/apps">Wszystkie programy</Link>
          <Link to="/about">O nas</Link>
          <Link to="/contact">Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
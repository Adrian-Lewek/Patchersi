import React from 'react';
import './Footer.css';

// Placeholder dla ikon. W przyszłości możesz użyć biblioteki jak 'react-icons'
// np. import { FaReddit, FaLinkedin, FaFacebook } from 'react-icons/fa';
const SocialIcon: React.FC<{ name: string }> = ({ name }) => (
  // Użyj pierwszą literę jako prosty placeholder
  <span>{name.charAt(0)}</span>
);

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* --- Kolumna 1: Informacje i Social Media --- */}
        <div className="footer-column about-column">
          <h4>AppHub</h4>
          <p>
            Twoje centrum bezpiecznych i zweryfikowanych aplikacji open-source.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Reddit" title="Reddit"><SocialIcon name="Reddit" /></a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn"><SocialIcon name="LinkedIn" /></a>
            <a href="#" aria-label="Facebook" title="Facebook"><SocialIcon name="Facebook" /></a>
            <a href="#" aria-label="Instagram" title="Instagram"><SocialIcon name="Instagram" /></a>
            <a href="#" aria-label="TikTok" title="TikTok"><SocialIcon name="TikTok" /></a>
          </div>
        </div>

        {/* --- Kolumna 2: Szybkie Linki --- */}
        <div className="footer-column links-column">
          <h4>Nawigacja</h4>
          <ul>
            <li><a href="#">Kontakt</a></li>
            <li><a href="#">Regulamin</a></li>
            <li><a href="#">Polityka Prywatności</a></li>
          </ul>
          <a href="#" className="buy-coffee-btn">
            Buy me a Coffee ☕
          </a>
        </div>

        {/* --- Kolumna 3: Newsletter i CTA --- */}
        <div className="footer-column newsletter-column">
          <h4>Zapisz się do newslettera</h4>
          <p>Otrzymuj informacje o nowościach i aktualizacjach prosto na maila.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Twój adres e-mail" />
            <button type="submit">Zapisz się</button>
          </form>
          <button className="idea-btn">Masz pomysł na aplikację?</button>
        </div>
      </div>

      {/* --- Dolna belka z prawami autorskimi --- */}
      <div className="footer-bottom">
        <p>© 2025 Patchers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
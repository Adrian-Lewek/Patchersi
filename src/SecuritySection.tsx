import React from 'react';
import './SecuritySection.css';

// Możesz tu użyć ikony z biblioteki, np. react-icons
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const SecuritySection: React.FC = () => {
  return (
    <section className="security-section">
      <div className="security-header">
        <ShieldIcon />
        <h2>Bezpieczeństwo jest naszym priorytetem</h2>
      </div>
      <p className="security-intro">
        Twoje zaufanie jest dla nas kluczowe. Dlatego każda aplikacja w naszym katalogu to oprogramowanie{' '}
        <span className="highlight-red">open-source</span>. Oznacza to, że jej kod jest publicznie dostępny do wglądu.
        Dodatkowo, wszystkie aplikacje są gruntownie{' '}
        <span className="highlight-red">zweryfikowane</span> przez niezależnych audytorów bezpieczeństwa.
      </p>

      <div className="warning-showcase">
        {/* Lewa strona - symulacja ostrzeżenia */}
        <div className="warning-visual">
          <h4>Przykład ostrzeżenia</h4>
          <div className="mock-window">
            <div className="mock-header">
              <span>AppInstaller</span>
              <span>_ ◻ X</span>
            </div>
            <div className="mock-content">
              <div className="mock-app-icon">⚠️</div>
              <div className="mock-app-details">
                <strong>Niebezpieczna Aplikacja</strong>
                <span>com.malware.example</span>
              </div>
              <div className="warning-banner">
                <p>Wykryto potencjalne zagrożenie! Ta aplikacja nie przeszła naszej weryfikacji bezpieczeństwa.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prawa strona - FAQ */}
        <div className="warning-faq">
          <h3>Co się stanie, gdy aplikacja jest niebezpieczna?</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus corrupti sint consequuntur..</p>
          
          <div className="faq-item">
            <strong>Pytanie: repellat facilis voluptatem reprehenderit atque sit"?</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis facere sed veniam doloremque fugit enim, quam nesciunt laudantium ab repellat facilis voluptatem reprehenderit atque sit, totam tempora ad magni quisquam.</p>
          </div>
          <div className="faq-item">
            <strong>Pytanie: Laboriosam unde quod quisquam, placeat dignissimos?</strong>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam unde quod quisquam, placeat dignissimos odit inventore, error, harum amet vero minima. Ipsam, neque? Animi, architecto necessitatibus eos fugit blanditiis dicta!.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
import React from 'react';
import './LegalPage.css'; // Używamy naszego nowego, wspólnego pliku stylów

const TermsPage: React.FC = () => {
  return (
    <div className="legal-container">
      <h1>Regulamin</h1>
      
      <h2>1. Postanowienia ogólne</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <h2>2. Definicje</h2>
      <ol>
        <li><strong>Usługodawca</strong> – Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li><strong>Użytkownik</strong> – Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li><strong>Serwis</strong> – Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
      </ol>

      <h2>3. Prawa i obowiązki</h2>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
      </p>
    </div>
  );
};

export default TermsPage;
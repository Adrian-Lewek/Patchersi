import React from 'react';
import './LegalPage.css'; // Tutaj również używamy tego samego pliku stylów

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="legal-container">
      <h1>Polityka Prywatności</h1>

      <h2>Kto jest administratorem Twoich danych?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      </p>

      <h2>Jakie dane przetwarzamy?</h2>
      <p>
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
      </p>
      <ul>
        <li>Dane podane w formularzu kontaktowym.</li>
        <li>Dane analityczne (anonimowe).</li>
        <li>Ciasteczka (cookies).</li>
      </ul>

      <h2>Twoje prawa</h2>
      <p>
        Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
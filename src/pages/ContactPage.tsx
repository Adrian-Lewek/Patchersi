import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  // Stan do przechowywania danych z formularza
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Funkcja do obsługi zmian w polach formularza
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Funkcja do obsługi wysłania formularza
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // W prawdziwej aplikacji tutaj wysłałbyś dane na serwer
    console.log('Dane formularza:', formData);
    alert('Dziękujemy za wiadomość! (To jest symulacja wysyłki)');
    // Wyczyszczenie formularza po wysłaniu
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Skontaktuj się z nami</h1>
      <p className="contact-intro">Masz pytanie, sugestię lub pomysł? Wypełnij formularz, a my postaramy się odpowiedzieć jak najszybciej.</p>

      <div className="contact-grid">
        {/* Kolumna z formularzem */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Twoje imię</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Twój e-mail</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Temat</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Wyślij wiadomość</button>
          </form>
        </div>

        {/* Kolumna z danymi kontaktowymi */}
        <div className="contact-details">
          <h2>Informacje kontaktowe</h2>
          <p>Możesz nas również znaleźć tutaj:</p>
          <div className="info-block">
            <strong>Email:</strong>
            <span>kontakt@apphub.com</span>
          </div>
          <div className="info-block">
            <strong>Telefon:</strong>
            <span>+48 123 456 789</span>
          </div>
          <div className="info-block">
            <strong>Adres:</strong>
            <span>ul. Wirtualna 1, 00-001 Warszawa, Polska</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
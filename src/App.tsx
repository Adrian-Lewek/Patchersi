import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './pages/HomePage'; // <-- Stworzymy ten komponent za chwilę
import AppDetailsPage from './pages/AppDetailsPage'; // <-- Stworzymy ten komponent
import AllAppsPage from './pages/AllAppsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app/:slug" element={<AppDetailsPage />} /> 
        <Route path="/apps" element={<AllAppsPage />} />
        <Route path="/about" element={<AboutUsPage />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/regulamin" element={<TermsPage />} /> 
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
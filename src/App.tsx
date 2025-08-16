import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './pages/HomePage'; // <-- Stworzymy ten komponent za chwilę
import AppDetailsPage from './pages/AppDetailsPage'; // <-- Stworzymy ten komponent

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app/:slug" element={<AppDetailsPage />} /> 

      </Routes>
      <Footer />
    </>
  );
}

export default App;
import Navbar from './Navbar';
import Hero from './Hero';
import AppsSlider from './AppSlider';
import SecuritySection from './SecuritySection';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppsSlider title="Popularne Aplikacje" />
      <AppsSlider title="Nowości" />
      <SecuritySection />
      <Footer />
    </>
  );
}

export default App;
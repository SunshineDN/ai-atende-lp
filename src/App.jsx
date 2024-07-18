import { useEffect } from 'react';
import Additional from './components/Additional/Additional';
import Benefits from './components/Benefits/Benefits';
import Faq from './components/FAQ/Faq';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Plataform from './components/Plataform/Plataform';
import Range from './components/Range/Range';

function App() {
  useEffect(() => {
    // Adiciona um ouvinte de evento para o carregamento completo da página
    const handleLoad = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('load', handleLoad);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <Home />
      <Range />
      <Additional />
      <Plataform />
      <Benefits />
      <Feedbacks />
      <Faq />
      <Footer />
    </>
  );
}

export default App;

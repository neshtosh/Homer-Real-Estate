import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/companies/companies';
import './App.css';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import Getstarted from './components/Getstarted/Getstarted';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Video and content wrapper for Header + Hero */}
      <div className="video-wrapper">
        {/* Video background */}
        <div className="video-background">
          <video autoPlay loop muted onPlay={() => console.log('Video started playing')} onError={() => console.log('Video error')}>
            <source src="real estate final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay content */}
        <div className="overlay-content">
          <div className="White-gradient" />
          <Header />
          <Hero />
        </div>
      </div>

      {/* Rest of the page */}
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default App;

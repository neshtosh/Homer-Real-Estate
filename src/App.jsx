import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/companies/companies';
import './App.css';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import Getstarted from './components/Getstarted/Getstarted';
import Footer from './components/Footer/Footer';
import CreateListing from './components/CreateListing/CreateListing';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for effect
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="gradient-background-loader">
        <img src="/logo.png" alt="Loading Logo" className="loading-logo" />
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="video-wrapper">
                  <div className="video-background">
                    <video autoPlay loop muted onPlay>
                      <source src="real_estate_final.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="overlay-content">
                    <div className="White-gradient" />
                    <Header />
                    <Hero />
                  </div>
                </div>
                <Companies />
                <Residencies />
                <Value />
                <Contact />
                <Getstarted />
                <Footer />
              </>
            }
          />
          <Route
            path="/create-listing"
            element={
              <>
                <Header />
                <CreateListing />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

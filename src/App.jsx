import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import HomePage from './components/Homepage/Homepage';
import AllProperties from './components/All Properties/AllProperties/AllProperties';
import CreateListing from './components/CreateListing/CreateListing';
import PropertyDetails from './components/All Properties/PropertyDetails/PropertyDetails';
import { sampleProperties } from './mockProperties/mockProperties';
import { sampleRentProperties } from './mockrentProperties/mockrentProperties';
import RentProperties from './components/All Properties/RentProperties/RentProperties';
import HseRentProperties from './components/All Properties/HseRentProperties/HseRentProperties';
import { sampleHseRentProperties } from './mockhserentProperties/mockhserentProperties';
import SaleProperties from './components/All Properties/SaleProperties/SaleProperties';
import { sampleSaleProperties } from './mocksaleProperties/mocksaleProperties';
import ProfilePage from './components/ProfilePage/ProfilePage';
import PropertyAdvice from './components/PropertyAdvice/PropertyAdvice';
import ArticleDetail from './components/PropertyAdvice/ArticleDetail';
import EstateAgents from './components/EstateAgents/EstateAgents';
import EstateAgentDetail from './components/EstateAgents/EstateAgentDetail';

// Import the AuthProvider
import { AuthProvider } from './components/AuthContext';

// Import Signup and Login pages
import Signup from './components/Signup';
import Login from './components/Login';

// Import PrivateRoute
import PrivateRoute from './components/PrivateRoute';
import Hero from './components/Hero/Hero';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route 
              path="/" 
              element={
                <>
                  <Header />
                  <HomePage />
                  <Footer />
                </>
              } 
            />
            <Route path='/' element={<Hero/>} />
            <Route path='/search' element={<SearchResults />} />
            <Route 
              path="/all-properties" 
              element={
                <>
                  <AllProperties properties={sampleProperties} />
                  <Footer />
                </>
              } 
            />
            <Route 
              path="/rentals" 
              element={
                <>
                  <RentProperties properties={sampleRentProperties} />
                  <Footer />
                </>
              } 
            />
            <Route 
              path="/hserentals" 
              element={
                <>
                  <HseRentProperties properties={sampleHseRentProperties} />
                  <Footer />
                </>
              } 
            />
            <Route 
              path="/apartsales" 
              element={
                <>
                  <SaleProperties properties={sampleSaleProperties} />
                  <Footer />
                </>
              } 
            />
            <Route
              path="/signup"
              element={
                <>
                  <Header />
                  <Signup />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Header />
                  <Login />
                  <Footer />
                </>
              }
            />

            {/* Private Routes */}
            <Route 
              path="/create-listing" 
              element={
                <PrivateRoute>
                  <>
                    <Header />
                    <CreateListing />
                    <Footer />
                  </>
                </PrivateRoute>
              } 
            />
            <Route 
              path="/property-advice" 
              element={
               <>
                 <Header />
                 <PropertyAdvice />
                 <Footer />
               </>
              } 
            />
            <Route
              path="/property-advice/:id"
              element={
                <>
                  <Header />
                  <ArticleDetail />
                  <Footer />
                </>
              }
            />

            <Route 
              path="/property/:id" 
              element={
                <PrivateRoute>
                  <>
                    <Header />
                    <PropertyDetails properties={sampleProperties} />
                    <Footer />
                  </>
                </PrivateRoute>
              } 
            />
            <Route
              path="/rentals/:id"
              element={
                <PrivateRoute>
                  <>
                    <Header />
                    <PropertyDetails properties={sampleRentProperties} />
                    <Footer />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/hserentals/:id"
              element={
                <PrivateRoute>
                  <>
                    <Header />
                    <PropertyDetails properties={sampleHseRentProperties} />
                    <Footer />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/apartsales/:id"
              element={
                <PrivateRoute>
                  <>
                    <Header />
                    <PropertyDetails properties={sampleSaleProperties} />
                    <Footer />
                  </>
                </PrivateRoute>
              }
            />

            {/* Profile Page Route */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <>
                    <Header />
                    <ProfilePage />
                    <Footer />
                  </>
                </PrivateRoute>
              }
            />

            {/* Estate Agents Page */}
            <Route 
              path="/estate-agents" 
              element={
                <>
                  <Header />
                  <EstateAgents />
                  <Footer />
                </>
              }
            />

            {/* Agent Detail Page */}
            <Route 
              path="/estate-agents/:id" 
              element={
                <>
                  <Header />
                  <EstateAgentDetail />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

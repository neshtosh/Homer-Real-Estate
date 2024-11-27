import React, { useState } from 'react';
import './AllPropertiesHeader.css';
import { Link } from 'react-router-dom';
function AllPropertiesHeader({ onFilterChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSelectFilter = (filterType, value) => {
    if (onFilterChange) {
      onFilterChange(filterType, value);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="all-properties-header">
      <div className="header-left">
        <Link to ="/">
         <img src="/logo.png" alt="Logo" className="header-logo" />
        </Link>
        <h1 className="header-title">Houses For Sale</h1>
      </div>

      <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="nav-item">
          Projects
          <div className="dropdown-content">
            <a href="#">Recent</a>
            <a href="#">On-going</a>
            <a href="#">Coming Soon</a>
          </div>
        </div>
        <div className="nav-item">
          For Rent
          <div className="dropdown-content">
            <Link to="/hserentals">House Rentals</Link>
            <Link to="/rentals">Apartment Rentals</Link>
            
            <a href="#">Commercial Properties</a>
          </div>
        </div>
        <div className="nav-item">
          For Sale
          <div className="dropdown-content">
            
            <Link to="/all-properties">Houses For Sale</Link>
            <Link to="/apartsales">Apartments For Sale</Link>
            <a href="">Commercial Properties</a>
          </div>
        </div>
        <Link to="/estate-agents">
        <div className="nav-item">
          Estate Agents</div> </Link>
      </nav>

      <div className="search-filter-container">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch} className="search-icon">🔍</button>
        </div>

        <button className="filter-btn">
          Filter
          <div className="filter-dropdown">
            <div>
              <span>Location</span>
              <select onChange={(e) => handleSelectFilter('location', e.target.value)}>
                <option value="">All</option>
                <option value="Downtown">Downtown</option>
                <option value="Suburban">Suburban</option>
                <option value="Uptown">Uptown</option>
              </select>
            </div>
            <div>
              <span>Price</span>
              <select onChange={(e) => handleSelectFilter('price', e.target.value)}>
                <option value="">All</option>
                <option value="$0-$100,000">$0-$100,000</option>
                <option value="$100,000-$500,000">$100,000-$500,000</option>
                <option value="$500,000-$1,000,000">$500,000-$1,000,000</option>
              </select>
            </div>
            <div>
              <span>Bedrooms</span>
              <select onChange={(e) => handleSelectFilter('bedrooms', e.target.value)}>
                <option value="">All</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5+">5+ Bedrooms</option>
              </select>
            </div>
          </div>
        </button>
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </div>
    </header>
  );
}

export default AllPropertiesHeader;

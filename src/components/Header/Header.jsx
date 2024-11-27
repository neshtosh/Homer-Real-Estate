import React, { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { motion, useInView } from 'framer-motion';
import { AuthContext } from '../AuthContext'; // Import AuthContext

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false); // Manage user menu state
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const [searchQuery, setSearchQuery] = useState('');

  const { isLoggedIn, user, logout } = useContext(AuthContext); // Access AuthContext

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const toggleMobileMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const toggleUserMenu = () => {
    setUserMenuOpened(!userMenuOpened);
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? '0' : '-100%' };
    }
    return {};
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
    <motion.section
      ref={ref}
      className="h-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <div className="flexColStart paddings innerWidth h-container">
        {/* Logo */}
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          {/* Navigation Menu */}
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
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
                <Link to="/hserentals">Houses For Rent</Link>
                <Link to="/rentals">Apartment Rentals</Link>
                <a href="#">Commercial Properties</a>
              </div>
            </div>
            <div className="nav-item">
              For Sale
              <div className="dropdown-content">
                <Link to="/all-properties">Houses For Sale</Link>
                <Link to="/apartsales">Apartments For Sale</Link>
                <a href="#">Commercial Properties</a>
              </div>
            </div>
            <Link to="/estate-agents">Estate Agents</Link>

            {/* Conditional Rendering for Auth Buttons */}
            {!isLoggedIn ? (
              <>
                <Link to="/signup">
                  <button className="button">Sign Up</button>
                </Link>
                <Link to="/login">
                  <button className="button">Log In</button>
                </Link>
              </>
            ) : (
              <div className="user-menu">
                <button className="button" onClick={toggleUserMenu}>
                  {user?.name || 'User'} {/* Display the user's name if available */}
                </button>
                {userMenuOpened && (
                  <div className="user-menu-dropdown">
                    <Link to="/profile">Profile</Link> {/* Profile Page Link */}
                    <button onClick={logout}>Log Out</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </OutsideClickHandler>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.section>
  );
};

export default Header;

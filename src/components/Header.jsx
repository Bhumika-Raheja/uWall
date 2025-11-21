import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.jpg';

function Header() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('uwall-current-user');
    if (stored) {
      try {
        setCurrentUser(JSON.parse(stored));
      } catch {
        setCurrentUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('uwall-current-user');
    setCurrentUser(null);
    setIsMenuOpen(false);
    navigate('/');
  };

  const getInitials = (user) => {
    const base = user.name || user.email.split('@')[0];
    return base
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0].toUpperCase())
      .join('')
      .slice(0, 2);
  };

  return (
    <header className="uwall-header">
      <div className="uwall-header-left">
        <div className="uwall-logo-wrapper">
          <img src={logo} alt="uWall logo" className="uwall-logo" />
        </div>
        <div>
          <h1 className="uwall-title">uWall</h1>
          <p className="uwall-subtitle">Chitkara University | Events & Campus Moments</p>
        </div>
      </div>
      <nav className="uwall-nav">
        <Link to="/home" className="uwall-nav-link">Home</Link>
        <Link to="/events" className="uwall-nav-link">Events</Link>
        <Link to="/clubs" className="uwall-nav-link">Clubs</Link>
        <Link to="/gallery" className="uwall-nav-link">Gallery</Link>
        <Link to="/results" className="uwall-nav-link">Results</Link>
        <Link to="/about" className="uwall-nav-link">About</Link>
        {currentUser ? (
          <div className="uwall-profile">
            <button
              type="button"
              className="uwall-profile-trigger"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="uwall-profile-avatar">{getInitials(currentUser)}</span>
            </button>
            {isMenuOpen && (
              <div className="uwall-profile-menu">
                <div className="uwall-profile-name">
                  {currentUser.name || currentUser.email}
                </div>
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="uwall-nav-link uwall-nav-button">Login</Link>
            <Link to="/signup" className="uwall-nav-link uwall-nav-outline">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

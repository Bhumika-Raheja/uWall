import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="uwall-footer">
      <div className="uwall-footer-main">
        <div>
          <h3>uWall</h3>
          <p>University event & photo sharing platform for Chitkara University, Rajpura.</p>
        </div>
        <div className="uwall-footer-links">
          <div>
            <h4>Product</h4>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/clubs">Clubs</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="uwall-footer-bottom">
        <p>© {new Date().getFullYear()} uWall | For Chitkara University, Rajpura, India</p>
      </div>
    </footer>
  );
}

export default Footer;

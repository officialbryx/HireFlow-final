
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src="/hireflow-logo.ico" alt="Logo" className="logo-image" />
          </Link>
          <div className="search-wrapper">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search..." 
            />
          </div>
        </div>

        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/network" className="nav-link">
              <span className="nav-icon">👥</span>
              <span className="nav-text">My Network</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jobs" className="nav-link">
              <span className="nav-icon">💼</span>
              <span className="nav-text">Jobs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/messaging" className="nav-link">
              <span className="nav-icon">✉️</span>
              <span className="nav-text">Messaging</span>
            </Link>
          </li>
                    <li className="nav-item">
            <Link to="/login" className="nav-link">
              <span className="nav-icon">🔑</span>
              <span className="nav-text">Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
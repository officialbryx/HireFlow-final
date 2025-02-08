import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1 className="logo">
          <span className="bold">HireFlow</span> Employer
        </h1>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/employee/dashboard-employee" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/employee/job-post" activeClassName="active">
                Job Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/employee/settings" activeClassName="active">
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navbar-right">
        <span className="company-name">SkyTech Solutions Inc.</span>
        <div className="user-info">
          <span className="user-name">Bryan Tiamzon</span>
          <NavLink to="/logout" className="logout">Logout</NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

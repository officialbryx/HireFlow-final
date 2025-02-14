import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import InputField from "../components/InputField";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();  // Access the navigate function to programmatically navigate to other routes

  useEffect(() => {
    document.title = "Login | HireFlow";  // Set page title dynamically
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();  // Prevent form submission to avoid page reload
    navigate("/");  // Programmatically navigate to the dashboard
  };

  return (
    <div className="app-container">
      <header className="site-header">
          <Link to="/" className="navbar-logo">
            <img src="/hireflow-logo.ico" alt="Logo" className="logo-image" />
          </Link>
      </header>
      <div className="login-page">
        <div className="login-container">
          <h2 className="form-title">Empowering Careers, Connecting Talent</h2>
          <SocialLogin />
          <p className="separator"><span>or</span></p>
          <form onSubmit={handleLogin} className="login-form"> {/* Handle form submission */}
            <InputField type="email" placeholder="Email address" icon="mail" />
            <InputField type="password" placeholder="Password" icon="lock" />
            <a href="#" className="forgot-password-link">Forgot password?</a>
            <button type="submit" className="login-button">Log In</button>
          </form>
          <p className="signup-prompt">
            Don&apos;t have an account? <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </div>
        <img src="/loginvector.jpg" alt="Login illustration" className="login-vector" />
      </div>
    </div>
  );
};

export default Login;

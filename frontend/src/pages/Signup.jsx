import { useEffect } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

const Signup = () => {
  useEffect(() => {
    document.title = "Sign up | HireFlow";  // Set title when Signup page is rendered
  }, []);

  return (
    <div className="app-container">
      <header className="site-header">
        <h1 className="site-title">HireFlow</h1>
      </header>
      <div className="signup-container">
        <h2 className="form-title">Create an Account</h2>
        <form action="#" className="signup-form">
          <InputField type="text" placeholder="Full Name" icon="person" />
          <InputField type="email" placeholder="Email Address" icon="mail" />
          <InputField type="password" placeholder="Password" icon="lock" />
          <InputField type="password" placeholder="Confirm Password" icon="lock" />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-prompt">
          Already have an account? <Link to="/" className="login-link">Log in</Link>
        </p>
      </div>
      <footer className="site-footer">
        <p>HireFlow © 2025</p>
      </footer>
    </div>
  );
};

export default Signup;

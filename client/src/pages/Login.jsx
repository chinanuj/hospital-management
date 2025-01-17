import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import GoogleSvg from "../assets/icons8-google.svg";

const Login = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", formData);
      localStorage.setItem("auth", JSON.stringify(response.data.token));
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  useEffect(() => {
    if (token) {
      toast.success("You are already logged in");
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="container-fluid min-vh-100">
      <div className="row min-vh-100">
        {/* Left side with blue image */}
        <div className="col-md-4 d-none d-md-block p-0">
          <div className="h-100 bg-primary" style={{ 
            backgroundImage: 'assets/venYLd.png',
            backgroundSize: 'cover'
          }}></div>
        </div>
        
        {/* Right side with login form */}
        <div className="col-12 col-md-8 p-0">
          <div className="p-4">
            {/* Header Menu */}
            <nav className="d-flex justify-content-between align-items-center mb-5">
              <div className="position-relative">
                <button 
                  className="btn btn-link text-decoration-none text-dark"
                  onClick={() => setShowAboutMenu(!showAboutMenu)}
                >
                  About {showAboutMenu ? <FaAngleUp /> : <FaAngleDown />}
                </button>
                {showAboutMenu && (
                  <ul className="list-unstyled position-absolute bg-white shadow-sm p-3 rounded">
                    <li><a href="/about" className="text-decoration-none text-dark d-block py-2">About Us</a></li>
                    <li><a href="/benefits" className="text-decoration-none text-dark d-block py-2">Platform Benefits</a></li>
                    <li><a href="/contact" className="text-decoration-none text-dark d-block py-2">Contact Us</a></li>
                  </ul>
                )}
              </div>
              <div>
                <a href="/support" className="text-decoration-none text-secondary me-4">Support</a>
                <Link to="/register" className="text-decoration-none text-primary">Sign up</Link>
              </div>
            </nav>

            <div className="px-4 max-w-md mx-auto">
              <h1 className="h3 mb-4">Welcome Back</h1>
              <p className="text-muted mb-5">Please login to your account to continue</p>

              {/* Login Form */}
              <form onSubmit={handleLoginSubmit} className="mb-4">
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
                </div>

                {/* Captcha */}
                <div className="mb-3">
                  <div className="border rounded p-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="captcha" required />
                      <label className="form-check-label" htmlFor="captcha">I'm not a robot</label>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn w-100 mb-3" 
                  style={{ backgroundColor: '#28a745', color: 'white' }}
                >
                  Login
                </button>

                <button 
                  type="button" 
                  className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => {/* Handle Google login */}}
                >
                  <img src={GoogleSvg} alt="Google" style={{width: '20px'}} />
                  Login with Google
                </button>
              </form>

              <div className="text-center">
                <p className="text-muted">Don't have an account? <Link to="/register" className="text-primary text-decoration-none">Sign up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
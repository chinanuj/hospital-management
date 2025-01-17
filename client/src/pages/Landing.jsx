import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header/Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            CompanyName
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/login" className="btn btn-outline-primary me-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div 
        className="overlay position-relative bg-dark text-white py-5"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/path-to-your-background-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center intro-text">
              <h1 className="display-4 mb-4">
                We are a Landing Page
                <span className="text-primary d-block mt-2"></span>
              </h1>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus 
                leo nec ornare diam sed commodo nibh ante facilisis bibendum.
              </p>
              <a 
                href="#features" 
                className="btn btn-primary btn-lg page-scroll"
                style={{
                  padding: '12px 30px',
                  borderRadius: '25px'
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow-1">
        <div className="container py-5">
          <div className="text-center">
            <h1 className="display-4 mb-4">Welcome to CompanyName</h1>
            <p className="lead mb-4">
              Discover our amazing products and services that will transform your business
            </p>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/register" className="btn btn-primary btn-lg">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-light py-4 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>About Us</h5>
              <p className="text-muted">
                We are dedicated to providing the best services for our customers.
              </p>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-muted text-decoration-none" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-muted text-decoration-none" to="/terms">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="text-muted text-decoration-none" to="/faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <ul className="list-unstyled text-muted">
                <li>Email: contact@company.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Business St, City, State</li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center text-muted">
            <small>&copy; 2025 CompanyName. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
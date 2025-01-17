import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import GoogleSvg from "../assets/icons8-google.svg";

const Register = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [orgType, setOrgType] = useState("");
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!selectedType) {
      toast.error("Please select signup type");
      return;
    }

    if (selectedType === "professional" && !orgType) {
      toast.error("Please select organization type");
      return;
    }

    const formData = {
      userType: selectedType,
      organizationType: orgType
    };
    try {
      const response = await axios.post("http://localhost:3000/api/v1/register", formData);
      toast.success("Registration successful");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
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
        <div className="col-md-4 d-none d-md-block p-0">
          <div className="h-100 bg-primary" style={{ 
            backgroundImage: 'url("https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854034.jpg?t=st=1737142274~exp=1737145874~hmac=d4f932943fe08066e14f29096334de699a121d407b9b0567ec4b6525e4112b96&w=1480")',
            backgroundSize: 'cover'
          }}></div>
        </div>
        
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
                <Link to="/login" className="text-decoration-none text-primary">Login</Link>
              </div>
            </nav>

            <div className="px-4">
              <h1 className="h3 mb-4">Ensuring Secure Transfers of Medical Information</h1>
              <p className="text-muted mb-5">To ensure a smooth onboarding experience, please let us know if you are signing up as a patient or representing a professional organization.</p>

              {/* Sign up options */}
              <div className="row g-4 mb-5">
                <div className="col-12 col-md-6">
                  <div 
                    className={`p-4 border rounded cursor-pointer ${selectedType === 'patient' ? 'border-primary' : ''}`}
                    onClick={() => setSelectedType('patient')}
                  >
                    <h5 className="mb-1">Patient</h5>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div 
                    className={`p-4 border rounded cursor-pointer ${selectedType === 'professional' ? 'border-primary' : ''}`}
                    onClick={() => setSelectedType('professional')}
                  >
                    <h5 className="mb-1">Professional</h5>
                    {selectedType === 'professional' && (
                      <select 
                        className="form-select mt-3"
                        value={orgType}
                        onChange={(e) => setOrgType(e.target.value)}
                      >
                        <option value="1">Provides healthcare directly to patients</option>
                        <option value="2">Does not provide healthcare directly to patients</option>
                      </select>
                    )}
                  </div>
                </div>
              </div>

              <form onSubmit={handleRegisterSubmit} className="mb-4">
                <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>
                <button type="button" className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2">
                  <img src={GoogleSvg} alt="Google" style={{width: '20px'}} />
                  Sign Up with Google
                </button>
              </form>

              <div className="text-center">
                <p className="text-muted">Already have an account? <Link to="/login" className="text-primary text-decoration-none">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

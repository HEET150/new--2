// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import { Helmet } from 'react-helmet'; // If you want to manage head elements dynamically
import '../Css/style4.css';
import '../Css/style5.css';
import '../Images/favicon.png';
const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/">
          <img  src="/favicon.png" style={{ height: '80px', width: '80px' }} alt="" className="img-fluid" />
        </Link>
        <div className="logo">
          <h1>
            <Link to="/">SPARK4AI</Link>
          </h1>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link scrollto">
                About
              </Link>
            </li>
            <li>
              <Link to="/features" className="nav-link scrollto">
                Services
              </Link>
            </li>
            <li>
              <Link to="/council" className="nav-link scrollto">
                AI Council
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link scrollto">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link scrollto">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/team" className="nav-link scrollto">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link scrollto">
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;

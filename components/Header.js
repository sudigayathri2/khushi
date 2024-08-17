import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from './logo.png';
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="h">
          <Link to="/" className="logo">
            <img src={logo} alt="Khushi Logo" className="logo-image" />
          </Link>
          <Link to="/" className="name-logo">
            <b>Khushi</b>
          </Link>
          <Link to="/" className="section">Home</Link>
          <Link to="/pricing" className="section">Pricing</Link>
          <Link to="/blog" className="section">Blog</Link>
          <Link to="/resources" className="section">Resources</Link>
          <Link to="/download" className="section">Download</Link>
          <Link to="/signin" className="section">Sign in</Link>
          <Link to="/join"   className="section" >Join us</Link>
        </div> </nav>
    </header>
  );
};

export default Header;

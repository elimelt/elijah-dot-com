import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="app-bar">
        <div className="toolbar">
          <ButtonLink to="/contact" className="nav-link">
            Contact me
          </ButtonLink>
          <ButtonLink to="/" className="nav-link">
            Home
          </ButtonLink>
          <ButtonLink to="/projects" className="nav-link">
            Projects
          </ButtonLink>
          <ButtonLink to="/info" className="nav-link">
            Info
          </ButtonLink>
          <ButtonLink to="/blog" className="nav-link">
            What I've been up to
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

const ButtonLink = ({ to, className, children }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default NavBar;

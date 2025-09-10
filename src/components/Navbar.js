
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Navbar = () => {
  return (
    <nav className="nav nav_top">
      <div className="logo">
        {/* <Link to="/"><img src="/images/logo.png" width="250" alt="Charity Jet" /></Link> */}
      </div>
      <div className="nav_side">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/donate">DONATE</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
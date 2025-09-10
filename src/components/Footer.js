
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Footer = () => {
  return (
    <footer>
      <div className="pages"> 
        <Link to="/"><img className="aimg" src="/images/logo.png" width="250" alt="Charity Jet" /></Link> 
        <p>Charitopia cares for needy children by empowering their caregivers to do their best work, with compassion, grace, integrity and excellence. Our end goal is to support children worldwide and see every child reach the potential that God has for them.</p>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
      <div className="doc">
        <h3>Navigation</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <a href="/contact" target="_blank" rel="noopener noreferrer">4486 Richards Avenue, Modesto CA - 95354</a>
        <a href="tel: +910000000000">200-000-0000</a>
        <a href="mailto: ppppppp@gmail.com">charitopia@gmail.com</a>
      </div>
      <div className="social">
        <h3>Support</h3>
        <p>Help us shape a better future for children all over the world</p>
        <div className="side_btn">
          <Link to="/donate">JOIN US TODAY</Link>
        </div>
      </div>
      <hr />
      <p>Copyright &copy; 2025 Charitopia. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
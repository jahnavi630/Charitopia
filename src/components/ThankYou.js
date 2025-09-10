import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const ThankYou = () => {
  return (
    <div className="donate">
      <div className="donate_container">
        <h1>THANK YOU!</h1>
        <p>The greatest use of a life is to spend it on something that will outlast it.</p>
        <p className="second">Your contribution for<br />the needy children worldwide<br /> is priceless. Thank You for your bringing a change!</p>
        <div className="side_btn">
          <Link to="/">BACK TO HOME</Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const About = () => {
  return (
    <div>
      <div className="main_about">
        <div className="main_content_about">
          <h2>What We Do?</h2>
        </div>
      </div>

      <div className="product product_about">
        <h2>HOW WE HELP</h2>
        <div className="product_container">
          <div className="item">
            <div className="item_img">
              <img src="/images/pro1.svg" alt="Food and Water" />
            </div>
            <div className="item_content">
              <h3>Pure Food & Water</h3>
              <p>We supply needy children with basic necessities like pure food and water</p>
              <Link to="/details?cause=food" className="btn btn-primary">Join This Cause</Link>
            </div>
          </div>

          <div className="item">
            <div className="item_img">
              <img src="/images/pro2.svg" alt="Health and Medicine" />
            </div>
            <div className="item_content">
              <h3>Health and Medicine</h3>
              <p>Health being the foremost priority, we aim at giving children every medical support</p>
              <Link to="/details?cause=health" className="btn btn-success">Join This Cause</Link>
            </div>
          </div>

          <div className="item">
            <div className="item_img">
              <img src="/images/pro4.svg" alt="Clothing" />
            </div>
            <div className="item_content">
              <h3>Clothing</h3>
              <p>We ensure children have proper clothing for all seasons and occasions</p>
              <Link to="/details?cause=clothing" className="btn btn-warning">Join This Cause</Link>
            </div>
          </div>

          <div className="item">
            <div className="item_img">
              <img src="/images/pro3.svg" alt="Education" />
            </div>
            <div className="item_content">
              <h3>Education</h3>
              <p>We provide education facilities to children all over the world</p>
              <Link to="/details?cause=education" className="btn btn-info">Join This Cause</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
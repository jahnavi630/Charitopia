
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="main_content">
        <h1 className="charitopia-title">Charitopia</h1>
        <p className="charitopia-subtitle">A Utopia of Giving and Hope</p>
          <h2>“Giving is not just about making a donation. It is about making a difference.”
            <br />
            <span>Give a helping hand to children who NEED it!</span>
          </h2>
          <div className="btn">
            <Link to="/donate">DONATE NOW</Link>
          </div>
        </div>
      </div>

      <div className="side">
        <div className="left">
          <img src="/images/side.jpg" alt="Help a child" />
        </div>
        <div className="right">
          <h2>HELP A CHILD TODAY</h2>
          <p>
            Service to man is service to God. Charitopia cares for needy children by empowering their caregivers to do their best work, with compassion, grace, integrity and excellence. Our end goal is to support children worldwide and see every child reach the potential that God has for them.
          </p>
          <div className="side_btn">
            <Link to="/details">JOIN US TODAY</Link>
          </div>
        </div>
      </div>

      <div className="product">
        <h2>HOW WE HELP</h2>
        <div className="product_container">
          <div className="item">
            <div className="item_img">
              <img src="/images/pro1.svg" alt="Food and Water" />
            </div>
            <div className="item_content">
              <h3>Pure Food & Water</h3>
              <p>We supply needy children with basic necessities like pure food and water</p>
            </div>
          </div>

          <div className="item">
            <div className="item_img">
              <img src="/images/pro2.svg" alt="Health and Medicine" />
            </div>
            <div className="item_content">
              <h3>Health and Medicine</h3>
              <p>Health being the foremost priority, we aim at giving children every medical support</p>
            </div>
          </div>

          <div className="item">
            <div className="item_img">
              <img src="/images/pro3.svg" alt="Education" />
            </div>
            <div className="item_content">
              <h3>Education</h3>
              <p>We provide education facilities to children all over the world</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
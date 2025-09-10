import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Details = () => {
  return (
    <div>
      <section className="text-center p-5 bg-primary text-white">
        <h2>About Us</h2>
        <p>Making a difference by connecting kind hearts with those in need</p>
      </section>

      <section className="impact">
        <h2 className="mb-4">Our Impact</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-3 counter">
              <h3>10,000+</h3>
              <p>Children Supported</p>
            </div>
            <div className="col-md-3 counter">
              <h3>50,000+</h3>
              <p>Meals Served</p>
            </div>
            <div className="col-md-3 counter">
              <h3>5,000+</h3>
              <p>Volunteers Joined</p>
            </div>
            <div className="col-md-3 counter">
              <h3>₹50 k +</h3>
              <p>Funds Raised</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stories text-center">
        <h2>Volunteer Stories</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4 story">
              <p>"Thanks to Charitopia, I was able to donate and see the real impact. This platform made giving so simple and transparent." – <strong>Amit Verma</strong></p>
            </div>
            <div className="col-md-4 story">
              <p>"Being a volunteer was life-changing. It feels amazing to help children and know that my efforts truly matter." – <strong>Saisree Reddy</strong></p>
            </div>
            <div className="col-md-4 story">
              <p>"I always wanted to contribute but didn't know how. Charity Jet gave me that bridge to connect with real causes." – <strong>Rahul Singh</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-tiers text-center">
        <h2>Choose a Donation Plan</h2>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <div className="card p-3">
                <h4>₹500</h4>
                <p>Provides meals for a week</p>
                <Link to="/donate" className="btn btn-primary">Donate ₹500</Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <h4>₹1000</h4>
                <p>Medical support for one child</p>
                <Link to="/donate" className="btn btn-success">Donate ₹1000</Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <h4>₹2000</h4>
                <p>Education kit for a child</p>
                <Link to="/donate" className="btn btn-info">Donate ₹2000</Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <h4>₹5000</h4>
                <p>Sponsor a child for a month</p>
                <Link to="/donate" className="btn btn-warning">Donate ₹5000</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="container">
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  How do you ensure donations reach the right people?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We partner with verified NGOs and local leaders to ensure every contribution reaches genuine beneficiaries.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Is my donation tax-deductible?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, all donations made through Charitopia are eligible for tax deductions under Section 80G.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Can I volunteer instead of donating money?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Absolutely! We encourage volunteering. Sign up on our volunteer page and be part of the change.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-light p-4">
        <h3>Stay Updated</h3>
        <form className="newsletter">
          <input type="email" placeholder="Enter your email" className="form-control d-inline" required />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Details;
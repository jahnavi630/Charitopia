import React from 'react';
import '../styles/components.css';

const Contact = () => {
  return (
    <div className="contact_container" style={{paddingTop: '100px'}}>
      <h2>CONTACT US</h2>
      <div className="g_map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340544.4960977174!2d-121.88102652009785!3d35.150373310697375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sin!4v1628463464648!5m2!1sen!2sin" 
          width="100%" 
          height="600" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
          title="Charitopia Location"
        ></iframe>
      </div>
      <div className="contact_content">
        <p>We want to hear from you! Drop us a note and someone from our team will get back to you.
          Looking to volunteer or supporting us in any other ways? Call +1111100000
          Have a question that involves Charitopia? Please head on over to our Locations page to reach our locations.</p>
        <p><b>Call: +111100000</b></p>
        <p><b>Mail: support.charitopia@gmail.com</b></p>
      </div>
    </div>
  );
};

export default Contact;
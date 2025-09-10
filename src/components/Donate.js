import React from 'react';
import '../styles/components.css';

const Donate = () => {
  const handleDonate = () => {
    window.open('https://rzp.io/l/zLEJysVsC', '_blank');
  };

  return (
    <div className="donate">
      <div className="donate_container">
        <h1>Let's Make a Change Together!</h1>
        <p>The greatest use of a life is to spend it on something that will outlast it.</p>
        <p className="second">Any help or donation,<br />no matter how big or small,<br /> will be whole-heartedly and deeply appreciated.</p>
        <div className="side_btn">
          <button onClick={handleDonate}>DONATE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
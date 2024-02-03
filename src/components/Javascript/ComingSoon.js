// ComingSoon.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// import '../path-to-your-css/comingSoon.css'; // Make sure to update the path to your CSS file

const ComingSoon = () => {
  return (
    <div className="main-area center-text">
      <div className="display-table">
        <div className="display-table-cell">
          <h1 className="title font-white"><b>Coming Soon</b></h1>
          <p className="desc font-white">
            We are currently working on the AI Council website.
            We will be back shortly. Thank you for your patience.
          </p>

          <Link to="/notify" className="notify-btn"><b>NOTIFY ME</b></Link>
          
          <ul className="social-btn font-white">
            <li><a href="https://www.facebook.com/profile.php?id=61552039076712&mibextid=ZbWKwL">facebook</a></li>
            <li><a href="https://www.linkedin.com/company/spark4ai/">linkedin</a></li>
            {/* Add other social media links as needed */}
            <li><a href="https://instagram.com/spark4ai.iitkgp?igshid=NjIwNzIyMDk2Mg==">instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

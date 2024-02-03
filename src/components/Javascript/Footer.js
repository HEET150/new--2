import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3 style={{ color: '#E6D8A0' }}>SPARK4AI</h3>
        <p>Spark your way to AI excellence!!</p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61552039076712&mibextid=ZbWKwL" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://instagram.com/SPARK4AI.iitkgp?igshid=NjIwNzIyMDk2Mg==" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/SPARK4AI/" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>SPARK4AI</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">SPARK4AI</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

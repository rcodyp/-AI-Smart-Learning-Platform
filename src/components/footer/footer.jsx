import React from 'react';
import './footer.css'; // Ensure your styles are included

const Footer = () => {
  return (
    <div id="bottom">
      <footer id="footer">
        <div className="logo"></div>
        <div className="las">
          <div>Contact / Blog / Information</div>
          <div>
            <div className="icons">
              <i className="ri-instagram-line"></i>
              <i className="ri-twitter-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-youtube-fill"></i>
              <i className="ri-linkedin-fill"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

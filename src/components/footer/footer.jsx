import React from 'react';
import './footer.css'; // Ensure your styles are included

const Footer = () => {
  return (
    <div id="bottom">
    <footer id="footer">
      <div class="footer-container">
        <div class="logo">LearnAI</div>
        <div class="las">
          <div class="links">
            <a href="#" class="footer-link">Contact</a>
            <a href="#" class="footer-link">Blog</a>
            <a href="#" class="footer-link">Information</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 LearnAI. All rights reserved.</p>
      </div>
    </footer>
  </div>
  
  );
};

export default Footer;

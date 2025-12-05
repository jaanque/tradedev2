import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h4>SocialStock</h4>
          <p>
            The first social marketplace where influence is currency.
            Invest in creators, grow your portfolio, and own a piece of the future.
          </p>
        </div>

        <div className="footer-col">
          <h5>Platform</h5>
          <ul>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h5>Stay Updated</h5>
          <p>Get the latest market trends and platform updates delivered to your inbox.</p>
          <div className="footer-input-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <button className="footer-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2024 SocialStock Inc. All rights reserved.
        </div>
        <div className="footer-socials">
          <a href="#" className="footer-social-link">Twitter</a>
          <a href="#" className="footer-social-link">LinkedIn</a>
          <a href="#" className="footer-social-link">Instagram</a>
          <a href="#" className="footer-social-link">Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

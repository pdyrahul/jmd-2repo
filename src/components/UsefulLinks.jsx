import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa'; // Instagram and Meta (Facebook) icons
import logoImg from '../assets/logoImg.png';
const UsefulLinks = () => (
  <footer className="">
    <div className="container">
      <div className="row">
        {/* Logo and Icons */}
        <div className="col-12 col-md-4 mb-4">
          <div className="d-flex flex-column align-items-center">
            <img
              src={logoImg} // Replace with your logo path
              alt="TyrePlex Logo"
              className="mb-3"
              style={{ width: '150px', height: 'auto' }}
            />
            <div className="d-flex">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaInstagram style={{ fontSize: '2rem' }} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF style={{ fontSize: '2rem' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="col-12 col-md-4 mb-4">
          <h5>Useful Links</h5>
          <ul className="list-unstyled">
            <li><a href="/who-we-are">Who We Are</a></li>
            <li><a href="/are-you-a-tyre-dealer">Are you a Tyre Dealer?</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
          </ul>
        </div>

        {/* Contact and Policies */}
        <div className="col-12 col-md-4 mb-4">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li><a href="/career">Career</a></li>
            <li><a href="/shipping-return-policy">Shipping & Return Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default UsefulLinks;

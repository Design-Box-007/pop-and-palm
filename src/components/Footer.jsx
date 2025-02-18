import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.svg';
import FooterInstagram from '../assets/FooterInstagram.png';
import LinkedIn from '../assets/linkedin.png';
import pinterest from '../assets/pinterest.png';
import FooterFacebook from '../assets/FooterFacebook.png';
import FooterPopAndPalm from '../assets/Footer Img.png';

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-hr' />
      <div className='row'>
        <div className='col-md-3 my-3'>
          <img src={logo} alt="Logo" style={{ height: '60px' }} />
        </div>
        <div className='col-md-6 my-4'>
          <div className='footer-links'>
            <HashLink className='footer-link' smooth to="/#home">Home</HashLink>
            <HashLink className='footer-link' smooth to="/#about">About Us</HashLink>
            <HashLink className='footer-link' smooth to="/services#top">Services</HashLink>
            <HashLink className='footer-link' smooth to="/gallery#top">Gallery</HashLink>
            <a className='footer-link' href='https://us.bigin.online/org868107012/forms/enquiry-form' target='_blank' rel="noopener noreferrer">Contact Us</a>
          </div>
        </div>
        <div className='col-md-3 my-4'>
          <div className='d-flex gap-3 justify-content-sm-end justify-content-start align-items-end'>
            <a href='https://www.instagram.com/popandpalmeventsdubai/' target='_blank' rel="noopener noreferrer">
              <img src={FooterInstagram} alt='instagram' />
            </a>
            <a href='https://in.pinterest.com/popandpalmevents/' target='_blank' rel="noopener noreferrer">
              <img src={pinterest} alt='pinterest' />
            </a>
            <a href='https://www.linkedin.com/company/pop-palm-events-llc' target='_blank' rel="noopener noreferrer">
              <img src={LinkedIn} alt='linkedin' />
            </a>
            <a href='https://www.facebook.com/popandpalm?mibextid=LQQJ4d' target='_blank' rel="noopener noreferrer">
              <img src={FooterFacebook} alt='facebook' />
            </a>
          </div>
        </div>
        <div className='col-md-6 my-2'>
          <div className='footer-text'>All Copyrights and License are Claimed @2024</div>
        </div>
        <div className='col-md-6 d-flex justify-content-sm-end my-2'>
          <div className='footer-text'>Terms & Conditions</div>
        </div>
        <div className='col-md-12'>
          <img src={FooterPopAndPalm} alt='FooterPopAndPalm' width="100%" />
        </div>
        <div className="col-md-12 footer-note">
          <div className='footer-text'>This website is designed and developed by <a target='_blank' href="http://www.pixelpanda.ae">Pixel Panda Technologies</a></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

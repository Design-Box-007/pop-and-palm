import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <Navbar bg="transparent" expand="lg" className="header">
      <Navbar.Brand href='#/#home' className="ml-auto">
        <img
          src={logo}
          alt="Logo"
          className="d-inline-block align-top"
          width={120}
          height={49}
          style={{ height: '60px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle className='me-2' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='p-3' id="basic-navbar-nav">

        <Nav className="mr-auto">
          <Nav.Link href='#/#home'>Home</Nav.Link>
          <Nav.Link href="#/#about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>


          <Nav.Link href='https://us.bigin.online/org868107012/forms/enquiry-form' target='_blank' rel="noopener noreferrer" >Contact Us</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

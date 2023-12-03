import React from 'react';
import manwise from '../../Assets/logo.png'
import './header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logosss">
        <img src={manwise} alt="Managewise Logo" />
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li><a href="#features" style={{color:"black"}}>Features</a></li>
          <li><a href="#faq" style={{color:"black"}}>FAQ</a></li>
          <li><a href="#pricing" style={{color:"black"}}>Pricing</a></li>
          <li><a href="#testimonials" style={{color:"black"}}>Testimonials</a></li>
        </ul>
      </nav>
      <div className="cta">
        <button className="buy-button">Buy Template</button>
      </div>
      
    </header>
  );
};

export default Header;

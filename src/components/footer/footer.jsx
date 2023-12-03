import React from "react";
import ManagewiseLogo from '../../Assets/logo.png';
import './footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footerss = () => {
  return (
    <footer className="footer">
      <div className="logoss">
        <img src={ManagewiseLogo} alt="Managewise Logo" />
      </div>
      <nav className="navigationss" >
        <ul className="nav-linkss" >
          <li><a href="#features" style={{color:"black"}}>Features</a></li>
          <li><a href="#faq" style={{color:"black"}}>FAQ</a></li>
          <li><a href="#pricing" style={{color:"black"}}>Pricing</a></li>
          <li><a href="#testimonials" style={{color:"black"}}>Testimonials</a></li>
        </ul>
      </nav>
      <hr className="dividers" />
      <div className="lsts">
        <p>@ 2022 ManageWise, Inc.</p>
        <div className="socials">
        <FaInstagramSquare />
        <FaXTwitter />
        <FaLinkedin />
        </div>
        
      </div>
    </footer>
  );
};

export default Footerss;

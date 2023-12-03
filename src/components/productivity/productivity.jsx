import React from 'react';
import { FaMobile, FaFire } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import './productivity.css';

const IntroSection = () => {
  return (
    <div className="intro-section">
      {/* <p className='high' style={{ fontSize: 15 }}>🤩 AND MORE...</p> */}
      <p className='hightext' style={{ fontSize: 50 }}>
        Explore an array of features that elevate your <br />
        <span className='orangecol'>Productivity</span> to new heights.
      </p>
      <p className='lowtext'>Discover the tools that will revolutionize the way you manage and optimize your operations.</p>
    </div>
  );
};

const Feature = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-container">
      <div className="icon">
        <Icon />
      </div>
      <div className="feature-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Productivity = () => {
  return (
    <div className="productivity">
      <IntroSection />
      <div className="features">
        <Feature
          icon={FaMobile}
          title="Cross-Platform Compatibility"
          description="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
        />
        <Feature
          icon={IoIosNotifications}
          title="Stay Informed with Essential Notifications"
          description="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
        />
        <Feature
          icon={FaFire}
          title="Secure Data Encryption at all times"
          description="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
        />
      </div>
    </div>
  );
};

export default Productivity;

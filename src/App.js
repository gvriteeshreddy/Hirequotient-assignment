import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import Intro from './components/Intro/Intro.jsx';
import OverviewImage from './Assets/overview.png';
import PremierFeatures from './components/Features/Features.jsx';
import Products from './components/products/Products.jsx';
import List from './components/products/list.jsx';
import Productivity from './components/productivity/productivity.jsx';
import Integration from './components/Integrations/Integration.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import Princing from './components/pricing/pricing.js';
import Customer from './components/customer/customer.jsx';
import Footerss from './components/footer/footer.jsx';

function App() {
  const [background, setBackground] = useState('initial-background');

  useEffect(() => {
  const handleScroll = () => {
    const threshold = window.scrollY + window.innerHeight;
    const image = document.querySelector('.overview-image');
    const imageBottom = image.offsetTop + image.offsetHeight;

    if (threshold >= imageBottom) {
      setBackground('final-background');
      image.classList.add('image-visible'); // Add the class to trigger the pop-up effect
    } else {
      setBackground('initial-background');
      image.classList.remove('image-visible'); // Remove the class if scrolled above the threshold
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className={`App ${background}`}>
      <Header />
      <hr className="divider" />
      <Intro />
      <img src={OverviewImage} alt="Overview" className="overview-image" />
      <PremierFeatures />
      <Products />
      <List />
      <Productivity />
      <Integration />
      <FAQ/>
      <Princing/>
      <Customer/>
      <Footerss/>
    </div>
  );
}

export default App;

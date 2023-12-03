import React from 'react';
import './Intro.css'; 

function Intro() {
  return (
    <div className="container">
      <div className="content">
        <p className='welcome'>👋 WELCOME TO MANAGE WISE!</p>
        <p className='bigtext'>Empower your business with </p>
        <p className='bigtext'>
           <span className="orange-text">Strategic</span> insights
        </p>
        <p className='smalltext'>Powerful management platform designed to streamline your business</p>
        <p className='smalltext'> operations, boost productivity, and drive success</p>
        <button className="get-started-btn">Get Started</button>
        <button className="watch-demo-btn">Watch Demo</button>
      </div>
    </div>
  );
}

export default Intro;

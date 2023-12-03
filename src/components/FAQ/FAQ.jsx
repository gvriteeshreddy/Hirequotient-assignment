import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  const questions = [
    {
      question: 'What is Manage Wise and what does it offer?',
      answer: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.'
    
    },
    {
      question: 'Is Manage Wise suitable for small businesses and larger enterprises alike?',
      answer: 'Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.'
     
    },
    {
        question: 'Can I access Manage Wise from different devices and platforms?',
        answer: 'Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.'
       
      },
    
  ];

  return (
    <div className="faq-section">
      <div className="intro">
        <p className='high'>🙋‍♀️ FAQ</p>
        <p  className ='need' style={{ fontSize: '40px' }}>Need <br/> <span className='orangecols'>Answers?</span> </p>
        <p className ='need' style={{ fontSize: '20px', color:'rgb(118, 117, 117)' }}>Check out our most commonly <br/>asked questions below to find the <br/>information you need.</p>
      </div>
      

      
      <div className="questions">
        {questions.map((q, index) => (
          <div key={index} className={`question-header ${expanded[index] ? 'expanded' : ''}`}>
            <h2>
              {q.question}{' '}
              <span className="expand-button" onClick={() => toggleExpand(index)}>
                {expanded[index] ? '-' : '+'}
              </span>
            </h2>
            {expanded[index] && (
              <div className="answer">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

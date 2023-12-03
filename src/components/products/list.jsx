import React from 'react';
import './products.css'; 
import Analytics from '../../Assets/analytics.png';
import scheduling from '../../Assets/scheduling.png';
import Communication from '../../Assets/communication.png';

const listData = [
  {
    title: 'Flexible Scheduling',
    description: 'Stay productive with our flexible scheduling system',
    img:scheduling
  },
  {
    title: 'Easy Communication',
    description: 'Collaborate seamlessly with your team in real-time',
    img:Communication
  },
  {
    title: 'Analytics',
    description: 'Gain valuable insights with our advanced analytics',
    img:Analytics
}
];

function List() {
  return (
    <div className="products-container">
      
      <div className="product-list">
        {listData.map((list, index) => (
          <div className="product-item" key={index}>
            <img src={list.img} alt={list.title} />
            <div className="images-text">
              <h3>{list.title}</h3>
              <p>{list.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;

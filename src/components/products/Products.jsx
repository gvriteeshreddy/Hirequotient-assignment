import React from 'react';
import './products.css'; 
import SmartImage from '../../Assets/smarttask.png';

function Products() {
  return (
    <div className="products-container">
      <div className="smart-task-container">
        <div className="smart-text">
          <p>
            ⭐️<br />
            Boost productivity and <br />
            streamline workflow with <br />
            us. Enjoy our intuitive <br />
            interface and robust <br />
            features.
          </p>
        </div>
        
        <div className="smart-image">
          <img src={SmartImage} alt="Smart Task Management" />
          <div className="image-text">
            <h3>Smart Task Management</h3>
            <p>Say goodbye to chaos with our smart task management system.</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Products;

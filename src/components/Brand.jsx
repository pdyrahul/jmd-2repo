import React from 'react';
import { brands } from '../constant'; // Adjust the path as needed

const Brand = () => {
  return (
    <div className="container my-5">
         <h2 className="text-center mb-4">Brand we Deals with</h2>
      <ul className="list-unstyled">
        {brands.map((brand, index) => (
          <li key={index} className="d-flex align-items-center mb-3">
            <a href={brand.url} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none">
              <img
                src={brand.src}
                alt={brand.name}
                className="brandcard-img"
                
              />
              <span>{brand.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brand;

import React, { useState } from 'react';
import { serviceCards } from '../constant';
import Brand from '../components/Brand';
import PaymentMethod from './PaymentMethod';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container my-5">
      {/* Regular tabs for larger screens */}
      <ul className="nav nav-pills mb-3 flex-wrap d-none d-md-flex">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab1')}
          >
            Services Offer By Dealer
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab2')}
          >
            Deals In Brands
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab3')}
          >
            Payment Methods
          </button>
        </li>
      </ul>

      {/* Dropdown menu for smaller screens */}
      <div className="dropdown d-md-none mb-3">
        <button
          className="btn btn-secondary dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {activeTab === 'tab1'
            ? 'Services Offer By Dealer'
            : activeTab === 'tab2'
            ? 'Deals In Brands'
            : 'Payment Methods'}
        </button>
        <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
          <li>
            <button
              className={`dropdown-item ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab1')}
            >
              Services Offer By Dealer
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab2')}
            >
              Deals In Brands
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab3')}
            >
              Payment Methods
            </button>
          </li>
        </ul>
      </div>

      <div className="tab-content">
        {activeTab === 'tab1' && (
          <div className="tab-pane fade show active">
            <h2 className="text-center mb-4">Services we Provide</h2>
            <div className="row g-4">
              {serviceCards.map((serviceCard, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <div className="card text-center h-100">
                    <img
                      src={serviceCard.src}
                      alt={serviceCard.alt}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{serviceCard.title}</h5>
                      <button className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="tab-pane fade show active">
            <Brand />
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="tab-pane fade show active">
            <PaymentMethod />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavTabs;

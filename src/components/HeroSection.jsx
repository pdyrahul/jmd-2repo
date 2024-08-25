import React, { useState } from 'react';
import { Tabimages } from '../constant'; // Adjust the import path as needed
import { MdStar, MdStarOutline,MdVerified } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { FaLocationArrow, FaRegClock } from "react-icons/fa";
const HeroSection = () => {
  // State to keep track of the currently selected main image
  const [mainImage, setMainImage] = useState(Tabimages[0].src);

  // Function to handle image click
  const handleImageClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="wender_info">
            <h1 className="display-4">SHREE HEMKUNT TYRES & SERVICES <span><MdVerified />Verified</span></h1>
            <div className="rating">
              <div className="rateLeft">
              <span>4.9</span>
              <MdStar size={20}/>
              <MdStar size={20}/> 
              <MdStar size={20}/>
              <MdStar size={20}/>
              <MdStar size={20}/>
              
              </div>
            <div className="rateRight"><a href=""><span>2k+ Reviews</span><GoCodeReview /></a></div>
              
              </div>
            <div className="address">
              <p><span><FaLocationArrow size={20} /></span>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</p>
              <p><span><FaRegClock size={20} /></span>Open - Monday   to   Sunday - 10:00AM to 8:00PM</p>
            </div>
            <button className="getDirection">Get Direction</button>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="service_gallery">
              <div className="mainImg">
                <img src={mainImage} alt="Main"  />
              </div>
              <div className="tabImg">
                {Tabimages.map((Tabimage, index) => (
                  <img
                    key={index}
                    src={Tabimage.src}
                    alt={Tabimage.alt}
                    onClick={() => handleImageClick(Tabimage.src)}
                    style={{ width: '120px', height: '80px', cursor: 'pointer', objectFit: 'cover' }} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from 'react';
import { reviewData } from "../constant";

const ReviewCard = () => (
  <section id="reviews" className="reviews my-5">
    <div className="container">
      <h2 className="text-center mb-4">Customer Reviews</h2>
      <div className="row">
        {reviewData.map((review, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={review.img}
                    alt={`Review by ${review.name}`}
                    className="rounded-circle me-3"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  />
                  <h5 className="card-title ms-3 mb-0">{review.name}</h5>
                </div>
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewCard;

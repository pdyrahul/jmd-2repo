import React from 'react';
import { FaCreditCard, FaWallet } from 'react-icons/fa';
import { AiOutlineBank } from 'react-icons/ai';
import { RiBankCardFill } from 'react-icons/ri';

const paymentMethods = [
  {
    name: 'Net Banking',
    icon: <AiOutlineBank />,
    description: 'Secure online banking transfer'
  },
  {
    name: 'Credit Card/Debit Card',
    icon: <FaCreditCard />,
    description: 'Pay with credit or debit card'
  },
  {
    name: 'UPI',
    icon: <RiBankCardFill />,
    description: 'Unified Payments Interface'
  },
  {
    name: 'Wallets (PayTM/PhonePe/Amazon etc.)',
    icon: <FaWallet />,
    description: 'Use digital wallets for payment'
  }
];

const PaymentMethod = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Payment Methods</h2>
      <div className="row">
        {paymentMethods.map((method, index) => (
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card text-center h-100 p-20">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ fontSize: '2rem' }}>
                    {method.icon}
                  </div>
                  <h6 className="card-title mb-0">{method.name}</h6>
                </div>
                <p className="card-text">{method.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;

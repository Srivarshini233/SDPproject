import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ConfirmPage.css';

const OrderDetails = () => {
  const location = useLocation();
  const { cart, totalPrice, paymentMethod } = location.state;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5); // Assuming 5 days for delivery

  return (
    <div className="order-details-page h-screen w-screen overflow-auto">
      <nav className="navbar flex justify-end items-end p-4">
        <Link to="/" className="navbar-link">Home</Link>
      </nav>
      <div className="order-confirmation flex flex-col items-center p-4">
        <div className="confirmation-message flex items-center mb-4">
          <span className="green-tick">✔</span>
          <h2>Your Order is Confirmed!</h2>
        </div>
        <p className="delivery-date mb-4">Expected Delivery Date: {deliveryDate.toDateString()}</p>
        <div className="order-summary w-full max-w-4xl">
          <div className="products-grid">
            {cart.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <p>Payment Method: {paymentMethod}</p>
              </div>
            ))}
          </div>
          <div className="total-amount">
            <h4>Total Amount Paid: ₹{totalPrice}</h4>
          </div>
        </div>
        <Link to="/toyproduct" className="continue-shopping-btn mt-4">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default OrderDetails;

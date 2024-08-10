import React, { useContext } from 'react';
import { StoreContext } from '@/StoreProvider';
import { Link, useNavigate } from 'react-router-dom';
import './BuyNow.css';

const BuyNow = () => {
  const { cart, setCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleRemoveProduct = (id) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== id));
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    navigate('/order');
  };

  return (
    <div className="buy-now-page h-screen w-screen">
      <nav className="buy-now-navbar flex justify-end items-end">
        <Link to="/" className="buy-now-navbar-link">Home</Link>
      </nav>
      <div className="buy-now-container">
        <div className="buy-now-products-section">
          <h2 className="buy-now-section-title">Your Products</h2>
          <div className="buy-now-products-grid">
            {cart.map((product) => (
              <div className="buy-now-product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Size: {product.size}</p>
                <p>Color: {product.color}</p>
                <p>Shape: {product.shape}</p>
                <p>₹{product.price}</p>
                <button className="buy-now-remove-button" onClick={() => handleRemoveProduct(product.id)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
        <div className="buy-now-delivery-section">
          <h2 className="buy-now-section-title">Delivery Details</h2>
          <form className="buy-now-delivery-form" onSubmit={handleProceedToPayment}>
            <div className="buy-now-form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="buy-now-form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="buy-now-form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="buy-now-form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" required />
            </div>
            <div className="buy-now-form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" required />
            </div>
            <div className="buy-now-form-group">
              <label htmlFor="pincode">Pincode</label>
              <input type="text" id="pincode" name="pincode" required />
            </div>
            <button type="submit" className="buy-now-proceed-button">Proceed to Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;

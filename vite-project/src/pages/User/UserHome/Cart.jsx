import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '@/StoreProvider';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '@/services/api'; // Assuming you have axiosInstance set up
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(StoreContext);
  const [quantities, setQuantities] = useState(cart.reduce((acc, product) => {
    acc[product.id] = 1;
    return acc;
  }, {}));
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get('/users/all');
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleQuantityChange = (id, amount) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [id]: Math.max(prevQuantities[id] + amount, 1),
      };
      return newQuantities;
    });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.price * quantities[product.id];
    }, 0);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleBuyNow = () => {
    // Logic to handle the Buy Now button
    navigate('/buynow');
  };

  return (
    <div className="cart-page h-screen w-screen">
      <nav className='navbar nav-container'>
        <button onClick={() => navigate("/shopbycategory")} className="nav-button">Home</button>
        <button onClick={() => navigate("/wishlist")} className="nav-button">Wishlist ❤</button>
      </nav>
      <h2 className='font-bold flex justify-center items-center pt-3 pb-5 card-made textsizes'>Cart 🛒</h2>
      <div className="cart-grid">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div className="cart-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                <span>{quantities[product.id]}</span>
                <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              </div>
              <p className="product-total">Total: {quantities[product.id]} x ₹{product.price} = ₹{quantities[product.id] * product.price}</p>
              <button className="remove-button" onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="cart-summary">
        <h3>User Details</h3>
        <p>Name: {userDetails.name}</p>
        <p>Address: {userDetails.address}</p>
        <div className="flex justify-end gap-5">
          <button className='text-white h-10 w-36 bg-green-600 rounded mt-12' onClick={handleBuyNow}>Buy Now</button>
          <div className="total-price">
            Total Price: ₹{calculateTotalPrice()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

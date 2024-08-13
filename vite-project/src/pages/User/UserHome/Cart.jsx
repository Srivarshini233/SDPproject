import React, { useContext } from 'react';
import { StoreContext } from '@/StoreProvider';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleBuyNow = (product) => {
    // Navigate to BuyNow page with only the selected product
    navigate('/buynow', { state: { product } });
  };

  return (
    <div className="cart-page">
      <nav className='navbar nav-container'>
        <button onClick={() => navigate("/shopbycategory")} className="nav-button">Home</button>
        <button onClick={() => navigate("/wishlist")} className="nav-button">Wishlist ❤</button>
        <button onClick={()=>navigate("/")} > LogOut </button>
      </nav>
      <h2 className='font-bold text-decoration flex justify-center items-center mt-28 pb-5'>Product in your Cart🛒</h2>
      <div className="cart-grid">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div className="cart-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3 className="font-bold pl-24 ">{product.name}</h3>
              <p className="font-bold pl-24">{product.description}</p>
              <p className="font-bold pl-24">Color: {product.color}</p>
              <p className="font-bold pl-24">₹{product.price}</p>
              <button className="buy-now-button" onClick={() => handleBuyNow(product)}>Buy Now</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

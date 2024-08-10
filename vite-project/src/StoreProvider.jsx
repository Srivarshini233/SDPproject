import React, { createContext, useState } from 'react';

// Create a context to manage the state of the cart and wishlist
export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (product) => {
    setWishList((prevWishList) => {
      const isFavorited = prevWishList.find((item) => item.id === product.id);
      if (isFavorited) {
        return prevWishList.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishList, product];
      }
    });
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toggleFavorite(product); // Optionally remove the product from the wishlist after adding to the cart
  };

  return (
    <StoreContext.Provider value={{ wishList, toggleFavorite, cart, addToCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

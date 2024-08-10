import React, { createContext, useState, useContext } from 'react';

const WishListContext = createContext();

export const useWishList = () => {
    return useContext(WishListContext);
};

export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);

    const addToWishList = (product) => {
        setWishList((prevList) => [...prevList, product]);
    };

    return (
        <WishListContext.Provider value={{ wishList, addToWishList }}>
            {children}
        </WishListContext.Provider>
    );
};

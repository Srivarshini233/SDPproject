import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "@/StoreProvider"; // Adjust the import path as needed
import { ProductData } from '@/services/api';
import "../UserHome/UserProduct.css";
import toast, { Toaster } from 'react-hot-toast';

const ToyProduct = () => {
  const [productList, setProductList] = useState([]);
  const { toggleFavorite, addToCart } = useContext(StoreContext);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    shape: { spaceship: false, house: false, track: false, robot: false, gun: false },
    color: { black: false, pink: false, red: false, blue: false, orange: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan2000: false, lessThan3000: false },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ProductData();
        setProductList(res?.data || []);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };
 const handleWishList=(product)=>{
  toast.success("product added to WishList");
  toggleFavorite(product);
 }
  const getFilteredProducts = () => {
    return productList.filter((product) => {
      const { size, color, shape, price } = selectedFilters;

      const matchesSize = Object.entries(size).some(
        ([key, value]) => value && product.size.toLowerCase() === key
      );

      const matchesColor = Object.entries(color).some(
        ([key, value]) => value && product.color.toLowerCase() === key
      );

      const matchesShape = Object.entries(shape).some(
        ([key, value]) => value && product.shape.toLowerCase() === key
      );

      const matchesPrice =
        (price.lessThan2000 && product.price < 2000) ||
        (price.lessThan3000 && product.price < 3000) ||
        (!price.lessThan2000 && !price.lessThan3000);

      return (
        (matchesSize || Object.values(size).every((v) => !v)) &&
        (matchesColor || Object.values(color).every((v) => !v)) &&
        (matchesShape || Object.values(shape).every((v) => !v)) &&
        matchesPrice
      );
    });
  };

  const filteredProducts = getFilteredProducts();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
 const handleCart = (product)=>{
  toast.success("product added");
  addToCart(product)
 }
  return (
    <div className="toy-page">
      <nav className="navbar overflow-hidden object-contain m-0">
        <button onClick={() => handleNavigation("/shopbycategory")} className="nav-button">Home</button>
        <button className="nav-button" onClick={() => handleNavigation("/wishlist")}>Wishlist ❤</button>
        <button className="nav-button" onClick={() => handleNavigation("/cart")}>Cart 🛒</button>
        <div  className="pl-4 p-3"><button onClick={()=>handleNavigation("/")} > LogOut </button></div>
      </nav>
      <aside className="filters">
        <h2>.</h2>
        <h2>Filters</h2>
        <button
          className="reset"
          onClick={() =>
            setSelectedFilters({
              shape: { spaceship: false, house: false, track: false, robot: false, gun: false },
              color: { black: false, pink: false, red: false, blue: false, orange: false },
              size: { small: false, medium: false, large: false },
              price: { lessThan2000: false, lessThan3000: false },
            })
          }
        >
          Reset
        </button>
        <div className="filter-group">
          <h3>Shape</h3>
          {["spaceship", "house", "track", "robot", "gun"].map((shape) => (
            <div key={shape} className="filter-option">
              <input
                type="checkbox"
                id={shape}
                checked={selectedFilters.shape[shape]}
               // onChange={() => toggleFilter("shape", shape)}
              />
              <label
                htmlFor={shape}
                style={{
                  color: selectedFilters.shape[shape] ? "orange" : "black",
                }}
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Color</h3>
          {["black", "pink", "red", "blue", "orange"].map((color) => (
            <div key={color} className="filter-option">
              <input
                type="checkbox"
                id={color}
                checked={selectedFilters.color[color]}
                onChange={() => toggleFilter("color", color)}
              />
              <label
                htmlFor={color}
                style={{
                  color: selectedFilters.color[color] ? "orange" : "black",
                }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Size</h3>
          {["small", "medium", "large"].map((size) => (
            <div key={size} className="filter-option">
              <input
                type="checkbox"
                id={size}
                checked={selectedFilters.size[size]}
               // onChange={() => toggleFilter("size", size)}
              />
              <label
                htmlFor={size}
                style={{
                  color: selectedFilters.size[size] ? "orange" : "black",
                }}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Price</h3>
          <div className="filter-option">
            <input
              type="checkbox"
              id="lessThan2000"
              checked={selectedFilters.price.lessThan2000}
              onChange={() => toggleFilter("price", "lessThan2000")}
            />
            <label
              htmlFor="lessThan2000"
              style={{
                color: selectedFilters.price.lessThan2000 ? "orange" : "black",
              }}
            >
              Less than ₹2000
            </label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              id="lessThan3000"
              checked={selectedFilters.price.lessThan3000}
              onChange={() => toggleFilter("price", "lessThan3000")}
            />
            <label
              htmlFor="lessThan3000"
              style={{
                color: selectedFilters.price.lessThan3000 ? "orange" : "black",
              }}
            >
              Less than ₹3000
            </label>
          </div>
        </div>
      </aside>
      <main className="products">
        <div className="product-header">
          <h6 className="text-decoration">Toys</h6>
          <button className="toggle-fit">Enable My Fit</button>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <button
                className="wishlist"
                onClick={() => handleWishList(product)}
              >
                ❤
              </button>
              <div className="product-info">
                <h6 className='font-bold size'>{product.name}</h6>
                <p>{product.description}</p>
                <p className='font-bold'>Price: ₹{product.price}</p>
                
                <p className='font-bold'>Color: {product.color}</p>
               
              </div>
              <button className="add-to-cart flash-message" onClick={() => handleCart(product)}>Add to Cart</button>
            </div>
              
          ))}
        </div>
      </main>
      <Toaster/>
    </div>
  );
};

export default ToyProduct;

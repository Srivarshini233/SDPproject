import React from "react";
import { useNavigate } from "react-router-dom";

import '../UserHome/Userfile.css';
const kidsCategory = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (<>
        <div className= "category-content" >
        <div
        className="category-item"
    onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491653604/300/491653604-1_5397.webp" alt = "Eyeglasses" />
        <span>Eyeglasses </span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409613/300/492409613-1_6272.webp" alt = "Sunglasses" />
        <span>Sunglasses </span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493176635/300/493176635-1.jpeg" alt = "Computer Glasses" />
        <span>Computer Glasses </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493661565/300/493661565-1.jpeg" alt = "Reading Glasses" />
        <span>Reading Glasses </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492410162/300/492410162-1.jpeg" alt = "Contact Lenses" />
        <span>Contact Lenses </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409617/300/492409617-1.jpeg" alt = "Accessories" />
        <span>Accessories </span>
        </div>
        
        </div></>
  );
};

export default kidsCategory;
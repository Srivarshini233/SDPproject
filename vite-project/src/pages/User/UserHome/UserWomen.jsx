import React from "react";
import { useNavigate } from "react-router-dom";

import '../UserHome/Userfile.css';
const WomenCategory = () => {
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
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1704974973Frame_1597879646.webp" alt = "Eyeglasses" />
        <span>BarbieDolls</span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492337047/300/492337047-1.jpeg" alt = "Sunglasses" />
        <span>Tortises </span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491653600/300/491653600-1_6954.webp" alt = "Computer Glasses" />
        <span>Computer Glasses </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1704975282Frame_1597879648.webp" alt = "Reading Glasses" />
        <span>Reading Glasses </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1704974571Frame_1597879652.webp" alt = "Contact Lenses" />
        <span>Contact Lenses </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492362715/300/492362715-1.webp" alt = "Accessories" />
        <span>Accessories </span>
        </div>
        
        </div></>
  );
};

export default WomenCategory;
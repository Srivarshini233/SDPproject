import React from "react";
import { useNavigate } from "react-router-dom";

import '../UserHome/Userfile.css';
const MenCategory = () => {
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
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491635724/300/491635724-1.webp" alt = "Eyeglasses" />
        <span>Marvel Avengers </span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493176635/300/493176635-1.jpeg" alt = "Sunglasses" />
        <span>Block Connect</span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493174876/300/493174876-1_5411.webp" alt = "Computer Glasses" />
        <span>headphones </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491959859/300/491959859-1.webp" alt = "Reading Glasses" />
        <span>Cycles</span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491334540/300/491334540-1.webp" alt = "Contact Lenses" />
        <span>Puzzles </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493174343/300/493174343_5466.jpeg" alt = "Accessories" />
        <span>FootBall</span>
        </div>
        
        </div></>
  );
};

export default MenCategory;
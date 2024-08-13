import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./UserHome.css"; // Import your custom styles
import MenCategory from "./UserMen";
import WomenCategory from "./UserWomen";
import KidsCategory from "./UserKids";
import { useNavigate } from "react-router-dom";
import { User } from "@/services/user";
import Footer from "@/components/web/Footer";
import { authService } from "@/services/auth";
import UserSettings from "./UserSettings";

const UserHome = ({handleNavigation}) => {
  const [username,setUsername]=useState(null)
   // Replace with actual user data
  const [activeCategory, setActiveCategory] = useState("Men");
  const [dropdown,setDropdown]= useState(null);
    const handleMouseEnter = (menu) => {
      setDropdown(menu);
    };
    const usernameData = async () => {
      const data = await User.getUsername()
      return setUsername(data);
  };
  const navigate = useNavigate();
  const handleNavi = (path) => {
    authService.SignOut()
    navigate(path);
}; 
  usernameData()
    const handleMouseLeave = () => {
      setDropdown(null);
    };
   const handleUser=(path)=>{
    navigate(path);
   }
  return (
    <div className=" bg-gray-100">
    <nav className="bg-blue-200 shadow-md p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl text-fuchsia-700 justify-start font-serif">TOYTIDE</div>
        <div className="flex space-x-6">
          <div
            onMouseEnter={() => handleMouseEnter('ages')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <div className="text-lg text-purple-800 cursor-pointer">Ages</div>
            {dropdown === 'ages' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <div className="p-2">0-2 years</div>
                <div className="p-2">3-4 years</div>
                <div className="p-2">5-7 years</div>
                <div className="p-2">8-12 years</div>
                <div className="p-2">Teens</div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('category')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <div className="text-lg  text-purple-800 cursor-pointer">Category</div>
            {dropdown === 'category' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <div className="p-2">Action Figures</div>
                <div className="p-2">Dolls</div>
                <div className="p-2">Educational</div>
                <div className="p-2">Games</div>
                <div className="p-2">Outdoor</div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('brand')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <div className="text-lg  text-purple-800 cursor-pointer">Brand</div>
            {dropdown === 'brand' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <div className="p-2">Lego</div>
                <div className="p-2">Mattel</div>
                <div className="p-2">Hasbro</div>
                <div className="p-2">Fisher-Price</div>
                <div className="p-2">Playmobil</div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('deals')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <div className="text-lg  text-purple-800 cursor-pointer">Deals & Promotions</div>
            {dropdown === 'deals' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <div className="p-2">Discounts</div>
                <div className="p-2">Buy 1 Get 1</div>
                <div className="p-2">Clearance</div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('characters')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <div className="text-lg  text-purple-800 cursor-pointer">Characters</div>
            {dropdown === 'characters' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <div className="p-2">Disney</div>
                <div className="p-2">Marvel</div>
                <div className="p-2">Star Wars</div>
                <div className="p-2">Pokemon</div>
                <div className="p-2">Transformers</div>
              </div>
            )}
          </div>
        </div>
        {/* <div
            onMouseEnter={() => handleMouseEnter('welcome')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          > */}
        <div className="text-lg  text-purple-800 flex items-center pr-2">
          
          <div className="pl-3 p-3 font-semibold" onClick={()=>handleUser("/usersettings")}>{username}</div>
          <div  className="pl-4 p-3"><button onClick={()=>handleNavi("/")} > LogOut </button></div>
          {/* {dropdown==='welcome' &&(
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">

              <div className="p-2 bg-red-600"onClick = {() => handleNavi("/")}>Logout</div>
            </div> */}
          {/* )

          } */}
   
        </div>
      </div>
    </nav>

      <div className=" mt-8">
        <div className="w-full h-[50vh] relative">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            className="overflow-hidden h-full"
          >
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1721974021Barbie-Hamleys_1817x747_HomePage_(1).webp"
                alt="Toy 1"
              />
              <p className="legend">Lego Star Wars</p>
            </div>
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17213777841817x747_Gaming_1.webp"
                alt="Toy 2"
              />
              <p className="legend">Barbie Dreamhouse</p>
            </div>
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1719403759Desktop_Banner_(4).webp"
                alt="Toy 3"
              />
              <p className="legend">Hot Wheels Track</p>
            </div>
          </Carousel>
        </div>
        <div className="shop-by-category mb-8">
          <h2 className="text-2xl font-bold mb-4">Explore the toys in ToyTide</h2>
          <div className="category-tabs flex justify-center mb-4">
            <button
              className={`mx-2 px-4 py-2 rounded ${
                activeCategory === "Men" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveCategory("Men")}
            >
              BOYS
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded ${
                activeCategory === "Women" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveCategory("Women")}
            >
              GIRLS
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded ${
                activeCategory === "Kids" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveCategory("Kids")}
            >
              KIDS
            </button>
          </div>
          <div className="category-content">
            {activeCategory === "Men" && <MenCategory />}
            {activeCategory === "Women" && <WomenCategory />}
            {activeCategory === "Kids" && <KidsCategory />}
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] relative">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            className="overflow-hidden h-full"
          >
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1721895998Website_Banner.webp"
                alt="Toy 1"
              />
              <p className="legend">Lego Star Wars</p>
            </div>
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1721632783Web_banner_1817x747px_(2).webp"
                alt="Toy 2"
              />
              <p className="legend">Barbie Dreamhouse</p>
            </div>
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17216505861817x747_NGF.webp"
                alt="Toy 3"
              />
              <p className="legend">Hot Wheels Track</p>
            </div>
          </Carousel>
        </div>
        <Footer/>
    </div>
  
  );
};

export default UserHome;

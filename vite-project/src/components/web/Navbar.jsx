import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
    const linksData = [
        {
            title:'Home',
            link :'/'
        },
        {
            title:'Login',
            link :'/login'
        },
        {
            title:'Register',
            link :'/register'
        },
    ]
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className='w-screen absolute h-[10vh]  flex flex-row justify-center items-center  border-b-2 border-primary/10 g-10 navbar'>
             <div className='h-full w-1/4 flex flex-row justify-center items-center'>
              TOYTIDE
             </div>
             <nav className="m-14 pr-4">
        <button onClick={() => handleNavigation("/")} className="nav-button pr-4" >
          Home
        </button>
        <button onClick={() => handleNavigation("/login")} className="nav-button pr-4">
          Login❤
        </button>
        <button onClick={() => navigate("/register")} className="nav-button">Register</button>
      </nav>
        </div>
    )
}

export default Navbar












































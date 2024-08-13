import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Web/Home';
import Login from './pages/Web/Login';
import Register from './pages/Web/Register';
import Notfound from './pages/Web/Notfound';
import Weblayout from './layout/Weblayout';
import Userlayout from './layout/Userlayout';
import ShopByCategory from './pages/User/UserHome/UserLanding';
import ToyProduct from './pages/User/UserHome/UserProduct';
import Adminlayout from './layout/Adminlayout';
import WishList from './pages/User/UserHome/WishList';
import StoreProvider from './StoreProvider'; // Import the StoreProvider
import Cart from './pages/User/UserHome/Cart';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUsers from './pages/Admin/AdminUsers';
import BuyNow from './pages/User/UserHome/BuyNow';
import OrderDetails from './pages/User/UserHome/ConfirmPage';
import AdminProducts from './pages/Admin/AdminProduct';
import AdminOrders from './pages/Admin/AdminOrder';
import UserSettings from './pages/User/UserHome/UserSettings';
const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Weblayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/notfound' element={<Notfound />} />
      
          </Route>
          <Route element={<Userlayout />}>
            <Route path='/shopbycategory' element={<ShopByCategory />} />
            <Route path='/toyproduct' element={<ToyProduct />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path="/buynow" element={<BuyNow />} />
            <Route path="/confirmpage" element={<OrderDetails />} />
            <Route path="/usersettings" element={<UserSettings />} />
            
          </Route>
          <Route element={<Adminlayout />}>
            <Route path='admin/dashboard' element={<AdminDashboard />} />
            <Route path='admin/users' element={<AdminUsers />} />
            <Route path='admin/products' element={<AdminProducts/>} />
            <Route path='admin/orders' element={<AdminOrders/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

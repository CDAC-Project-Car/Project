import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/home";
import Sell from "./pages/sell";
import Buy from "./pages/buy";
import Compare from './pages/compare';
import Login from './pages/login';
import Register from './pages/register';
import { ToastContainer, toast } from 'react-toastify';
import Cart from './pages/cart';
import MyCarList from './pages/mylistedcars';
import MyOrders from './pages/myorders';


function App() {
  return (<div>
        <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/buy" element={<Buy/>}/>
        <Route path="/sell" element={<Sell/>}/>
        <Route path="/compare" element={<Compare/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path="/mylistedcars" element={<MyCarList/>}/>
        </Routes>
        <ToastContainer />

  </div>
  
  );
}

export default App;

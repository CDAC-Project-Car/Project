import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SellCar from './pages/sellcar';
import MyCarList from './pages/myListedCars';
import MyOrders from './pages/myOrders';

function App() {
  return (<div>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sell' element={<SellCar />} />
      <Route path='/mycars' element={<MyCarList />} />
      <Route path='/orders' element={<MyOrders />} />
    </Routes>

  </div>


    
  );
}

export default App;

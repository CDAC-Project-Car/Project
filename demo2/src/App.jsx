import 'bootstrap/dist/css/bootstrap.css';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Compare from './pages/Compare';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="container-fluid">
      
      
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/buy" element={<Buy/>}/>
      <Route path="/sell" element={<Sell/>}/>
      <Route path="/compare" element={<Compare/>}/>
      </Routes>
      <ToastContainer />


    </div>
  );
}

export default App;

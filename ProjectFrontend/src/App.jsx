import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sell from "./pages/sell";
import Buy from "./pages/buy";
import Compare from "./pages/compare";
import Login from "./pages/login";
import Register from "./pages/register";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/cart";
import MyCarList from "./pages/mylistedcars";
import MyOrders from "./pages/myorders";
import CompareRender from "./pages/compareRender";
import { LocationProvider } from "./data/LocationContext";

function App() {
  return (

    /* 
    
    wrap your page component like this for locaion (if time permits will later reduce this)
    <LocationProvider>
              <Home />
            </LocationProvider> */
    <div>
      <Routes>
        {/* Routes that need LocationProvider */}
        <Route
          path="/home"
          element={
            <LocationProvider>
              <Home />
            </LocationProvider>
          }
        />
        <Route
          path="/buy"
          element={
            <LocationProvider>
              <Buy />
            </LocationProvider>
          }
        />
        <Route
          path="/sell"
          element={
            <LocationProvider>
              <Sell />
            </LocationProvider>
          }
        />
        <Route
          path="/compare"
          element={
            <LocationProvider>
              <Compare />
            </LocationProvider>
          }
        />
        <Route
          path="/cart"
          element={
            <LocationProvider>
              <Cart />
            </LocationProvider>
          }
        />
        <Route
          path="/myorders"
          element={
            <LocationProvider>
              <MyOrders />
            </LocationProvider>
          }
        />
        <Route
          path="/mylistedcars"
          element={
            <LocationProvider>
              <MyCarList />
            </LocationProvider>
          }
        />
        <Route
          path="/compareRender"
          element={
            <LocationProvider>
              <CompareRender />
            </LocationProvider>
          }
        />

        {/* Routes that don't need LocationProvider */}
        <Route index element={ <LocationProvider>
              <Home />
            </LocationProvider>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

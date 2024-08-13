import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { LocationContext } from "../data/LocationContext";
import { toast } from "react-toastify";

function MainHome() {
  const { location } = useContext(LocationContext);
  const [filters, setFilters] = useState({
    fuelType: "",
    bodyType: "",
    minKm: "",
    maxKm: "",
    minPrice: "",
    maxPrice: "",
    brand: "",
  });
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch default cars based on location
    axios
      .get(`http://localhost:8080/cars/filter/location/${location}`)
      .then((response) => setCars(response.data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, [location]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = () => {
    // Apply filters by calling backend APIs
    const { fuelType, bodyType, minKm, maxKm, minPrice, maxPrice, brand } =
      filters;
    let url = "http://localhost:8080/cars/filter";
    if (fuelType) url += `/fuelType/${fuelType}`;
    if (bodyType) url += `/bodyType/${bodyType}`;
    if (minKm && maxKm) url += `/km/${minKm}/${maxKm}`;
    if (minPrice && maxPrice) url += `/price/${minPrice}/${maxPrice}`;
    if (brand) url += `/brand/${brand}`;
    axios
      .get(url)
      .then((response) => setCars(response.data))
      .catch((error) => console.error("Error fetching cars:", error));
  };

  const handleCardClick = (carId) => {
    navigate(`/buy/${carId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 col-lg-3 mb-4 sticky-top">
            <div
              className="p-4"
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                border: "2px solid #e74c3c",
              }}
            >
              <h5 style={{ color: "#e74c3c", fontSize: "1.25rem" }}>Filters</h5>
              <div className="mb-3">
                <label>Fuel Type</label>
                <select
                  className="form-control"
                  name="fuelType"
                  onChange={handleFilterChange}
                >
                  <option value="">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Body Type</label>
                <select
                  className="form-control"
                  name="bodyType"
                  onChange={handleFilterChange}
                >
                  <option value="">Select Body Type</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Hatchback">Hatchback</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Kilometers Driven</label>
                <input
                  type="number"
                  className="form-control"
                  name="minKm"
                  placeholder="Min Km"
                  onChange={handleFilterChange}
                />
                <input
                  type="number"
                  className="form-control mt-2"
                  name="maxKm"
                  placeholder="Max Km"
                  onChange={handleFilterChange}
                />
              </div>
              <div className="mb-3">
                <label>Price Range</label>
                <input
                  type="number"
                  className="form-control"
                  name="minPrice"
                  placeholder="Min Price"
                  onChange={handleFilterChange}
                />
                <input
                  type="number"
                  className="form-control mt-2"
                  name="maxPrice"
                  placeholder="Max Price"
                  onChange={handleFilterChange}
                />
              </div>
              <div className="mb-3">
                <label>Car Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  placeholder="Brand"
                  onChange={handleFilterChange}
                />
              </div>
              <button className="btn btn-danger w-100" onClick={applyFilters}>
                Apply Filters
              </button>
            </div>
          </div>
          <div className="col-md-8 col-lg-9">
            <h2>Cars</h2>
            <h6
              className="mt-3 mb-2"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
               {cars.length} available
            </h6>
            <div className="row">
              {cars.map((car) => (
                <div
                  className="col-md-4 mb-4"
                  key={car.carId}
                  onClick={() => handleCardClick(car.carId)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="card"
                    style={{
                      transition: "transform 0.2s, box-shadow 0.2s",
                      width: "100%",
                      height: "auto",
                      maxWidth: "300px",
                      minHeight: "400px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 8px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <img
                      src={`http://localhost:8080/${car.image}`}
                      className="card-img-top"
                      alt={`${car.modelName}`}
                      style={{
                        objectFit: "cover",
                        height: "200px",
                        width: "100%",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ fontSize: "1rem", fontWeight: "bold" }}
                      >
                        {car.carModelCompany} {car.modelName}
                      </h5>
                      
                      <p className="card-text" style={{ fontSize: "0.8rem" }}>
                        Transmission: {car.transmission}
                      </p>
                      <p className="card-text" style={{ fontSize: "0.8rem" }}>
                        Location: {car.rtoLocation}
                      </p>
                      <p className="card-text" style={{ fontSize: "0.8rem" }}>
                        Year: {car.carMfgYear}
                      </p>
                      <p className="card-text" style={{ fontSize: "0.8rem" }}>
                        Driven: {car.kmsDriven} km
                      </p>
                      <p
                        className="card-text"
                        style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                      >
                        Price: ₹{car.carSellingPrice}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHome;

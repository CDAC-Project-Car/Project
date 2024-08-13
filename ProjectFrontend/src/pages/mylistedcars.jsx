import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { myListedCarsApi } from "../services/car";
import axios from "axios";

function MyCarList() {

    const [carData, setCarData] = useState([]);

    const load = async () => {
        
        //TO DO - Get ID dynamically from somewhere else, for now using static id

        const result = await myListedCarsApi(4);
        
        setCarData(result)
    };

    useEffect(() => {
        load()
    }, []);

    return <div>

        <Navbar />
        <div className="container">
            <h3 className="text-center mb-4 mt-4" style={{ fontWeight: 'bold' }}>Listed Cars</h3>

            <div className="row mt-5">
                <div className="col-2"></div>

                <div className="col-8">
                    <center>
                        <table className="table table-striped md-5">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Company</th>
                                    <th>Model</th>
                                    <th>Variant</th>
                                    <th>Selling Price</th>
                                    <th>Listing Date</th>
                                    <th>Car Status</th>
                                    <th><center>Action</center></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carData.map((car, index) => (
                                        <tr key={index}>
                                            <td>{car.carModelCompany}</td>
                                            <td>{car.modelName}</td>
                                            <td>{car.carSeriesName}</td>
                                            <td>Rs. {car.carSellingPrice.toFixed(2)} /-</td>
                                            {/* <td>{new Date(car.carListingDate).toLocaleDateString()}</td> */}
                                            <td>{car.carListingDate}</td>
                                            <td>{car.carStatus ? "Available" : "Sold"}</td>
                                            <td>
                                                <button className="btn btn-outline-primary me-3"

                                                    //BUTTON APIS REMAINING

                                                    // onClick={}
                                                    >
                                                    <i class="fa-regular fa-pen-to-square"></i>
                                                </button>
                                                <button className="btn btn-outline-danger">
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>

                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </center>
                </div>

                <div className="col-2"></div>
            </div>

        </div>
        <Footer />

    </div>
}

export default MyCarList;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { myListedCarsApi } from "../services/car";
import { useNavigate } from "react-router-dom";
import { deleteCar } from "../services/car";
import { toast } from "react-toastify";

function MyCarList() {

    const navigate = useNavigate();
    const [carData, setCarData] = useState([]);
    const id = sessionStorage.getItem('userId')

    const load = async () => {
        

        const result = await myListedCarsApi(id);
        
        setCarData(result)
    };

    useEffect(() => {
        load()
    }, []);

    function onEdit()
    {
        navigate('/edit')
    }

    const onDelete = async (e)=>
    {
        const id = e.target.value;
        const result = await deleteCar(id);
        toast.success(result)

    }

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

                                                    onClick={onEdit}
                                                    >
                                                    <i class="fa-regular fa-pen-to-square"></i>
                                                </button>
                                                <button className="btn btn-outline-danger" value={car.carId} onClick={(e)=>{onDelete(e)}}>
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
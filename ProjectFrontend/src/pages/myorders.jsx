import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getMyOrders } from "../services/car";

function MyOrders() {

    const [carData, setCarData] = useState([]);
    const id = sessionStorage.getItem('userId')

    const load = async () => {


        const result = await getMyOrders(id);
        setCarData(result)

    };

    useEffect(() => {
        load()
    }, []);


    return <div>

        <Navbar />
        <div className="container">
            <h3 className="text-center mb-4 mt-4" style={{ fontWeight: 'bold' }}>My Orders</h3>

            <div className="row mt-5">
                <div className="col-1"></div>

                <div className="col-10">
                    <center>
                        <table className="table table-striped table-bordered md-5">
                            <thead className="thead-dark">
                               {carData.length ? <tr>
                                    <th>Transaction id</th>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Company</th>
                                    <th>Model</th>
                                    <th>Variant</th>
                                    <th>Car number</th>

                                </tr> : <h3>No orders </h3>}
                            </thead>
                            <tbody>
                                {
                                    carData.map((car, index) => (
                                        <tr key={index}>
                                            <td>{car.transactionId}</td>
                                            <td>{new Date(car.transactionDate).toLocaleDateString()}</td>
                                            <td>{car.transactionType}</td>
                                            <td>{car.transactionAmount}</td>
                                            <td>{car.carModelCompany}</td>
                                            <td>{car.modelName}</td>
                                            <td>{car.carSeriesName}</td>
                                            <td>{car.carNumber}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </center>
                </div>

                <div className="col-1"></div>
            </div>

        </div>
        <Footer />

    </div>
}

export default MyOrders;
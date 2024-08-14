import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getMyWishlist, deleteCarFromCart } from "../services/car";
import { toast } from "react-toastify";

function WishList() {

    const [carData, setCarData] = useState([]);
    // const [resultMsg, setResultMsg] = useState('');

    const load = async () => {

        //TO DO - Get ID dynamically from somewhere else, for now using hardcoded id

        const result = await getMyWishlist(1);
        setCarData(result)


    };

    useEffect(() => {
        load()
    }, []);

    // function onDelete() {

    //     const deleteCartCar = async () => {

    //         //TO DO - Get IDs dynamically from somewhere else, for now using hardcoded id

    //         const result = await deleteCarFromCart(1,9);
    //         setResultMsg(result)
    //         toast.success(result.message)
    //     }

        
    // }
    // useEffect(() => {
    //     deleteCartCar();
    //     load();
    // }, [resultMsg]);

    return <div>

        <Navbar />
        <div className="container">
            <h3 className="text-center mb-4 mt-4" style={{ fontWeight: 'bold' }}>My Wishlist</h3>

            <div className="row mt-5">
                <div className="col-2"></div>

                <div className="col-8">
                    <center>
                        <table className="table table-striped md-5">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Company</th>
                                    <th>Model</th>
                                    <th>Selling Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carData.map((car, index) => (
                                        <tr key={index}>
                                            <td>{car.carModelCompany}</td>
                                            <td>{car.modelName}</td>
                                            <td>Rs. {car.carSellingPrice.toFixed(2)}/-</td>
                                            <td>

                                                <button className="btn btn-outline-danger"

                                                    //BUTTON APIS REMAINING

                                                    // onClick={onDelete}
                                                >
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

export default WishList;
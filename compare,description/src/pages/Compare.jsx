import Header from "../components/Header";
import Footer from "../components/Footer";
import Description from "../components/Description";
import 'bootstrap/dist/css/bootstrap.css';
export default function Compare() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="title"> Compare page</h2>

                <div class="container text-center">
                    <div class="row">
                        <div class="col-2">

                            <table className="table table-bordered table-stripped table-secondary">
                                <thead>
                                    <tr>
                                        <th>Basic Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        <tr> <img src="#" alt="#" /> </tr>
                                        <tr>Price</tr>
                                        <tr>Engine Type</tr>
                                        <tr>Displacement (cc)</tr>
                                        <tr>No. of Cylinders</tr>
                                        <tr>Max Power (bhp@rpm)</tr>
                                        <tr>Steering Type</tr>
                                        <tr>Fuel Type</tr>
                                        <tr>Fuel Tank Capacity (Litres)</tr>
                                        <tr>Mileage ARAI (kmpl)</tr>

                                    
                                </tbody>
                            </table>

                        </div>
                        <div class="col">

                            <table class="table table-bordered table-striped table-primary">
                                <thead>
                                    <tr>
                                        <th>Tata Harrier</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><img src="#" alt="#" /></tr>
                                    <tr>Rs.31,16,220  </tr>
                                    <tr> Kryotec 2.0L </tr>
                                    <tr> 1956 </tr>
                                    <tr> 4 Cylinder</tr>
                                    <tr> 167.62bhp@3750rpm </tr>
                                    <tr> Electric </tr>
                                    <tr> Diesel </tr>
                                    <tr> 50 </tr>
                                    <tr>  16.8 </tr>



                                </tbody>
                            </table>

                        </div>
                        <div class="col">

                            <table className="table table-bordered table-striped table-danger">
                                <thead>
                                    <tr>
                                        <th>Mahindra XUV700</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><img src="#" alt="#" /></tr>
                                    <tr> Rs.29,45,420 </tr>
                                    <tr> mSTALLION (TGDi) </tr>
                                    <tr> 1999 </tr>
                                    <tr> 4 Cylinder</tr>
                                    <tr> 197.13bhp@5000rpm </tr>
                                    <tr> Power </tr>
                                    <tr>  Petrol</tr>
                                    <tr> 60 </tr>
                                    <tr> 13 </tr>



                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

                <hr />

                <h3>Description container</h3>


            </div>

            <Description/>

            <Footer />
        </div>
    )
}
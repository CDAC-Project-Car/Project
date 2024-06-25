import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function Sell()
{
    return(
    <div>
        <Navbar />
        <div className="container">


            <h3 style={{fontWeight: 'bold'}}><center>Sell Car</center></h3>
            <div className="row mt-5">

                <div className="col-2"></div>

                <div className="col-8">

                    <div className="row">

                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">Car Name</label>
                                <input type="text" className="form-control" />



                            </div>
                        </div>

                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">Model</label>

                                <input type="text" className="form-control" />



                            </div>
                        </div>


                        {/* row-1 */}
                    </div>

                    <div className="row">

                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">KM Driven</label>
                                <input type="number" className="form-control" />

                            </div>
                        </div>

                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">Past Owners</label>
                                <input type="number" className="form-control" />

                            </div>
                        </div>


                        {/* row-2 */}
                    </div>
                    <div className="row">

                        <div className="col">
                            <div className="mb-3">

                                <label htmlFor="" className="me-2" >Insurance</label>
                                <input type="radio" name="ins" />
                                <label htmlFor="" className="me-2">Yes</label>
                                <input type="radio" name="ins" />
                                <label htmlFor="">No</label>

                            </div>
                        </div>

                        <div className="col">
                            <div className="mb-3">
                                

                                <label htmlFor="" className="mb-1"  >Upload Image</label>
                                <br />
                                <input type="file" className="mt-2" />




                            </div>
                        </div>


                        {/* row-3 */}
                    </div>

                    <div className="row">
                        <div className="mb-3">
                        <label htmlFor="">Car Description</label>
                                <br />
                                <textarea name="" id=""></textarea>

                        </div>
                    </div>


                    <center>
                        <div className="mb-5" >
                            <button className="btn btn-success mt-3">Sell</button>
                            <button className="btn btn-danger ms-3 mt-3">Cancel</button>
                        </div>

                    </center>

                    {/* col-8 */}
                </div>

                {/* col-8 */}
            </div>

            <div className="col-2"></div>


        </div>
        <Footer />

    </div>
    )
}
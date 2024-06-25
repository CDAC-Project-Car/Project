import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function MyOrders()
{
    return(
    <div>
    <Navbar />
    <div className="container">
    <h3 style={{fontWeight: 'bold'}}><center>Orders</center></h3>
        <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col-8"  >

           <center>
           <table className="table table-striped mb-5">
                <thead>
                    <th>Sr No.</th>
                    <th>Car Name</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Transaction Date</th>
                   
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Brezza</td>
                        <td>VXI</td>
                        <td>1029000</td>
                        <td>29/02/2016</td>
                        
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Harrier</td>
                        <td>XM</td>
                        <td>2029000</td>
                        <td>29/02/2020</td>
                         
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Thar</td>
                        <td>XM</td>
                        <td>2029000</td>
                        <td>29/02/2020</td>
                        
                    </tr>



                </tbody>
            </table>
           </center>

        </div>
        <div className="col-2"></div>
        </div>
       

    </div>
    <Footer />

</div>
    )
}
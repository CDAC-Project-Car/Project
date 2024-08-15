import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getCompareCarData } from "../services/car";
function CompareRender() {
  const location = useLocation();

  const dataReceived = location.state;
  const [carData, setCarData] = useState([]);
  const [carM1, setCarData1] = useState("");
  const [carM2, setCarData2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCompareCarData(dataReceived);
      setCarData(result);

      setCarData1(result[0].modelName);
      setCarData2(result[1].modelName);
    };
    fetchData();
  }, []);

  const keyLabelMapping = {
    carModelCompany: "Car Model Company",
    modelName: "Model Name",
    carSeriesName: "Series Name",
    carModelType: "Model Type",
    transmission: "Transmission",
    gearbox: "Gearbox",
    frontBrakeType: "Front Brake Type",
    rearBrakeType: "Rear Brake Type",
    drivetrain: "Drivetrain",
    emissionNorm: "Emission Norm",
    fuelTankCapacity: "Fuel Tank Capacity (Lit)",
    groundClearance: "Ground Clearance (mm)",
    tyreType: "Tyre Type",
    cargoVolume: "Cargo Volume",
    seatingCapacity: "Seating Capacity",
    engineDisplacement: "Engine Displacement (cc)",
    maxPower: "Max Power (bhp) ",
    maxTorque: "Max Torque (nm)",
    noOfCylinders: "Number of Cylinders",
    fuelType: "Fuel Type",
    length: "Length (mm)",
    width: "Width (mm)",
    height: "Height (mm)",
    wheelBase: "Wheelbase (mm)",
    grossWeight: "Gross Weight (kg)",
  };

  // later understand to do
  const allKeys = Array.from(
    new Set(carData.flatMap((car) => Object.keys(car)))
  );

  return (
    <div>
      <Navbar />

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-1"></div>

          <div className="col-10">
            <div className="row mt-3">
              <center><h3 className="mb-3">Comparison</h3></center>
              
              <div className="table-responsive mb-5">
                <table className="table table-striped ">
                  {/* <thead className="thead-dark" style={{backgroundColor:""}}> */}
                  <thead className="thead-dark" style={{ backgroundColor: "#343a40", color: "#ffffff", fontWeight: "bold", borderBottom: "2px solid #dee2e6", height:10 }}>
                    <th>Features</th>
                    
                    <th>{carM1}</th>
                    <th>{carM2}</th>
                  </thead>

                  <tbody>
                    {allKeys.map((key) => {
                      return (
                        <tr>
                          <td style={{fontWeight:"bold"}}>{keyLabelMapping[key]}</td>
                          {carData.map((car) => {
                            return <td>{car[key]}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* col-10 */}
          </div>

          <div className="col-1"></div>

          {/* row */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CompareRender;

// // src/components/Admin/EditCarModel.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
// import './EditCarModel.css';

// const EditCarModel = () => {
//     const [carModel, setCarModel] = useState({
//         carModelCompany: '',
//         modelName: '',
//         carSeriesName: '',
//         carModelType: '',
//         transmission: '',
//         gearbox: '',
//         frontBrakeType: '',
//         rearBrakeType: '',
//         drivetrain: '',
//         emissionNorm: '',
//         fuelTankCapacity: '',
//         groundClearance: '',
//         tyreType: '',
//         cargoVolume: '',
//         seatingCapacity: '',
//         engineDisplacement: '',
//         maxPower: '',
//         maxTorque: '',
//         noOfCylinders: '',
//         fuelType: '',
//         length: '',
//         width: '',
//         height: '',
//         wheelBase: '',
//         grossWeight: ''
//     });
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     useEffect(() => {
//         // Fetch current car model details (replace with your endpoint)
//         axios.get('http://localhost:8080/api/admin/getCarModel/1')
//             .then(response => setCarModel(response.data))
//             .catch(error => setError('Failed to fetch car model details.'));
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCarModel(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put('http://localhost:8080/api/admin/editModel', carModel)
//             .then(response => setSuccess('Car model updated successfully!'))
//             .catch(error => setError('Failed to update car model.'));
//     };

//     return (
//         <Container className="mt-5">
//             <h2 className="text-center mb-4">Edit Car Model</h2>
//             {error && <Alert variant="danger">{error}</Alert>}
//             {success && <Alert variant="success">{success}</Alert>}
//             <Card className="shadow-lg">
//                 <Card.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="carModelCompany">
//                                     <Form.Label>Car Model Company</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter car model company"
//                                         name="carModelCompany"
//                                         value={carModel.carModelCompany}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="modelName">
//                                     <Form.Label>Model Name</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter model name"
//                                         name="modelName"
//                                         value={carModel.modelName}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="carSeriesName">
//                                     <Form.Label>Car Series Name</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter car series name"
//                                         name="carSeriesName"
//                                         value={carModel.carSeriesName}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="carModelType">
//                                     <Form.Label>Car Model Type</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter car model type"
//                                         name="carModelType"
//                                         value={carModel.carModelType}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="transmission">
//                                     <Form.Label>Transmission</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter transmission"
//                                         name="transmission"
//                                         value={carModel.transmission}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="gearbox">
//                                     <Form.Label>Gearbox</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter number of gears"
//                                         name="gearbox"
//                                         value={carModel.gearbox}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="frontBrakeType">
//                                     <Form.Label>Front Brake Type</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter front brake type"
//                                         name="frontBrakeType"
//                                         value={carModel.frontBrakeType}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="rearBrakeType">
//                                     <Form.Label>Rear Brake Type</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter rear brake type"
//                                         name="rearBrakeType"
//                                         value={carModel.rearBrakeType}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="drivetrain">
//                                     <Form.Label>Drivetrain</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter drivetrain"
//                                         name="drivetrain"
//                                         value={carModel.drivetrain}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="emissionNorm">
//                                     <Form.Label>Emission Norm</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter emission norm"
//                                         name="emissionNorm"
//                                         value={carModel.emissionNorm}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="fuelTankCapacity">
//                                     <Form.Label>Fuel Tank Capacity (L)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter fuel tank capacity"
//                                         name="fuelTankCapacity"
//                                         value={carModel.fuelTankCapacity}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="groundClearance">
//                                     <Form.Label>Ground Clearance (mm)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter ground clearance"
//                                         name="groundClearance"
//                                         value={carModel.groundClearance}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="tyreType">
//                                     <Form.Label>Tyre Type</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter tyre type"
//                                         name="tyreType"
//                                         value={carModel.tyreType}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="cargoVolume">
//                                     <Form.Label>Cargo Volume (L)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter cargo volume"
//                                         name="cargoVolume"
//                                         value={carModel.cargoVolume}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="seatingCapacity">
//                                     <Form.Label>Seating Capacity</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter seating capacity"
//                                         name="seatingCapacity"
//                                         value={carModel.seatingCapacity}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="engineDisplacement">
//                                     <Form.Label>Engine Displacement (cc)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter engine displacement"
//                                         name="engineDisplacement"
//                                         value={carModel.engineDisplacement}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="maxPower">
//                                     <Form.Label>Max Power (HP)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter max power"
//                                         name="maxPower"
//                                         value={carModel.maxPower}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="maxTorque">
//                                     <Form.Label>Max Torque (Nm)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter max torque"
//                                         name="maxTorque"
//                                         value={carModel.maxTorque}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="noOfCylinders">
//                                     <Form.Label>Number of Cylinders</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter number of cylinders"
//                                         name="noOfCylinders"
//                                         value={carModel.noOfCylinders}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="fuelType">
//                                     <Form.Label>Fuel Type</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter fuel type"
//                                         name="fuelType"
//                                         value={carModel.fuelType}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="length">
//                                     <Form.Label>Length (mm)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter length"
//                                         name="length"
//                                         value={carModel.length}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="width">
//                                     <Form.Label>Width (mm)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter width"
//                                         name="width"
//                                         value={carModel.width}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="height">
//                                     <Form.Label>Height (mm)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter height"
//                                         name="height"
//                                         value={carModel.height}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Group controlId="wheelBase">
//                                     <Form.Label>Wheel Base (mm)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter wheel base"
//                                         name="wheelBase"
//                                         value={carModel.wheelBase}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group controlId="grossWeight">
//                                     <Form.Label>Gross Weight (kg)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder="Enter gross weight"
//                                         name="grossWeight"
//                                         value={carModel.grossWeight}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Button variant="primary" type="submit" className="btn-block mt-3">
//                             Update Car Model
//                         </Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };

// export default EditCarModel;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import './EditCarModel.css';
import { useParams } from 'react-router-dom';

const EditCarModel = () => {
    const { carModelId } = useParams(); // Get the carModelId from the URL parameters
    const [carModel, setCarModel] = useState({
        carModelCompany: '',
        modelName: '',
        carSeriesName: '',
        carModelType: '',
        transmission: '',
        gearbox: '',
        frontBrakeType: '',
        rearBrakeType: '',
        drivetrain: '',
        emissionNorm: '',
        fuelTankCapacity: '',
        groundClearance: '',
        tyreType: '',
        cargoVolume: '',
        seatingCapacity: '',
        engineDisplacement: '',
        maxPower: '',
        maxTorque: '',
        noOfCylinders: '',
        fuelType: '',
        length: '',
        width: '',
        height: '',
        wheelBase: '',
        grossWeight: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (carModelId) {
            axios.get(`http://localhost:8080/beforeEditModel/${carModelId}`)
                .then(response => setCarModel(response.data))
                .catch(error => setError('Failed to fetch car model details.'));
        }
    }, [carModelId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarModel(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/editModel', carModel)
            .then(response => setSuccess('Car model updated successfully!'))
            .catch(error => setError('Failed to update car model.'));
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Edit Car Model</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Card className="shadow-lg">
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="carModelCompany">
                                    <Form.Label>Car Model Company</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter car model company"
                                        name="carModelCompany"
                                        value={carModel.carModelCompany}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="modelName">
                                    <Form.Label>Model Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter model name"
                                        name="modelName"
                                        value={carModel.modelName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="carSeriesName">
                                    <Form.Label>Car Series Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter car series name"
                                        name="carSeriesName"
                                        value={carModel.carSeriesName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="carModelType">
                                    <Form.Label>Car Model Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter car model type"
                                        name="carModelType"
                                        value={carModel.carModelType}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="transmission">
                                    <Form.Label>Transmission</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter transmission"
                                        name="transmission"
                                        value={carModel.transmission}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="gearbox">
                                    <Form.Label>Gearbox</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter number of gears"
                                        name="gearbox"
                                        value={carModel.gearbox}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="frontBrakeType">
                                    <Form.Label>Front Brake Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter front brake type"
                                        name="frontBrakeType"
                                        value={carModel.frontBrakeType}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="rearBrakeType">
                                    <Form.Label>Rear Brake Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter rear brake type"
                                        name="rearBrakeType"
                                        value={carModel.rearBrakeType}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="drivetrain">
                                    <Form.Label>Drivetrain</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter drivetrain"
                                        name="drivetrain"
                                        value={carModel.drivetrain}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="emissionNorm">
                                    <Form.Label>Emission Norm</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter emission norm"
                                        name="emissionNorm"
                                        value={carModel.emissionNorm}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="fuelTankCapacity">
                                    <Form.Label>Fuel Tank Capacity (L)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter fuel tank capacity"
                                        name="fuelTankCapacity"
                                        value={carModel.fuelTankCapacity}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="groundClearance">
                                    <Form.Label>Ground Clearance (mm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter ground clearance"
                                        name="groundClearance"
                                        value={carModel.groundClearance}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="tyreType">
                                    <Form.Label>Tyre Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter tyre type"
                                        name="tyreType"
                                        value={carModel.tyreType}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="cargoVolume">
                                    <Form.Label>Cargo Volume (L)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter cargo volume"
                                        name="cargoVolume"
                                        value={carModel.cargoVolume}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="seatingCapacity">
                                    <Form.Label>Seating Capacity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter seating capacity"
                                        name="seatingCapacity"
                                        value={carModel.seatingCapacity}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="engineDisplacement">
                                    <Form.Label>Engine Displacement (cc)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter engine displacement"
                                        name="engineDisplacement"
                                        value={carModel.engineDisplacement}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="maxPower">
                                    <Form.Label>Max Power (HP)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter max power"
                                        name="maxPower"
                                        value={carModel.maxPower}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="maxTorque">
                                    <Form.Label>Max Torque (Nm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter max torque"
                                        name="maxTorque"
                                        value={carModel.maxTorque}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="noOfCylinders">
                                    <Form.Label>Number of Cylinders</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter number of cylinders"
                                        name="noOfCylinders"
                                        value={carModel.noOfCylinders}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="fuelType">
                                    <Form.Label>Fuel Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter fuel type"
                                        name="fuelType"
                                        value={carModel.fuelType}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="length">
                                    <Form.Label>Length (mm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter length"
                                        name="length"
                                        value={carModel.length}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="width">
                                    <Form.Label>Width (mm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter width"
                                        name="width"
                                        value={carModel.width}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="height">
                                    <Form.Label>Height (mm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter height"
                                        name="height"
                                        value={carModel.height}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="wheelBase">
                                    <Form.Label>Wheel Base (mm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter wheel base"
                                        name="wheelBase"
                                        value={carModel.wheelBase}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="grossWeight">
                                    <Form.Label>Gross Weight (kg)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter gross weight"
                                        name="grossWeight"
                                        value={carModel.grossWeight}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" className="btn-block mt-3">
                            Update Car Model
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default EditCarModel;

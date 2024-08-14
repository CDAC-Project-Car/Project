import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert, Row, Col, Card, Table } from 'react-bootstrap';
import './AddCarModel.css'; // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function AddCarModel() {
  const [carModel, setCarModel] = useState({
    carModelCompany: '',
    modelName: '',
    carSeriesName: '',
    carModelType: '',
    transmission: '',
    gearbox: 0,
    frontBrakeType: '',
    rearBrakeType: '',
    drivetrain: '',
    emissionNorm: '',
    fuelTankCapacity: 0,
    groundClearance: 0,
    tyreType: '',
    cargoVolume: 0,
    seatingCapacity: 0,
    engineDisplacement: 0,
    maxPower: 0,
    maxTorque: 0,
    noOfCylinders: 0,
    fuelType: '',
    length: 0,
    width: 0,
    height: 0,
    wheelBase: 0,
    grossWeight: 0,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarModel((prevModel) => ({
      ...prevModel,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/admin/addModel', carModel);
      setSuccess('Car model added successfully');
      setError(null);
      setCarModel({
        carModelCompany: '',
        modelName: '',
        carSeriesName: '',
        carModelType: '',
        transmission: '',
        gearbox: 0,
        frontBrakeType: '',
        rearBrakeType: '',
        drivetrain: '',
        emissionNorm: '',
        fuelTankCapacity: 0,
        groundClearance: 0,
        tyreType: '',
        cargoVolume: 0,
        seatingCapacity: 0,
        engineDisplacement: 0,
        maxPower: 0,
        maxTorque: 0,
        noOfCylinders: 0,
        fuelType: '',
        length: 0,
        width: 0,
        height: 0,
        wheelBase: 0,
        grossWeight: 0,
      });
    } catch (error) {
      setError('Error adding car model');
      setSuccess(null);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Add Car Model</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Card className="shadow-sm p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="carModelCompany">
                  <Form.Label>Car Model Company</Form.Label>
                  <Form.Control
                    type="text"
                    name="carModelCompany"
                    value={carModel.carModelCompany}
                    onChange={handleChange}
                    placeholder="Enter car model company"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="modelName">
                  <Form.Label>Model Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="modelName"
                    value={carModel.modelName}
                    onChange={handleChange}
                    placeholder="Enter model name"
                    required
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
                    name="carSeriesName"
                    value={carModel.carSeriesName}
                    onChange={handleChange}
                    placeholder="Enter car series name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="carModelType">
                  <Form.Label>Car Model Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="carModelType"
                    value={carModel.carModelType}
                    onChange={handleChange}
                    placeholder="Enter car model type"
                    required
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
                    name="transmission"
                    value={carModel.transmission}
                    onChange={handleChange}
                    placeholder="Enter transmission type"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="gearbox">
                  <Form.Label>Gearbox</Form.Label>
                  <Form.Control
                    type="number"
                    name="gearbox"
                    value={carModel.gearbox}
                    onChange={handleChange}
                    placeholder="Enter gearbox number"
                    required
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
                    name="frontBrakeType"
                    value={carModel.frontBrakeType}
                    onChange={handleChange}
                    placeholder="Enter front brake type"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="rearBrakeType">
                  <Form.Label>Rear Brake Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="rearBrakeType"
                    value={carModel.rearBrakeType}
                    onChange={handleChange}
                    placeholder="Enter rear brake type"
                    required
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
                    name="drivetrain"
                    value={carModel.drivetrain}
                    onChange={handleChange}
                    placeholder="Enter drivetrain"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="emissionNorm">
                  <Form.Label>Emission Norm</Form.Label>
                  <Form.Control
                    type="text"
                    name="emissionNorm"
                    value={carModel.emissionNorm}
                    onChange={handleChange}
                    placeholder="Enter emission norm"
                    required
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
                    name="fuelTankCapacity"
                    value={carModel.fuelTankCapacity}
                    onChange={handleChange}
                    placeholder="Enter fuel tank capacity"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="groundClearance">
                  <Form.Label>Ground Clearance (mm)</Form.Label>
                  <Form.Control
                    type="number"
                    name="groundClearance"
                    value={carModel.groundClearance}
                    onChange={handleChange}
                    placeholder="Enter ground clearance"
                    required
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
                    name="tyreType"
                    value={carModel.tyreType}
                    onChange={handleChange}
                    placeholder="Enter tyre type"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="cargoVolume">
                  <Form.Label>Cargo Volume (L)</Form.Label>
                  <Form.Control
                    type="number"
                    name="cargoVolume"
                    value={carModel.cargoVolume}
                    onChange={handleChange}
                    placeholder="Enter cargo volume"
                    required
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
                    name="seatingCapacity"
                    value={carModel.seatingCapacity}
                    onChange={handleChange}
                    placeholder="Enter seating capacity"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="engineDisplacement">
                  <Form.Label>Engine Displacement (cc)</Form.Label>
                  <Form.Control
                    type="number"
                    name="engineDisplacement"
                    value={carModel.engineDisplacement}
                    onChange={handleChange}
                    placeholder="Enter engine displacement"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="maxPower">
                  <Form.Label>Max Power (bhp)</Form.Label>
                  <Form.Control
                    type="number"
                    name="maxPower"
                    value={carModel.maxPower}
                    onChange={handleChange}
                    placeholder="Enter max power"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="maxTorque">
                  <Form.Label>Max Torque (Nm)</Form.Label>
                  <Form.Control
                    type="number"
                    name="maxTorque"
                    value={carModel.maxTorque}
                    onChange={handleChange}
                    placeholder="Enter max torque"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="noOfCylinders">
                  <Form.Label>No of Cylinders</Form.Label>
                  <Form.Control
                    type="number"
                    name="noOfCylinders"
                    value={carModel.noOfCylinders}
                    onChange={handleChange}
                    placeholder="Enter number of cylinders"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="fuelType">
                  <Form.Label>Fuel Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="fuelType"
                    value={carModel.fuelType}
                    onChange={handleChange}
                    placeholder="Enter fuel type"
                    required
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
                    name="length"
                    value={carModel.length}
                    onChange={handleChange}
                    placeholder="Enter length"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="width">
                  <Form.Label>Width (mm)</Form.Label>
                  <Form.Control
                    type="number"
                    name="width"
                    value={carModel.width}
                    onChange={handleChange}
                    placeholder="Enter width"
                    required
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
                    name="height"
                    value={carModel.height}
                    onChange={handleChange}
                    placeholder="Enter height"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="wheelBase">
                  <Form.Label>Wheel Base (mm)</Form.Label>
                  <Form.Control
                    type="number"
                    name="wheelBase"
                    value={carModel.wheelBase}
                    onChange={handleChange}
                    placeholder="Enter wheel base"
                    required
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
                    name="grossWeight"
                    value={carModel.grossWeight}
                    onChange={handleChange}
                    placeholder="Enter gross weight"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="w-100 mt-4">
              Add Car Model
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddCarModel;

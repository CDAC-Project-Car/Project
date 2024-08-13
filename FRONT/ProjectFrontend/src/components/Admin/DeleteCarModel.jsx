import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const DeleteCarModel = () => {
    const [carModel, setCarModel] = useState({
        carModelCompany: '',
        modelName: '',
        carSeriesName: ''
    });
    
    const [response, setResponse] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarModel({ ...carModel, [name]: value });
    };

    const handleDeleteCarModel = () => {
        axios.delete('http://localhost:8080/admin/deleteModel', { data: carModel })
            .then(res => setResponse({ type: 'success', message: 'Car model deleted successfully' }))
            .catch(err => setResponse({ type: 'error', message: err.response.data }));
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Delete Car Model</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Car Model Company</Form.Label>
                    <Form.Control
                        type="text"
                        name="carModelCompany"
                        placeholder="Enter Car Model Company"
                        value={carModel.carModelCompany}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Model Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="modelName"
                        placeholder="Enter Model Name"
                        value={carModel.modelName}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Car Series Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="carSeriesName"
                        placeholder="Enter Car Series Name"
                        value={carModel.carSeriesName}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="danger" onClick={handleDeleteCarModel}>
                    Delete Car Model
                </Button>
            </Form>

            {response && (
                <Alert variant={response.type === 'success' ? 'success' : 'danger'} className="mt-4">
                    {response.message}
                </Alert>
            )}
        </Container>
    );
};

export default DeleteCarModel;

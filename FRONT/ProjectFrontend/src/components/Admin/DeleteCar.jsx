import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const DeleteCar = () => {
    const [carId, setCarId] = useState('');
    const [response, setResponse] = useState(null);

    const handleInputChange = (e) => {
        setCarId(e.target.value);
    };

    const handleDeleteCar = () => {
        axios.delete(`/admin/deleteCar/${carId}`)
            .then(res => setResponse({ type: 'success', message: 'Car deleted successfully' }))
            .catch(err => setResponse({ type: 'error', message: err.response.data }));
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Delete Car</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Car ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter car ID"
                        value={carId}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="danger" onClick={handleDeleteCar}>
                    Delete Car
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

export default DeleteCar;

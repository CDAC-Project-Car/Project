import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Card } from 'react-bootstrap';

function DeleteCar() {
    const [carNumber, setCarNumber] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCarNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ensure that the endpoint matches your backend API
            const response = await axios.delete('http://localhost:8080/deleteCar', {
                data: { carNumber }
            });
            setMessage(response.data);
            setError(null);
        } catch (err) {
            setError(err.response?.data || 'Error deleting car');
            setMessage(null);
        }
    };

    return (
        <Card className="shadow-sm p-3 mb-5 bg-white rounded">
            <Card.Body>
                <h3>Delete Car</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="carNumber">
                        <Form.Label>Car Number</Form.Label>
                        <Form.Control
                            type="text"
                            value={carNumber}
                            onChange={handleChange}
                            placeholder="Enter car number"
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Delete Car
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default DeleteCar;

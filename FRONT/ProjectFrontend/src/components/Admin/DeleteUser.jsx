import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const DeleteUser = () => {
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState(null);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDeleteUser = () => {
        axios.delete(`http://localhost:8080/admin/deleteUser/${email}`)
            .then(res => setResponse({ type: 'success', message: 'User deleted successfully' }))
            .catch(err => setResponse({ type: 'error', message: err.response.data }));
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Delete User</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter user email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="danger" onClick={handleDeleteUser}>
                    Delete User
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

export default DeleteUser;

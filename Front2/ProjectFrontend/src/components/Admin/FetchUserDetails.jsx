import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Card, Table } from 'react-bootstrap';

function FetchUserDetails() {
    const [email, setEmail] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/getUser/${email}`);
            setUserDetails(response.data);
            setError(null);
        } catch (error) {
            setError('Error fetching user details');
            setUserDetails(null);
        }
    };

    return (
        <Card className="shadow-sm p-3 mb-5 bg-white rounded">
            <Card.Body>
                <h3>Fetch User Details</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                {userDetails && (
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>User ID</td>
                                <td>{userDetails.userId}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{userDetails.userName}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{userDetails.email}</td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td>{userDetails.mobileNumber}</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>{userDetails.dob}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{userDetails.userAddress}</td>
                            </tr>
                            <tr>
                                <td>Role</td>
                                <td>{userDetails.role}</td>
                            </tr>
                            <tr>
                                <td>Deleted</td>
                                <td>{userDetails.isDeleted ? 'Yes' : 'No'}</td>
                            </tr>
                        </tbody>
                    </Table>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter user's email"
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Fetch Details
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default FetchUserDetails;

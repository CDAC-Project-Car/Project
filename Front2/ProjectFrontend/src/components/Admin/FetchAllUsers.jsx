import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Alert, Card, Container } from 'react-bootstrap';

function FetchAllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/getAllUsers');
                setAllUsers(response.data);
                setError(null);
            } catch (err) {
                setError('Error fetching user details');
            }
        };

        fetchAllUsers();
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">All Users</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {allUsers.length > 0 ? (
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>Date of Birth</th>
                                    <th>Address</th>
                                    <th>Role</th>
                                    <th>Deleted</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((user, index) => (
                                    <tr key={user.email}>
                                        <td>{index + 1}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobileNumber}</td>
                                        <td>{new Date(user.dob).toLocaleDateString()}</td>
                                        <td>{user.userAddress}</td>
                                        <td>{user.role}</td>
                                        <td>{user.isDeleted ? 'Yes' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            ) : (
                <p>No users found.</p>
            )}
        </Container>
    );
}

export default FetchAllUsers;


import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import AddCarModel from '../components/Admin/AddCarModel';
import EditCarModel from '../components/Admin/EditCarModel';
import DeleteCarModel from '../components/Admin/DeleteCarModel';
import DeleteUser from '../components/Admin/DeleteUser';
import DeleteCar from '../components/Admin/DeleteCar';
import './AdminDashboard.css'; // Ensure correct path to your CSS file
import AdminNavbar from '../components/Admin/AdminNavbar';

const AdminDashboard = () => {
    return (
            
        <Container className="admin-dashboard-container mt-5">
            <AdminNavbar />
            <h2 className="text-center mb-4">Admin Dashboard</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="addCarModel">
                <Row>
                    <Col sm={3} className="sidebar">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="addCarModel">Add Car Model</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="editCarModel">Edit Car Model</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="deleteCarModel">Delete Car Model</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="deleteUser">Delete User</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="deleteCar">Delete Car</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="tab-content-area">
                            <Tab.Pane eventKey="addCarModel">
                                <AddCarModel />
                            </Tab.Pane>
                            <Tab.Pane eventKey="editCarModel">
                                <EditCarModel />
                            </Tab.Pane>
                            <Tab.Pane eventKey="deleteCarModel">
                                <DeleteCarModel />
                            </Tab.Pane>
                            <Tab.Pane eventKey="deleteUser">
                                <DeleteUser />
                            </Tab.Pane>
                            <Tab.Pane eventKey="deleteCar">
                                <DeleteCar />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default AdminDashboard;

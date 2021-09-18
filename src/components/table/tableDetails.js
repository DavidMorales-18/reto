import React, { Component, useEffect, useState } from 'react'
import { Container, Row, Col, Table, Button, ButtonGroup, Modal } from 'react-bootstrap';
import { getAllEmployees } from '../bridges/bridgeEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';

function TableDetails() {
    const [employees, setEmployees] = useState([]);

    async function allEmployees() {
        try {
            const resp = await getAllEmployees();
            setEmployees(resp);
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        allEmployees();
    }, [])

    return (
        <>

            <Container>


                <Row className="justify-content-md-center">

                    <Col md="auto">
                        <Modal.Dialog>

                            <Button variant="secondary">Nuevo Registro</Button>

                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Cédula</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Correo electrónico</th>
                                        <th>Acciones</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee) =>
                                        <tr>
                                            <td>{employee['id']}</td>
                                            <td>{employee['celula']}</td>
                                            <td>{employee['last_name']}</td>
                                            <td>{employee['first_name']}</td>
                                            <td>{employee['email']}</td>
                                            <td><ButtonGroup aria-label="Basic example">
                                                <Button variant="secondary">Eliminar</Button>
                                                <Button variant="secondary">Editar</Button>

                                            </ButtonGroup></td>

                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Modal.Dialog>

                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default TableDetails;
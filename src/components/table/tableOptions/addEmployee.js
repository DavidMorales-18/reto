import React from 'react'
import { Button, Form, Card, Container, Row, Col, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddEmployee extends React.Component {
    render() {
        return <>

            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                    <Modal.Dialog>
                        <Modal.Title>Registro de Empleado</Modal.Title>

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>

                                <Form.Group className="mb-3" controlId="formBasicCedula">
                                    <Form.Label>Cédula</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese Cédula" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicNombre">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese Nombre" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicApellido">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese Apellido" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCorreoElectronico">
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese El Correo Electrónico" />
                                </Form.Group>

                                <br></br>

                                <Button variant="primary" type="submit">Registro</Button>
                               

                            </Card.Body>
                        </Card>
                        </Modal.Dialog>

                    </Col>
                </Row>
            </Container>
        </>
    }
}

export default AddEmployee
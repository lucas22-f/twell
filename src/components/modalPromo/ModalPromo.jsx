import { React, useState } from 'react'
import { Button, Modal,Card, Row } from 'react-bootstrap'


function ModalPromo() {

    const [show, setShow] = useState(false);
    // Validación de campo1

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Button className="button warning" onClick={handleShow}>
            Promociones
        </Button>


        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Promos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className='d-flex justify-content-center'>
                    <Card style={{ width: '13rem' }}className='m-3'>
                        <Card.Img variant="top" src="../assets/1.png" />
                        <Card.Body>
                            <Card.Title>Promo 1</Card.Title>
                            <Card.Text>
                            A los 10 viajes tenes 1 viajes gratis
                            </Card.Text>
                            <Button variant="success">Canjear</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}className='m-3'>
                        <Card.Img variant="top" src="../assets/1.png" />
                        <Card.Body>
                            <Card.Title>Promo 2</Card.Title>
                            <Card.Text>
                              A los 40 viajes tenes 2 viajes gratis
                            </Card.Text>
                            <Button variant="success">Canjear</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem'}} className='m-3'>
                        <Card.Img variant="top" src="../assets/1.png" />
                        <Card.Body>
                            <Card.Title>Promo 3</Card.Title>
                            <Card.Text>
                                A los 50 viajes tenes 3 viajes gratis
                            </Card.Text>
                            <Button variant="success">Canjear</Button>
                        </Card.Body>
                    </Card>
                    </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>

            </Modal.Footer>

        </Modal>
    </>
    )
}

export default ModalPromo
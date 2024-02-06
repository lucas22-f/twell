import { React, useState } from 'react'
import { Button, Modal,Card, Row } from 'react-bootstrap'


function ModalSocials() {
    const [show, setShow] = useState(false);
    // Validación de campo1

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Button className="button danger" onClick={handleShow}>
            Redes Sociales
        </Button>


        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Redes Sociales</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className='d-flex justify-content-center'>
                    <Card style={{ width: '13rem',alignItems:"center"}}className='m-3'>
                        <Card.Img style={{width:"120px"}} className='p-3' variant="top" src="../assets/whatsapp.png" />
                        <Card.Body>
                            <Card.Title>WhatsApp</Card.Title>
                            <Card.Text>
                            Contactanos por WhatsApp
                            </Card.Text>
                            <Button variant="success">Contactar</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem',alignItems:"center" }}className='m-3'>
                        <Card.Img style={{width:"120px"}} className='p-3' variant="top" src="../assets/facebook.png" />
                        <Card.Body>
                            <Card.Title>Facebook</Card.Title>
                            <Card.Text>
                             Seguinos en Facebook
                            </Card.Text>
                            <Button variant="success">Seguir</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem',alignItems:"center"}} className='m-3'>
                        <Card.Img style={{width:"120px"}} className='p-3' variant="top" src="../assets/instagram.png" />
                        <Card.Body>
                            <Card.Title>Instagram</Card.Title>
                            <Card.Text>
                                Seguinos en Instagram
                            </Card.Text>
                            <Button variant="success">Seguir</Button>
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

export default ModalSocials
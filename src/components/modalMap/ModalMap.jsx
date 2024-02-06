import {React,useState} from 'react'
import { Button,Modal } from 'react-bootstrap'
function ModalMap() {

    const [show, setShow] = useState(false);
    // Validación de campo1

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
            <Button className="button primary" onClick={handleShow}>
                Ubicacion de la agencia
            </Button>
            

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Nuestra Ubicacion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.5425983887185!2d-58.515359076740985!3d-34.841301063803265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0dbc340c811%3A0x10d2f391834c34a6!2sDorrego%201000%2C%20B1804BDS%20Ezeiza%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1707252814457!5m2!1ses-419!2sar" width="100%" height="300" style={{border:"none"}} allowfullscreen="" loading="lazy"></iframe>
                    
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

export default ModalMap
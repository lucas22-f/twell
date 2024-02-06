import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalMap from '../modalMap/ModalMap';
import ModalPromo from '../modalPromo/ModalPromo';
import ModalSocials from '../ModalSocials/ModalSocials';
function ModalForm() {
    const [show, setShow] = useState(false);
    // Validación de campo1

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <div className='m-3 p-3 shadow border rounded'>
            <h2>Pedi tu remis al 11 3187-0312</h2>
            <Button className="button success" onClick={handleShow}>
                Pedi Tu viaje
            </Button>
            <p>Tarifa: 2000$ Viaje minimo! </p>
            <p>Horarios: 24hs </p>

            <ModalMap></ModalMap>
            <ModalPromo></ModalPromo>
            <ModalSocials></ModalSocials>
            

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Viaje </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdD6jWb3h6NiiR-1mbSWC--CotostmsHFo11D4d6UBj5TkI1g/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    
                </Modal.Footer>

            </Modal>
            </div>
        </>
    );
}

export default ModalForm;
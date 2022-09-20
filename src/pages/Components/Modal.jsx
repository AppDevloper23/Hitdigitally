import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ show, setShow, modalhding, tabImage, modalpara, category }) => {
    return (
        <Modal show={show} onHide={setShow}>
            <Modal.Header closeButton>
                <Modal.Title> {category} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='content'>
                    <h1 className='modal-title'> {modalhding} </h1>
                    <p> {modalpara} </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn btn-lg btn-default' variant="secondary" onClick={setShow}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    );
}


export default CustomModal;
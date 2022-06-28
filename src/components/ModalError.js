import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import Logo from "../assets/images/Logo.png";

const ModalError = ({error}) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!(!error || error === "null")) {
            setShow(true);
        }
    }, []);

    const handleClose = () => {
        setShow(false);
        localStorage.removeItem('ERR')
    }

    const handleClose2 = () => {
        setShow(false);
        localStorage.removeItem('ERR')
        window.location.href = "/registro"
    }

    const handleClose3 = () => {
        setShow(false);
        localStorage.removeItem('ERR')
        window.location.href = "/login"
    }

    const closeButton = () => {
        if (error === "Para registrate como Freelancer, primero debes registrar tus datos de usuario.") {
            return (
                <button className="btn btn-primary fw-bold float-end" onClick={handleClose2}>
                    Volver
                </button>
            )
        } else if (error === "No se ha encontrado un correo válido para hacer el cambio de contraseña.") {
            return (
                <button className="btn btn-primary fw-bold float-end" onClick={handleClose3}>
                    Volver
                </button>
            )
        }else {
            return(
                <button className="btn btn-primary fw-bold float-end" onClick={handleClose}>
                    Entendido
                </button>
            )
        }
    }

    return (
        <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
               onHide={handleClose}>
            <Modal.Header closeButton closeVariant="white">
                <Modal.Title className="text-white fw-bold">
                    <i className="bi bi-patch-exclamation-fill me-3"></i>
                    Información
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="b-white text-center">
                <h5>{error}</h5>
                <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
            </Modal.Body>
            <Modal.Footer className="b-white">
                {
                    closeButton()
                }
            </Modal.Footer>
        </Modal>
    )
}

export default ModalError
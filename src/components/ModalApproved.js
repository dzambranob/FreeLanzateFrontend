import {React, useState} from "react";
import {Modal} from "react-bootstrap";
import Logo from "../assets/images/Logo.png";
import {useEffect} from "react";


const ModalApproved = (props) =>{

    const location = props.location
    const [show, setShow] = useState(false);

    const payment = localStorage.getItem('PAID');

    useEffect(() => {
        if (!(!payment || payment === "null")) {
            setShow(true);
        }
    }, []);

    const handleClose = () => {
        setShow(false);
        localStorage.removeItem('PAID')
    }

    const handleClose2 = () => {
        setShow(false);
        localStorage.removeItem('PAID')
    }

    const handleClose2b = () => {
        setShow(false);
        window.location.href = "./anuncio"
    }

    const handleClose3 = () => {
        setShow(false);
        localStorage.removeItem('PAID')
        window.location.href = "./buscar" //TODO: Regirigir a "mis ventas".
    }

    const handleClose4 = () => {
        setShow(false);
    }

    const handleOrdenes = () => {
        window.location.href = "./ordenes";
        localStorage.removeItem('PAID')
    }

    if (location === "carrito"){
        return (
            <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
                   onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Transacción Completada
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <h5>¡Tu compra fue realizada con éxito!</h5>
                    <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn3 rounded fw-bold" onClick={handleClose}>
                        Cerrar
                    </button>
                    <button className="btn btn-primary fw-bold float-end" onClick={handleOrdenes}>
                        Ver mis órdenes
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }
    else if (location === "tarifas" && payment === "none"){
        return (
            <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
                   onHide={handleClose2}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-info-circle"> </i>
                        Acceso Restringido
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <h5>Debes seleccionar un plan para hacer uso de esta funcionalidad</h5>
                    <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn btn-primary fw-bold float-end" onClick={handleClose2}>
                        Entendido
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }
    else if (location === "tarifas" && payment !== "none"){
        return (
            <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
                   onHide={handleClose2b}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-info-circle"> </i>
                        Acceso Restringido
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <h5>Debes publicar el anuncio por el que pagaste antes de elegir un nuevo plan.</h5>
                    <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn btn-primary fw-bold float-end" onClick={handleClose2b}>
                        Publicar mi anuncio
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }
    else if (location === "anuncio" && payment === "done"){
        return (
            <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
                   onHide={handleClose3}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Anuncio publicado
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <h5>Tu anuncio ha sido publicado. ¡Gracias por hacer uso de nuestra aplicación!</h5>
                    <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn btn-primary fw-bold float-end" onClick={handleClose3}>
                        Volver
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }
    else if (location === "anuncio" && payment !== "done"){
        return (
            <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
                   onHide={handleClose4}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Transacción Completada
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <h5>¡Tu pago fue realizado con éxito!</h5>
                    <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn btn-primary fw-bold float-end" onClick={handleClose4}>
                        Publicar mi anuncio
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }
    else if (location === "info"){
        return (
            <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
                   onHide={handleClose2}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-balloon-heart-fill me-3"></i>
                        Infinitas gracias
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <h5>
                        ¡Transacción completada con éxito!
                        Tu donación nos ayuda a mejorar este proyecto y a que nuestra plataforma siga creciendo cada día.
                    </h5>
                    <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn btn-primary fw-bold float-end" onClick={handleClose2}>
                        Volver
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalApproved
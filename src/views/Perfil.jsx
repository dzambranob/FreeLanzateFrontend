import React, {useState, useEffect} from 'react'
import Logo from "../assets/images/Logo.png";
import {deleteAcc, getAccessToken, logout} from "../api/auth"
import jwtDecode from "jwt-decode";
import {miPerfil, editarPerfil, perfilFreelancer, editarPerfilFreelancer, eliminarUsuario} from "../api/user";
import {Modal} from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import {emailValidation, minLengthValidation} from "../utils/formValidation";

import { imagenPersona } from '../api/imagen';
import SubirImagenPerfil from '../components/SubirImagenPerfil';

const Perfil = () => {

    const [img, setImg] = useState("")

    const{user, isLoading, isFreelancer} = useAuth();

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => {
        setShow(false);
        setShow2(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    const handleShow2 = () => {
        setShow2(true);
    }

    const UserId = jwtDecode(getAccessToken()).sub.id;

    const token = getAccessToken();

    const[url, setUrl] = useState({
        avatarUrl: "",
        updatedAt: ""
      })

    const [inputs, setInputs] = useState({
        location: "",
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        updatedAt: ""
    });
    const [inputs2, setInputs2] = useState({
        oneliner: "",
        freelancerDescription: "",
        facebookUrl: "",
        twitterUrl: "",
        instagramUrl: "",
        linkedinUrl: "",
        websiteUrl: "",
        country: "",
        city: "",
        postalCode: "",
        address: "",
        phoneNumber: ""
    });

    const profile = async () => {
        const myUser = await miPerfil(UserId);
        setInputs({
            ...inputs,
            location: myUser.location,
            firstName: myUser.firstName,
            lastName: myUser.lastName,
            email: myUser.email,
            username: myUser.username
        });
        setImg(myUser.avatarUrl)
        setUrl({
            ...url,
            avatarUrl: myUser.avatarUrl
        })
    }

    const profileFreelancer = async () => {
        let myUser2 = await perfilFreelancer(UserId);
        myUser2 = myUser2[0];
        setInputs2({
            ...inputs2,
            oneliner: myUser2.oneliner,
            freelancerDescription: myUser2.freelancerDescription,
            facebookUrl: myUser2.facebookUrl,
            twitterUrl: myUser2.twitterUrl,
            instagramUrl: myUser2.instagramUrl,
            linkedinUrl: myUser2.linkedinUrl,
            websiteUrl: myUser2.websiteUrl,
            country: myUser2.country,
            city: myUser2.city,
            postalCode: myUser2.postalCode,
            address: myUser2.address,
            phoneNumber: myUser2.phoneNumber
        });
    }

    useEffect(() => {
        profile();
    }, []);

    useEffect(() => {
        if(isFreelancer){
            profileFreelancer();
        }
    }, []);

    const [formValid, setFormValid] = useState({
        email: false,
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const changeForm2 = e => {
        setInputs2({
            ...inputs2,
            [e.target.name]: e.target.value
        });
    };

    const inputValidation = e => {
        const { type, name } = e.target;
        if (type === "email") {
            setFormValid({ ...formValid, [name]: emailValidation(e.target) });
        }
        if (type === "password") {
            setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
        }
    };

    const guardarCambios = async e => {
        const firstName = inputs.firstName
        const lastName = inputs.lastName
        const email = inputs.email
        const username = inputs.username
        e.preventDefault();
        if (firstName === "" || lastName === "" || email === "" || username === ""){
            localStorage.setItem("ERR","Todos los datos del usuario deben estar diligenciados.")
            window.location.reload();
        } else {
            actualizarImagen(UserId, url)
            const result = await editarPerfil(UserId, inputs);
            if (result.message === "El usuario se actualizó correctamente.") {
                resetForm();
                localStorage.setItem("ERR","Tus cambios han sido guardados.")
                window.location.reload();
            } else {
                localStorage.setItem("ERR", result.message)
                window.location.reload()
            }
        }
    }

    async function actualizarImagen(id, url) {
        const result = await imagenPersona(id, url)
        console.log(result)
    }

    const guardarCambios2 = async e => {
        e.preventDefault();
        const result = await editarPerfilFreelancer(UserId, inputs2);
        console.log(result)
        if (result.message === "Freelancer was updated successfully.") {
            resetForm2();
            localStorage.setItem("ERR","Tus cambios han sido guardados.")
            window.location.reload();
        } else {
            localStorage.setItem("ERR",result.message)
            window.location.reload()
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }

        setInputs({
            location: "",
            firstName: "",
            lastName: "",
            email: "",
            username: "",
        });

        setFormValid({
            email: false,
        });
    };

    const resetForm2 = () => {
        const inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }

        setInputs2({
            oneliner: "",
            freelancerDescription: "",
            facebookUrl: "",
            twitterUrl: "",
            instagramUrl: "",
            linkedinUrl: "",
            websiteUrl: "",
            country: "",
            city: "",
            postalCode: "",
            address: "",
            phoneNumber: ""
        });
    };

    function changePassword(){
        logout();
        window.location.href = "/clave/" + token
    }

    const borrarCuenta = () => {
        deleteAcc();
        window.location.href = "../login";
    };

    const eliminarCuenta = async e =>{
        e.preventDefault();
        const result = await eliminarUsuario(UserId);
        if(result.message === 'El usuario fue eliminado de forma correcta.') {
            handleClose();
            localStorage.setItem("ERR","Tu cuenta ha sido eliminada.")
            borrarCuenta();
        }
    }

    function confirmacion(){
        return(
            <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
                   onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-info-circle"> </i>
                        Esto cerrará tu sesión
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <h5>Para realizar el cambio de contraseña de manera segura
                        se cerrará la sesión de tu cuenta.</h5>
                    <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                    <h5>¿Deseas continuar?</h5>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn3 rounded fw-bold" onClick={handleClose}>
                        No, regrésame
                    </button>
                    <button className="btn btn-primary fw-bold float-end" onClick={changePassword}>
                        ¡Sí, vamos!
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }

    function confirmacion2(){
        return(
            <Modal id="modal" className="login" show={show2} backdrop="static" keyboard={false} centered
                   onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        ¡Cuidado!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <h5>Esta acción eliminará los datos de tu cuenta de manera permanente y no se podrá deshacer.</h5>
                    <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                    <h5>¿Deseas continuar?</h5>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn3 rounded fw-bold" onClick={handleClose}>
                        No, regrésame
                    </button>
                    <button className="btn btn-primary fw-bold float-end " onClick={eliminarCuenta}>
                        ¡Sí, estoy seguro!
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }

    if(!isFreelancer) {
        return (
            <>
            <div className="contenedorPerfil text-center d-flex">
                <form className="d-flex" onChange={changeForm} onSubmit={guardarCambios}>
                    <div className="container rounded row w-100">
                        <h5 className=" welcome mb-3 fw-bold">Ubicación</h5>
                        <div className="row mt-3">
                            <div className="input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-geo-fill my-1"></i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="location"
                                        name="location"
                                        placeholder="location"
                                        value={inputs.location}
                                    />
                                    <label htmlFor="dir">Dirección</label>
                                </div>
                            </div>
                        </div>
                        <h5 className="mt-4 welcome mb-3 fw-bold">Datos del usuario</h5>
                        <div className="row mt-3">
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-circle my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="firstName"
                                        value={inputs.firstName}
                                    />
                                    <label htmlFor="firstName">Nombres</label>
                                </div>
                            </div>
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-badge-fill my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="lastName"
                                        value={inputs.lastName}
                                    />
                                    <label htmlFor="lastName">Apellidos</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-envelope-fill my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        value={inputs.email}
                                    />
                                    <label htmlFor="email">Correo electrónico</label>
                                </div>
                            </div>
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-at my-1"></i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="username"
                                        name="username"
                                        placeholder="username"
                                        value={inputs.username}
                                    />
                                    <label htmlFor="username">Nombre de usuario</label>
                                </div>
                            </div>
                            <div>
                                <h5 className="mt-3 welcome mb-3 fw-bold">Foto de perfil</h5>
                                <div className="my-3">
                                    <img
                                        src= {`https://free-lanzate-back.herokuapp.com/images/profiles/${img}`}
                                        alt="Imagen" width="240" height="240"
                                        className="rounded-circle"
                                        onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/profiles/default_avatar.png`)}
                                    />
                                </div>
                                <p className="mx-auto w-75 mt-2 mb-3">¿Quieres actualizar tu foto de perfil? A
                                    continuación haz clic en <b>Seleccionar Archivo</b> y carga una imagen en
                                    formato <b>.jpg, .png o .gif</b>. Luego, haz clic en <b>Guardar imagen</b>.
                                </p>
                                <SubirImagenPerfil setUrl={setUrl} />
                            </div>
                        </div>
                        <p className="mt-5 mb-3">¿Deseas cambiar tu contraseña? Haz clic<b className="badge"
                                                                                           onClick={handleShow}>aquí</b>
                        </p>
                        <div className="row mt-4">
                            <button className="w-50 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Guardar
                                Cambios
                            </button>
                        </div>
                    </div>
                </form>
                {
                    confirmacion()
                }
            </div>
                <div className="text-center">
                    <button className="w-75 btn btn-danger fw-bold mt-3 mb-5" onClick={handleShow2}>
                        Eliminar mi cuenta
                    </button>
                    {
                        confirmacion2()
                    }
                </div>
            </>
        )
    } else {
        return (
            <>
            <div className="contenedorPerfil text-center d-flex">
                <form className="d-flex" onChange={changeForm} onSubmit={guardarCambios}>
                    <div className="container rounded row w-100">
                        <h5 className="mt-3 welcome mb-3 fw-bold">Datos del usuario</h5>
                        <div className="row mt-3">
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-circle my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="firstName"
                                        value={inputs.firstName}
                                    />
                                    <label htmlFor="firstName">Nombres</label>
                                </div>
                            </div>
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-badge-fill my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="lastName"
                                        value={inputs.lastName}
                                    />
                                    <label htmlFor="lastName">Apellidos</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-envelope-fill my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        value={inputs.email}
                                    />
                                    <label htmlFor="email">Correo electrónico</label>
                                </div>
                            </div>
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-at my-1"></i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="username"
                                        name="username"
                                        placeholder="username"
                                        value={inputs.username}
                                    />
                                    <label htmlFor="username">Nombre de usuario</label>
                                </div>
                            </div>
                            <div>
                                <h5 className="mt-3 welcome mb-3 fw-bold">Foto de perfil</h5>
                                <div className="my-3">
                                        <img
                                            src= {`https://free-lanzate-back.herokuapp.com/images/profiles/${img}`}
                                            alt="Imagen" width="240" height="240"
                                            className="rounded-circle"
                                            onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/profiles/default_avatar.png`)}
                                        />
                                </div>
                                <p className="mx-auto w-75 mt-2 mb-3">¿Quieres actualizar tu foto de perfil? A
                                    continuación haz clic en <b>Seleccionar Archivo</b> y carga una imagen en
                                    formato <b>.jpg, .png o .gif</b>. Luego, haz clic en <b>Guardar imagen</b>.
                                </p>
                                <SubirImagenPerfil setUrl={setUrl} />
                            </div>
                        </div>
                        <p className="mt-4 mb-2">¿Deseas cambiar tu contraseña? Haz clic<b className="badge"
                                                                                           onClick={handleShow}>aquí</b>
                        </p>
                        <div className="row mt-4">
                            <button className="w-50 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Guardar
                                Cambios
                            </button>
                        </div>
                    </div>
                </form>
                {
                    confirmacion()
                }
            </div>
        <div className="contenedorPerfil text-center d-flex">
            <form className="d-flex" onChange={changeForm2} onSubmit={guardarCambios2}>
                <div className="container rounded row w-100">
                    <h5 className="mt-3 welcome mb-3 fw-bold">Datos del freelancer</h5>
                    <h5 className="mt-3 welcome1 mb-3 fw-bold">Ubicación</h5>
                    <div className="row mt-3">
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="fa fa-globe mt-2 mb-2 pb-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="country"
                                    name="country"
                                    placeholder="country"
                                    value={inputs2.country}
                                />
                                <label htmlFor="country">País</label>
                            </div>
                        </div>
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-pin-map-fill my-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="city"
                                    name="city"
                                    placeholder="city"
                                    value={inputs2.city}
                                />
                                <label htmlFor="lastName">Ciudad</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="w-75 input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-cursor-fill my-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="address"
                                    name="address"
                                    placeholder="address"
                                    value={inputs2.address}
                                />
                                <label htmlFor="address">Dirección</label>
                            </div>
                        </div>
                        <div className="w-25 input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-mailbox2 my-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="postalCode"
                                    name="postalCode"
                                    placeholder="postalCode"
                                    value={inputs2.postalCode}
                                />
                                <label htmlFor="postalCode">Código postal</label>
                            </div>
                        </div>
                    </div>
                    <h5 className="mt-3 welcome1 mb-3 fw-bold">Contacto</h5>
                    <div className="row mt-3">
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="fa fa-facebook mt-2 mb-2 pb-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="facebookUrl"
                                    name="facebookUrl"
                                    placeholder="facebookUrl"
                                    value={inputs2.facebookUrl}
                                />
                                <label htmlFor="facebookUrl">Facebook</label>
                            </div>
                        </div>
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="fa fa-twitter mt-2 mb-2 pb-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="twitterUrl"
                                    name="twitterUrl"
                                    placeholder="twitterUrl"
                                    value={inputs2.twitterUrl}
                                />
                                <label htmlFor="twitterUrl">Twitter</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="fa fa-instagram mt-2 mb-2 pb-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="instagramUrl"
                                    name="instagramUrl"
                                    placeholder="instagramUrl"
                                    value={inputs2.instagramUrl}
                                />
                                <label htmlFor="instagramUrl">Instagram</label>
                            </div>
                        </div>
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="fa fa-linkedin mt-2 mb-2 pb-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="linkedinUrl"
                                    name="linkedinUrl"
                                    placeholder="linkedinUrl"
                                    value={inputs2.linkedinUrl}
                                />
                                <label htmlFor="linkedinUrl">LinkedIn</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-globe my-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="websiteUrl"
                                    name="websiteUrl"
                                    placeholder="websiteUrl"
                                    value={inputs2.websiteUrl}
                                />
                                <label htmlFor="websiteUrl">Página Web</label>
                            </div>
                        </div>
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="fa fa-whatsapp me-2 mt-2 mb-2 pb-1"></i> +57
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="phoneNumber"
                                    value={inputs2.phoneNumber}
                                />
                                <label htmlFor="phoneNumber">WhatsApp</label>
                            </div>
                        </div>
                    </div>
                    <h5 className="mt-4 welcome1 mb-3 fw-bold">¡Date a conocer!</h5>
                    <div className="col mt-2 w-100 input-group">
                        <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-card-text my-1"></i>
                              </span>
                        </div>
                        <div className="form-floating flex-grow-1">
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="oneliner"
                                name="oneliner"
                                placeholder="oneliner"
                                value={inputs2.oneliner}
                            />
                            <label htmlFor="oneliner">Cuéntanos a qué te dedicas en una sola línea</label>
                        </div>
                    </div>
                    <div className="form-floating w-100">
                        <textarea
                            className="form-control mb-3 descripcion"
                            id="freelancerDescription"
                            name="freelancerDescription"
                            placeholder="freelancerDescription"
                            value={inputs2.freelancerDescription}
                        />
                        <label htmlFor="freelancerDescription" className="ms-3">Ahora pon una descripción detallada sobre ti</label>
                    </div>
                    <div className="row mt-4">
                        <button className="w-50 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Guardar
                            Cambios
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div className="text-center">
        <button className="w-75 btn btn-danger fw-bold mt-3 mb-5" onClick={handleShow2}>
            Eliminar mi cuenta
        </button>
            {
                confirmacion2()
            }
        </div>
        </>
        )
    }
}

export default Perfil
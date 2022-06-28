import React, {useState} from 'react'
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {recoverPassword} from "../api/recover";
import {useParams} from "react-router-dom";
import ModalError from "../components/ModalError";
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../api/auth";

const RecuperarPassword = () => {

    const error = localStorage.getItem("ERR")

    const {action} = useParams()

    const style = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh'
    }

    const [inputs, setInputs] = useState({
        email: "",
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const enviarCorreo = async e => {
        e.preventDefault();
        const result = await recoverPassword(inputs, action);
        if (result === "El email para la recuperación ha sido enviado") {
            resetForm();
            window.location.href = "/login";
        } else {
            localStorage.setItem('ERR', result.message)
            window.location.reload();
        }
    }

    const resetForm = () => {
        setInputs({
            email: "",
        });
    };

    let title;
    let subtitle;
    let button;
    const email = () => {
        try{
            return jwtDecode(action).sub.email;
        } catch (e){
            return ""
        }
    }

        if(action === "recuperar"){
            title = "¿Olvidaste tu contraseña?"
            button = "Recuperar ahora"
        } else {
            title = "Cambia tu contraseña"
            button = "Confirmar envío"
            if (email() === "") {
                localStorage.setItem("ERR","No se ha encontrado un correo válido para hacer el cambio de contraseña.")
            }
        }

    return (
      <div className="forgot text-center d-flex" style={style}>
        <div className="form-signin rounded max-w-forgp my-auto">
            <form onSubmit={enviarCorreo} onChange={changeForm}>
                <img className="w-25 mb-4 d-flex justify-content-start" src={Logo} alt="Free-Lánzate"/>
                <h5 className="welcome mb-3 fw-bold">{title}</h5>
                <div className="form-floating w-75 mx-auto mt-5">
                    <input
                            type="email"
                            className="form-control mb-5"
                            id="email"
                            name="email"
                            placeholder="username"
                            defaultValue={email()}
                    />
                    <label htmlFor="email">Correo electrónico</label>
                </div>
                <div>
                    <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mb-3 d-flex align-items-center"
                            onClick={ () => {
                                setInputs({
                                    ...inputs,
                                    email: document.getElementById("email").value
                                });
                            }} type="submit">
                        {button} <i className="bi bi-envelope-fill button-icon"></i></button>
                </div>
            </form>
        </div>
          <ModalError error={error}/>
      </div>
    )
}

export default RecuperarPassword
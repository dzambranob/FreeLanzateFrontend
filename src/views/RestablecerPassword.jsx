import React, {useState, useEffect} from 'react'
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {showHide} from "../utils/passwordVisibility"
import {useParams} from "react-router-dom";
import {minLengthValidation} from "../utils/formValidation";
import {miPerfil} from "../api/user";
import {resetPassword} from "../api/recover"
import ModalError from "../components/ModalError";

const RestablecerPassword = () => {

    const {id, token} = useParams()

    const style = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh'
    }

    const [error, setError] = useState(localStorage.getItem("ERR"))

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: ""
    });

    const [formValid, setFormValid] = useState({
        password: false,
        repeatPassword: false,
    });

    const getEmail = async () => {
        const user = await miPerfil(id);
        setInputs({
            ...inputs,
            email: user.email,
        });
    }

    useEffect(() => {
        getEmail();
    }, []);

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const inputValidation = e => {
        const { type, name } = e.target;
        if (type === "password") {
            setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
        }
    };

    const restore = async e => {
        e.preventDefault();
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;

        if (!passwordVal || !repeatPasswordVal) {
            localStorage.setItem('ERR', "Todos los campos son obligatorios")
            window.location.reload();
        } else {
            if (passwordVal !== repeatPasswordVal) {
                localStorage.setItem('ERR', "Las contraseñas tienen que ser iguales.")
                window.location.reload();
            } else {
                const result = await resetPassword(id, inputs, token);
                console.log(result)
                if (result.message === "Contraseña actualizada") {
                    resetForm();
                    window.location.href = "/login";
                } else {
                    localStorage.setItem('ERR', result.message)
                    window.location.reload();
                }
            }
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }

        setInputs({
            email: "",
            password: "",
            repeatPassword: "",
        });

        setFormValid({
            password: false,
            repeatPassword: false,
        });
    };

    return (
      <div className="forgot text-center d-flex" style={style}>
        <div className="form-signin rounded max-w-forgp my-auto">
            <form onSubmit={restore} onChange={changeForm}>
                <img className="w-25 mb-4 d-flex justify-content-start" src={Logo} alt="Free-Lánzate"/>
                    <h5 className=" welcome mb-3 fw-bold">Restablece la contraseña</h5>
                    <p>Para el usuario<b className="badge">{inputs.email}</b></p>
                    <div className="form-floating w-75 mx-auto mt-4 mb-4">
                        <input
                            type="password"
                            className="form-control mb-3"
                            id="password"
                            name="password"
                            placeholder="password"
                            onChange={inputValidation}
                            value = {inputs.password}
                        />
                        <label htmlFor="password">Contraseña nueva</label>
                        <i className="bi bi-eye-slash-fill form-icon" onClick={((e) => showHide(e.target))}> </i>
                    </div>
                    <div className="form-floating w-75 mx-auto">
                        <input
                            type="password"
                            className="form-control mb-3"
                            id="repeatPassword"
                            name="repeatPassword"
                            placeholder="repeatPassword"
                            onChange={inputValidation}
                            value = {inputs.repeatPassword}
                        />
                        <label htmlFor="repeatPassword">Confirma la contraseña</label>
                        <i className="bi bi-eye-slash-fill form-icon" onClick={((e) => showHide(e.target))}> </i>
                    </div>
                    <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mt-3 mb-4" type="submit">
                        Guardar cambios
                    </button>
            </form>
        </div>
          <ModalError error={error}/>
      </div>
    )
}

export default RestablecerPassword
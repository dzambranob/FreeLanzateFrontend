import React,{useState} from 'react';
import { emailValidation, minLengthValidation} from "../utils/formValidation";
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {showHide} from "../utils/passwordVisibility"
import {registro} from "../api/user";
import ModalError from "../components/ModalError";


const Registro = () => {

    const error = localStorage.getItem("ERR");

    function refreshPage() {
        window.location.reload();
    }

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
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        repeatPassword: "",
        email: "",
        location: "",
        avatarUrl: "",
        isFreelancer: false
      });

      const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
      });

      const changeForm = e => {
         if(e.target.name === 'isFreelancer'){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
              });
         }else {
             setInputs({
            ...inputs,
            [e.target.name]: e.target.value
          });}
      };

      const inputValidation = e => {
        const { type, name } = e.target;
    
        if (type === "email") {
          setFormValid({ ...formValid, [name]: emailValidation(e.target) });
        }
        if (type === "password") {
          setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
        }
        if (type === "checkbox") {
            setFormValid({ ...formValid, [name]: true });
          }
      };

    const register = async e => {
        e.preventDefault();
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;

        if (!emailVal || !passwordVal || !repeatPasswordVal) {
            localStorage.setItem('ERR',"Todos los campos son obligatorios.")
            refreshPage()
        } else {
            if (passwordVal !== repeatPasswordVal) {
                localStorage.setItem('ERR',"Las contraseñas tienen que ser iguales. Por favor, intente de nuevo.")
                refreshPage()
            } else {
                const result = await registro(inputs);
                console.log(result)
                if (!result.ok) {
                    localStorage.setItem('ERR',result.message)
                    refreshPage()
                } else {
                    if(result.free){
                        resetForm();
                        window.location.href = "registro-freelancer";
                    }else{
                        resetForm();
                        localStorage.setItem('ERR',"El registro se ha completado con éxito.")
                        window.location.href = "login";
                    }
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
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            repeatPassword: "",
            email: "",
            location: "",
            avatarUrl: "",
            isFreelancer: false
        });

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
        });
      };

  return (
    <div className="reg text-center d-flex" style={style}>
        <div className="form-signin rounded max-w-reg my-auto" onSubmit={register} onChange={changeForm}>
            <form>
                <img className="mb-4 d-flex justify-content-start" src={Logo} alt="Free-Lánzate"/>
                <div className="row g-2">
                    <h5 className="welcome mb-3 fw-bold">Crea tu cuenta</h5>
                    <p>Por favor, diligencia los siguientes campos</p>
                </div>
                <div className="row g-2">
                    <div className="col-md">
                        <div className="input-group w-75 mx-auto mt-2">
                            <div>
                                <span className="input-group-text bg-gb text-white"><i className="bi bi-person-circle my-1"> </i></span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="firstName"
                                        onChange={inputValidation}
                                        value = {inputs.firstName}
                                />
                                <label htmlFor="firstName">Nombres</label>
                            </div>
                        </div>
                        <div className="input-group w-75 mx-auto mt-2">
                            <div>
                                <span className="input-group-text bg-gb text-white"><i className="bi bi-person-badge-fill my-1"> </i></span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="lastName"
                                    onChange={inputValidation}
                                    value = {inputs.lastName}
                                />
                                <label htmlFor="lastName">Apellidos</label>
                            </div>
                        </div>
                        <div className="input-group w-75 mx-auto mt-2">
                            <div>
                                <span className="input-group-text bg-gb text-white"><i className="bi bi-envelope-fill my-1"> </i></span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                        type="email"
                                        className="form-control mb-3"
                                        id="email"
                                        name="email"
                                        placeholder="username"
                                        onChange={inputValidation}
                                        value = {inputs.email}
                                />
                                <label htmlFor="email">Correo electrónico</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="input-group w-75 mx-auto mt-2">
                            <div>
                                <span className="input-group-text bg-gb text-white"><i className="bi bi-lock-fill my-1"> </i></span>
                            </div>
                            <div className="form-floating flex-grow-1">
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
                        </div>
                        <div className="input-group w-75 mx-auto mt-2">
                            <div>
                                <span className="input-group-text bg-gb text-white"><i className="bi bi-shield-fill-check my-1"> </i></span>
                            </div>
                            <div className="form-floating flex-grow-1">
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
                        </div>
                        <div className="w-75 mx-auto mt-4 h5 fw-bold free">
                            <input
                                type="checkbox"
                                className="me-3"
                                id="isFreelancer"
                                name="isFreelancer"
                                defaultChecked = {inputs.isFreelancer}
                            />
                            <label htmlFor="free"> Deseo registrarme como freelancer</label>
                        </div>
                    </div>
                </div>
                <div className="row g-2 my-3">
                    <p>¿Ya estás registrado?<a href="/login" className="badge">Inicia sesión</a></p>
                    <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Continuar</button>
                </div>
            </form>
        </div>
        <ModalError error={error}/>
    </div>
  )
}

export default Registro
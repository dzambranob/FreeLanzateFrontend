
import { Modal, Button } from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import useAuth from '../hooks/useAuth';
import Logo from "../assets/images/Logo.png";
import {starRating} from "../api/reviews";
import {perfilFreelancer} from "../api/buscar";
import {Link} from "react-router-dom";
import ModalAnuncio from "./ModalAnuncio";
import Table from "react-bootstrap/Table";

 const ModalFreelancer = (props) => {

  const freelancer = props.freelancer;
  const rating = props.rating;
  const username = props.username;
  const firstName = props.firstName;
  const lastName = props.lastName;
  const url = props.url;

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const{user, isLoading} = useAuth();

  const handleClose = () => {
      setShow(false);
      setShow2(false);
  }
  const handleShow = () => {
      if(!user && !isLoading){
          setShow2(true);
      } else {
          setShow(true);
      }
  }
  const handleLogin = () => window.location.href = "./login";

     const freelancerRating = (num) => {
         return <p className="stars">{starRating(num)}</p>
     }

     const buscaOneliner = (info) => {
         if (info === null){
             return (<p>-</p>)
         } else {
             return (<p>{info}</p>)
         }
     }

     const buscaInfo = (info) => {
         if (info === null){
             return (<p>No hay información disponible.</p>)
         } else {
             return (info.toString())
         }
     }

     const buscaUrl = (red, url) => {
         if (url === null){
             return (" No hay información disponible.")
         } else {
             const icon = "fa fa-" + red;
             const redirect = "https://" + url;
             return (<a className="btn2 rounded mx-3" href={redirect} target="_blank"><i className={icon}></i></a>)
         }
     }

     const [free, setFree] = useState([]);

     useEffect(() => {
         perfilFreelancer(freelancer.id).then(response => {
             setFree(response);
         })
     }, []);

     function mapAdress(address,city){
         return("https://www.google.com/maps/embed/v1/place?key=AIzaSyCuJva3aUHi7QuZQ0ifgN852NQsDdplecg&q="+address+" "+city)
     }

     function contact(num){
         return("https://wa.me/57"+num)
     }
     function anuncios(free){
         if (free.length === 0){
             return (<p>No hay anuncios publicados.</p>)
         }
         else{
             return(
                 <Table hover>
                     <thead>
                     <tr className="table-primary welcome">
                         <th colSpan="2" className="text-center">Anuncio</th>
                         <th>Precio</th>
                         <th className="text-center">Descripción</th>
                     </tr>
                     </thead>
                     <tbody className="align-middle">
                     {
                         free.map((free)=>(
                             <tr>
                                 <td>
                                     <img
                                         src= {`https://free-lanzate-back.herokuapp.com/images/${free.thumbnailUrl}`}
                                         alt="Imagen" width="160" height="90"
                                         className="rounded"
                                         onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/default.png`)}
                                     />
                                 </td>
                                 <td>
                                     {free.postTitle}
                                 </td>
                                 <td>
                                     ${free.postPrice}
                                 </td>
                                 <td>
                                     {free.postDescription}
                                 </td>
                             </tr>))
                     }
                     </tbody>
                 </Table>
             )
         }
     }
  
    return(
      <>
      <Button className="btn btn-primary fw-bold float-end" onClick={handleShow}>
        Saber más »
      </Button>

      <Modal className="login" backdrop="static" keyboard={false} centered size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="text-white fw-bold">
              <i className="bi bi-person-badge-fill me-4"></i>
              {firstName + " " + lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="b-white text-center ">
            <div className="row w-100">
            <div className="mt-3 col">
                <div className="justify-content-center align-items-center">
                    <img
                        src= {`https://free-lanzate-back.herokuapp.com/images/profiles/${url}`}
                        alt="Imagen" width="300" height="300"
                        className="rounded-circle"
                        onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/profiles/default_avatar.png`)}
                    />
                    <div className="justify-content-center d-flex mt-4">
                        <div className="big-badge">
                            @{username}
                        </div>
                        <p className="ms-2">
                            {freelancerRating(rating)}
                        </p>
                    </div>
                </div>
                {buscaOneliner(freelancer.oneliner)}
                <h5 className="welcome1 mt-4 fw-bold">Descripción</h5>
                <p className="w-75 mx-auto">{buscaInfo(freelancer.freelancerDescription)}</p>
                <h5 className="welcome1 mt-4 mb-3 fw-bold">Página Web</h5>
                {buscaUrl("external-link",freelancer.websiteUrl)}
                <h5 className="welcome1 mt-4 mb-3 fw-bold">Redes Sociales</h5>
                  <div className="mx-auto d-flex">
                      <div className="row">
                        <p><b>Facebook:</b> {buscaUrl("facebook",freelancer.facebookUrl)}</p>
                        <p><b>Twitter:</b> {buscaUrl("twitter",freelancer.twitterUrl)}</p>
                      </div>
                      <div className="row">
                        <p><b>Instagram:</b> {buscaUrl("instagram",freelancer.instagramUrl)}</p>
                        <p><b>LinkedIn:</b> {buscaUrl("linkedin",freelancer.linkedinUrl)}</p>
                      </div>
                  </div>
            </div>
            <div className="mt-3 col">
                <h5 className="welcome1 mb-3 fw-bold">Ubicación</h5>
                <div className="d-flex">
                    <div className="form-floating w-100 mx-4 mt-2">
                        <input
                            type="text"
                            className="form-control mb-3"
                            id="country"
                            name="country"
                            placeholder="pais"
                            defaultValue={buscaInfo(freelancer.country)}
                            readOnly
                        />
                        <label htmlFor="pais">País</label>
                    </div>
                    <div className="form-floating w-100 mx-4 mt-2">
                        <input
                            type="text"
                            className="form-control mb-3"
                            id="city"
                            name="city"
                            placeholder="ciudad"
                            defaultValue={buscaInfo(freelancer.city)}
                            readOnly
                        />
                        <label htmlFor="ciudad">Ciudad</label>
                    </div>
                </div>
                <div className="form-floating mx-4 mt-2">
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="address"
                        name="address"
                        placeholder="dir"
                        defaultValue={buscaInfo(freelancer.address)}
                        readOnly
                    />
                    <label htmlFor="dir">Dirección</label>
                </div>
                <div className="d-flex">
                    <div className="form-floating flex-grow-1 mx-4 mt-2">
                        <input
                            type="number"
                            className="form-control mb-3"
                            id="postalCode"
                            name="postalCode"
                            placeholder="postal"
                            defaultValue={buscaInfo(freelancer.postalCode)}
                            readOnly
                        />
                        <label htmlFor="postal">Código Postal</label>
                    </div>
                    <span className="welcome2 mt-2 mb-3 me-4"><i className="bi bi-geo-alt-fill"></i></span>
                </div>
                <iframe className="w-75 h-50 mt-2" src={mapAdress(buscaInfo(freelancer.address),buscaInfo(freelancer.city))}></iframe>
            </div>
            </div>
            <div className="mx-auto row w-100">
                <h5 className="welcome1 mt-4 fw-bold">Anuncios publicados</h5>
                {anuncios(free)}
            </div>

        </Modal.Body>
        <Modal.Footer className="b-white">
          <button className="btn3 rounded fw-bold" onClick={handleClose}>
            Cerrar
          </button>
          <a className="btn btn-primary fw-bold d-flex align-items-middle"
             href={contact(freelancer.phoneNumber)} target="_blank">
              <i className="fa fa-whatsapp me-3"> </i> Contactar
          </a>
        </Modal.Footer>
      </Modal>

          <Modal id="modal" className="login" show={show2} backdrop="static" keyboard={false} centered onHide={handleClose}>
              <Modal.Header closeButton closeVariant="white">
                  <Modal.Title className="text-white fw-bold">
                      <i className="bi bi-info-circle"> </i>
                      Acceso Restringido
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body className="b-white text-center">
                  <h5>Para contactar con los freelancers es necesario
                      que inicies sesión en tu cuenta.</h5>
                  <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                  <h5>¿Deseas continuar?</h5>
              </Modal.Body>
              <Modal.Footer className="b-white">
                  <button className="btn3 rounded fw-bold" onClick={handleClose}>
                      No, regrésame
                  </button>
                  <button className="btn btn-primary fw-bold float-end" onClick={handleLogin}>
                      ¡Sí, vamos!
                  </button>
              </Modal.Footer>
          </Modal>
    </>
      )
  }

  export default ModalFreelancer




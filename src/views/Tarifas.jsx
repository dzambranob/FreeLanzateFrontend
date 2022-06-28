import React, {useState, useEffect} from 'react'
import {notification} from "antd";
import {anuncia} from "../api/posts";
import{getAccessToken} from "../api/auth"
import jwtDecode from "jwt-decode";
import {buscarCategoria} from "../api/buscar";
import {Link} from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {terminarCompra} from "../api/canasta";
import ModalApproved from "../components/ModalApproved";

const Tarifas = () => {

  const initialOptions = {
    "client-id": "Aa9dtYax1fms_6h0oLlp1G1ji_t_aHok_-iWzvhE1jE3JFDHmy-luKUetTIAx85ibBweGhbgCR-J02d5",
    locale: "es_CO",
    currency: "USD"
  };

  let tarifa = "";

  const changeForm = e => {
    tarifa = e.target.value;
  };

  function refreshPage() {
    window.location.reload();
  }

  function valorTarifa(tarifa){
    if (tarifa === ""){
      localStorage.setItem("PAID",'none')
      refreshPage()
      return "0.00"
    } else {
      return tarifa
    }
  }

  function prioridad(tarifa){
    if (tarifa === "0.01"){
      return "1"
    }
    else if(tarifa === "3.99"){
      return "2"
    }
    else if(tarifa === "9.99"){
      return "3"
    }
    else{
      return "0"
    }
  }

  const finalizarCompra = async (code) =>{
    localStorage.setItem("PAID",code)
    window.location.href = "./anuncio"
  }

  function loadApproved(){
    return(<ModalApproved location="tarifas"/>)
  }

  return (
      <div className="contenedorPerfil text-center d-flex">
        <form className="container rounded row" onChange={changeForm}>
          <h5 className=" welcome mb-3 fw-bold">Selecciona uno de los siguientes planes:</h5>
          <div className="col">
            <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Básico</h5>
            <div className="border border-4 rounded">
            <h1 className="my-4">$0,01 USD</h1>
            <p className="w-75 mx-auto">
              Por la seguridad de nuestros usuarios, en FreeLánzate verificamos la identidad de
              todas las personas que desean vender productos o servicios.
              Para ello, te realizaremos un cobro de 0,01 dólares (41,38 pesos colombianos): vamos,
              <b> ¡es como si fuera gratuito!</b>
            </p>
            <h5 className="welcome1 fw-bold w-75 mx-auto text-decoration-underline">
              Este plan incluye:
            </h5>
            <p>
            <ul>
              <li>La publicación de un (1) anuncio por tiempo indefinido.</li>
            </ul>
            </p>
            </div>
            <div className="my-3">
              <input type="radio" id="basico" name="tarifa" value="0.01"/>
              <label htmlFor="gratis" className="ms-2 mid-badge">¡Quiero tomar este plan!</label>
            </div>
          </div>
          <div className="col">
            <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estándar</h5>
            <div className="border border-4 rounded">
              <h1 className="my-4">$3,99 USD</h1>
              <p className="w-75 mx-auto">
                Por la suma de 3,99 dólares (16.512,62 pesos colombianos), podrás disfrutar
                de algunos beneficios que no están incluidos en el plan "Básico". De esta manera
                <b> podrás darte a conocer con mayor rapidez.</b>
              </p>
              <h5 className="welcome1 fw-bold w-75 mx-auto text-decoration-underline">
                Este plan incluye:
              </h5>
              <p>
                <ul>
                  <li>La publicación de un (1) anuncio por tiempo indefinido.</li>
                  <li>Tu anuncio tendrá mayor prioridad en la búsqueda
                    y en los recomendados.</li>
                </ul>
              </p>
            </div>
            <div className="my-3">
              <input type="radio" id="estandar" name="tarifa" value="3.99"/>
              <label htmlFor="gratis" className="ms-2 mid-badge">¡Quiero tomar este plan!</label>
            </div>
          </div>
          <div className="col">
            <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Pro</h5>
            <div className="border border-4 rounded">
              <h1 className="my-4">$9,99 USD</h1>
              <p className="w-75 mx-auto">
                Por la suma de 9,99 dólares (41.343,61 pesos colombianos) accederás al mejor plan y podrás conseguir
                <b> la máxima visibilidad en la aplicación.</b>
              </p>
              <h5 className="welcome1 fw-bold w-75 mx-auto text-decoration-underline">
                Este plan incluye:
              </h5>
              <p>
                <ul>
                  <li>La publicación de un (1) anuncio por tiempo indefinido.</li>
                  <li>Tu anuncio tendrá la prioridad más alta en la búsqueda
                    y en los recomendados.</li>
                  <li>Tu anuncio formará parte de "Los elegidos de FreeLánzate" en los recomendados.</li>
                </ul>
              </p>
            </div>
            <div className="my-3">
              <input type="radio" id="pro" name="tarifa" value="9.99"/>
              <label htmlFor="gratis" className="ms-2 mid-badge">¡Quiero tomar este plan!</label>
            </div>
          </div>
          <div className="row mt-4">
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: valorTarifa(tarifa),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      finalizarCompra(prioridad(tarifa));
                    });
                  }}
              />
            </PayPalScriptProvider>
          </div>
        </form>
        {
          loadApproved()
        }
      </div>
  )
}

export default Tarifas
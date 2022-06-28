import {React,useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import { traerItemsCanasta, traerSesion, terminarCompra } from '../api/canasta'
import {Table} from "react-bootstrap";
import { eliminarItem } from '../api/canasta';
import CambiarCantidad from '../components/CambiarCantidad';
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../api/auth";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ModalApproved from "../components/ModalApproved";


const Carrito = () => {

    const estado = useParams()

    const initialOptions = {
        "client-id": "Aa9dtYax1fms_6h0oLlp1G1ji_t_aHok_-iWzvhE1jE3JFDHmy-luKUetTIAx85ibBweGhbgCR-J02d5",
        locale: "es_CO",
        currency: "USD"
    };
  
  const UserId = jwtDecode(getAccessToken()).sub.id;
  const[items, setItems] = useState([])
  const [sesion ,setSesion] = useState([])

  useEffect(() => {
      traerItemsCanasta(UserId).then(response => {
          setItems(response);
      })
    }, [])

    useEffect(() => {
      traerSesion(UserId).then(response => {
        setSesion(response);
      })
    }, [])

    function refreshPage() {
        window.location.reload();
      }

    const eliminar = async (postId) =>{
        const result = await eliminarItem(UserId, postId);
        console.log(result)
        refreshPage()
      }

    const finalizarCompra = async (code) =>{
      const result = await terminarCompra(UserId);
      localStorage.setItem("PAID",code)
        refreshPage()
    }

    function loadApproved(){
      return(<ModalApproved location="carrito"/>)
    }

    function dolares(num){
      const dolar = Math.round(num*100/4138.5)/100
      return dolar.toString()
    }

    if (items.length === 0) {
        return(
            <div className="contenedorPerfil text-center d-flex">
                <div className="container rounded row w-100">
                    <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son los productos y servicios que hay en tu carrito:</h5>
                    <div>
                        <h5>Al parecer, tu carrito se encuentra vacío</h5>
                        <Link to="../buscar">
                            <span className="badge mt-2 text-decoration-underline">
                                ¡Haz click acá para buscar eso que necesitas!
                                <i className="bi bi-search ms-3"> </i>
                            </span>
                        </Link>
                    </div>
                    {loadApproved(estado)}
                </div>
            </div>
        )
    } else {
        return (
            <div className="contenedorPerfil text-center d-flex">
                <div className="container rounded row w-100">
                    <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son
                        los productos y servicios que están en tu carrito:</h5>
                    {
                        items.map((items, index)=>(
                            <div>
                                <p className="text-center fw-bold w-100 badge">Item # {index+1}</p>

                                <Table hover>
                                    <thead>
                                    <tr className="table-primary welcome">
                                        <th colSpan="2">Producto o Servicio Adquirido</th>
                                        <th>Freelancer</th>
                                    </tr>
                                    </thead>
                                    <tbody className="align-middle">
                                    <tr>
                                        <td>
                                            <img
                                                src= {`https://free-lanzate-back.herokuapp.com/images/${items.Post.thumbnailUrl}`}
                                                alt="Imagen" width="160" height="90"
                                                className="rounded"
                                                onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/default.png`)}
                                            />
                                        </td>
                                        <td>
                                            {items.Post.postTitle}
                                        </td>
                                        <td>
                                            {items.Post.Freelancer.User.firstName + " " + items.Post.Freelancer.User.lastName}
                                        </td>
                                    </tr>

                                    </tbody>
                                </Table>
                                <div className="d-flex w-100">
                                    <p className="me-auto my-auto"><b>Precio unitario: </b>${items.Post.postPrice} pesos colombianos</p>
                                    <CambiarCantidad className="float-end" id = {items.id} cantidad = {items.quantity}/>
                                    <button className="btn2 rounded mt-2 mb-3 fw-bold" onClick={() => eliminar(items.postId)}>
                                        Eliminar
                                    </button>
                                </div>
                                <hr className="separador"/>
                            </div>
                        ))
                    }
                </div>
                <div className="row col container rounded w-50 h-100">
                    <div>
                        <h5 className=" welcome mb-3 fw-bold">
                            <i className="bi bi-cart4 me-3"></i>
                            Resumen de tu carrito
                        </h5>
                        <hr className="separador"/>
                        {items.map((items, index)=>(
                            <div>
                                <p className="text-center fw-bold w-100 badge">{items.Post.postTitle}</p>
                                <p className="me-auto"><b className="welcome1">Unidades de producto / Horas de servicio:
                                </b> {items.quantity}</p>
                                <p className="me-auto"><b className="welcome1">Precio resultante:
                                </b> ${items.Post.postPrice * items.quantity} pesos colombianos</p>
                                <hr/>
                            </div>
                        ))}
                        <div className="welcome2 row d-flex mt-4">
                            <div className="col">
                                <strong>Precio total:</strong>
                            </div>
                            <div className="col float-end">
                                <strong>$ {sesion.total} </strong>
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
                                                        value: dolares(sesion.total),
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            finalizarCompra(data.payerID);
                                        });
                                    }}
                                />
                            </PayPalScriptProvider>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Carrito
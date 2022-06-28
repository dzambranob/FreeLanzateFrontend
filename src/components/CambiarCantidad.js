import {Button} from "react-bootstrap";
import {React, useState} from 'react';
import {cambiarCantidad} from "../api/canasta";

const CambiarCantidad = (props) => {

    const[data ,setData] = useState({
        cartItemId: props.id,
        newQuantity: props.cantidad
    })

  const changeForm = e => {
    if(e.target.name === 'newQuantity'){
        setData({
            ...data,
            [e.target.name]: parseInt(e.target.value)
        });
    }
    
    //console.log(data)
    };

    function refreshPage() {
        window.location.reload(false);
    }

    const nuevaCantidad = async () => {
        const result = await cambiarCantidad(data);
        refreshPage()
    }

  return (
    <div>
        <form className="d-flex">
        <div className=" form-floating mx-2" onChange={changeForm}>
            <input 
                type="number" 
                id="newQuantity"
                className="form-control"
                name="newQuantity" 
                min="1"
                value = {data.newQuantity}
                />
            <label htmlFor="newQuantity">Cantidad</label>
        </div>
        <Button className="btn mb-3 mt-2 me-2 fw-bold" onClick={() => nuevaCantidad()}>
            Cambiar
        </Button>
    </form>
    </div>
  )
}

export default CambiarCantidad
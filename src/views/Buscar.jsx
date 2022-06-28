import { React, useState } from "react"
import  {Categorias}  from "../components/Categorias"
import {Freelancer} from "../components/Freelancer"
import { Anuncios } from "../components/Anuncios"

const Buscar = () => {

  const[activo, setActivo] = useState("Categorias")

  const selection = () => {
      if(activo === 'Categorias'){
          return (<Categorias/>)
      }
      else if(activo === 'Freelancer') {
          return (<Freelancer/>)
      }
      else if(activo === 'Anuncios') {
          return (<Anuncios/>)
      }
  }
    return (
      <div className='contenedorPerfil container d-flex' >
        <div className="container w-100">
            <h5 className="text-center welcome mb-3 fw-bold mt-1 mb-1">Selecciona una de las siguientes opciones:</h5>
            <nav className="text-center mb-4 fw-bold w-100 d-flex">
              <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("Categorias")}>Categorías</button>
              <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("Freelancer")}>Freelancer</button>
              <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("Anuncios")}>Anuncios</button>
            </nav>
            {selection()}
        </div>
      </div>
      )
}

export default Buscar
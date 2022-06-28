import { React, useState } from "react"
import QuienesSomos from "./info/QuienesSomos"
import Legal from "./info/Legal"
import Blog from "./info/Blog";

const ExtraInfo = () => {
    const[activo, setActivo] = useState("QuienesSomos")

    const selection = () => {
      if(activo === 'QuienesSomos'){
          return (<QuienesSomos/>)
      }
      else if(activo === 'Legal') {
          return (<Legal/>)
      }
      else if(activo === 'Blog') {
          return (<Blog/>)
      }
  }

  return (
      <div className='contenedorPerfil container d-flex' >
          <div className="text-center container w-100">
              <h5 className="welcome mb-3 fw-bold mt-1 mb-1 text-decoration-underline">¿Deseas conocer más de FreeLánzate? Selecciona una de las siguientes opciones:</h5>
              <nav className="mb-4 fw-bold w-100 d-flex">
                  <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("Legal")}>Aviso legal</button>
                  <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("QuienesSomos")}>¿Quiénes somos?</button>
                  <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("Blog")}>Nuestro Blog</button>
              </nav>
            {selection()}
        </div>
      </div>
  )
}

export default ExtraInfo
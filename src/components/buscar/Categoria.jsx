import { idCategoria, nombreCategoria } from "../../utils/tokens";
import {React, useState, useEffect} from 'react'
import { buscarAnunciosPorCategoria } from '../../api/buscar'
import Table from 'react-bootstrap/Table';
import ModalAnuncio from "../ModalAnuncio";


 const Categoria = () => {
  const[anuncio, setAnuncios] = useState([])

  useEffect(() => {
    buscarAnunciosPorCategoria(localStorage.getItem(idCategoria)).then(response => {
      setAnuncios(response);
    })
  }, [])

  function volver(){
    window.location.href = "buscar";
  }

  
return(
    <div className='contenedorPerfil container d-flex' >
        <div className="container w-100">
            <h5 className="text-center welcome mt-2 mb-3 fw-bold">{localStorage.getItem(nombreCategoria)}</h5>
            <p className="text-center mb-3">Aquí podrás ver los anuncios relacionados con esta categoría.</p>
            <Table hover>
                <thead>
                <tr className="table-primary welcome">
                    <th colSpan="2" className="text-center">Anuncios</th>
                    <th>Precio</th>
                    <th className="text-center">Descripción</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="align-middle">
                {
                  anuncio.map((anuncio)=>(
                    <tr>
                      <td>
                          <img
                              src= {`https://free-lanzate-back.herokuapp.com/images/${anuncio.thumbnailUrl}`}
                              alt="Imagen" width="160" height="90"
                              className="rounded"
                              onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/default.png`)}
                          />
                      </td>
                      <td>
                        {anuncio.postTitle}
                        </td>
                        <td>
                        ${anuncio.postPrice}
                        </td>
                        <td>
                        {anuncio.postDescription}
                        </td>
                      <td>
                        <ModalAnuncio anuncio={anuncio} id={anuncio.Freelancer.User.id} postUrl={anuncio.thumbnailUrl} freeUrl={anuncio.Freelancer.User.avatarUrl}/>
                      </td>
                    </tr>))
                    }
                </tbody>
            </Table>
            <div className="text-center">
                <button className="btn2 rounded fw-bold mx-auto" onClick={volver}>Volver</button>
            </div>
        </div>
    </div>
  )
}


export default Categoria



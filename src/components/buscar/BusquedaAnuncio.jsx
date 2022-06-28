import {React, useState} from 'react'
import { buscarAnunciosPorPalabra } from '../../api/buscar';
import Table from 'react-bootstrap/Table';
import ModalAnuncio from '../ModalAnuncio';

const BusquedaAnuncio = (props) => {

  const anuncio = props.anuncio

  const [input, setInput] = useState({
    buscar: ""
  });

  const [resultado, setResultado] = useState()

  const changeForm = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const buscarPalabra = async e =>{
    e.preventDefault();
    const resultadoBusqueda = await buscarAnunciosPorPalabra(input.buscar);
    setResultado(resultadoBusqueda)
  }


  if (!resultado) {
    return(
      <div>
        <p className="text-center mb-3">Aquí podrás encontrar todos los anuncios que han sido publicados en FreeLánzate.</p>
        <div onChange={changeForm} onSubmit={buscarPalabra}>
          <form>
            <div className="d-flex mb-3">
              <div className="form-floating w-100 me-4">
                <input
                    type="text"
                    className="form-control"
                    id="buscar"
                    name="buscar"
                    placeholder="buscar"
                />
                <label htmlFor="buscar">¿No encuentras lo que necesitas? Búscalo aquí directamente</label>
              </div>
              <button className="btn2 rounded btn-primary fw-bold mb-2" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Table hover>
            <thead>
            <tr className="table-primary welcome">
              <th colSpan="2" className="text-center">Anuncio</th>
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
                      <ModalAnuncio anuncio={anuncio} id={anuncio.UserId}  postUrl={anuncio.thumbnailUrl} freeUrl={anuncio.avatarUrl}/>
                    </td>
                  </tr>))
            }
            </tbody>
          </Table>
        </div>
      </div>
    )
  }else{
    return (
      <div>
        <p className="text-center mb-3">Aquí podrás encontrar todos los anuncios que han sido publicados en FreeLánzate.</p>
        <div onChange={changeForm} onSubmit={buscarPalabra}>
          <form>
            <div className="d-flex mb-3">
              <div className="form-floating w-100 me-4">
                <input
                    type="text"
                    className="form-control"
                    id="buscar"
                    name="buscar"
                    placeholder="buscar"
                />
                <label htmlFor="buscar">¿No encuentras lo que necesitas? Búscalo aquí directamente</label>
              </div>
              <button className="btn2 rounded btn-primary fw-bold mb-2" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
        <Table hover>
          <thead>
          <tr className="table-primary welcome">
            <th colSpan="2" className="text-center">Anuncio</th>
            <th>Precio</th>
            <th className="text-center">Descripción</th>
            <th></th>
          </tr>
          </thead>
          <tbody className="align-middle">
            {
              resultado.map((resultado)=>( 
              <tr>
                <td>
                  <img
                      src= {`https://free-lanzate-back.herokuapp.com/images/${resultado.thumbnailUrl}`}
                      alt="Imagen" width="160" height="90"
                      className="rounded"
                      onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/default.png`)}
                  />
                </td>
                <td>
                  {resultado.postTitle}
                  </td>
                  <td>
                  {resultado.postPrice}
                  </td>
                  <td>
                  {resultado.postDescription}
                  </td>
                <td>
                  <ModalAnuncio anuncio={resultado} id={resultado.Freelancer.User.id} postUrl={resultado.thumbnailUrl} freeUrl={resultado.Freelancer.User.avatarUrl}/>
                </td>
              </tr>))
            }
          </tbody>
      </Table>      
    </div>
  )
  }
}

export default BusquedaAnuncio
import {React, useState} from 'react'
import { buscarFreelancerPorPalabra } from '../../api/buscar';
import Table from 'react-bootstrap/Table';
import ModalFreelancer from '../ModalFreelancer';
import {starRating} from "../../api/reviews";

const BusquedaFreelancer = (props) => {

    const freelancer = props.freelancer

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
        const resultadoBusqueda = await buscarFreelancerPorPalabra(input.buscar);
        setResultado(resultadoBusqueda)
      }

      const freelancerRating = (num) => {
        return <p className="stars">{starRating(num)}</p>
      }

    const buscaInfo = (info) => {
      if (info === null){
        return (<p>-</p>)
      } else {
        return (<p className="mt-3">{info}</p>)
      }
    }
    console.log(freelancer)
    
    
      if (!resultado) {
        return(
          <div>
            <p className="text-center mb-3">Aquí podrás conocer a todos los freelancers que hacen uso de esta plataforma.</p>
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
                    <th></th>
                    <th>Nombre</th>
                    <th className="text-center">Oneliner</th>
                    <th className="text-center">Puntuación promedio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                {
                  freelancer.map((freelancer)=>(
                      <tr>
                        <td>
                          <img
                              src= {`https://free-lanzate-back.herokuapp.com/images/profiles/${freelancer.avatarUrl}`}
                              alt="Imagen" width="120" height="120"
                              className="rounded-circle"
                              onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/profiles/default_avatar.png`)}
                          />
                        </td>
                        <td>
                          {freelancer.firstName + " " + freelancer.lastName }
                        </td>
                        <td>
                          {buscaInfo(freelancer.oneliner)}
                        </td>
                        <td className="text-center">
                          {freelancerRating(freelancer.freelancerRating)}
                        </td>

                        <td>
                          <ModalFreelancer
                              freelancer={freelancer}
                              username={freelancer.username}
                              firstName={freelancer.firstName}
                              lastName={freelancer.lastName}
                              rating={freelancer.freelancerRating}
                              url = {freelancer.avatarUrl}
                          />
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
            <p className="text-center mb-3">Aquí podrás conocer a todos los freelancers que hacen uso de esta plataforma.</p>
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
                  <th></th>
                  <th>Nombre</th>
                  <th>Oneliner</th>
                  <th className="text-center">Puntuación Promedio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {
                  resultado.map((resultado)=>( 
                  <tr>
                    <td>
                      <img
                          src= {`https://free-lanzate-back.herokuapp.com/images/profiles/${resultado.User.avatarUrl}`}
                          alt="Imagen" width="120" height="120"
                          className="rounded-circle"
                          onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/profiles/default_avatar.png`)}
                      />
                    </td>
                    <td>
                      {resultado.User.firstName + " " + resultado.User.lastName}
                      </td>
                      <td>
                        {buscaInfo(resultado.oneliner)}
                      </td>
                      <td className="text-center">
                        {freelancerRating(resultado.freelancerRating)}
                      </td>
                    <td>
                      <ModalFreelancer
                          freelancer={resultado}
                          username={resultado.User.username}
                          firstName={resultado.User.firstName}
                          lastName={resultado.User.lastName}
                          rating={resultado.freelancerRating}
                          url = {resultado.User.avatarUrl}
                      />
                    </td>
                  </tr>))
                }
              </tbody>
          </Table>      
        </div>
      )
      }
}

export default BusquedaFreelancer

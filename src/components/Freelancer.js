import {React, useState, useEffect} from 'react'
import { buscarFreelancer } from '../api/buscar';
import BusquedaFreelancer from './buscar/BusquedaFreelancer';

export const Freelancer = () => {
  const[freelancer, setFreelancer] = useState([])

  useEffect(() => {
    buscarFreelancer().then(response => {
      setFreelancer(response);
    })
  }, [])

return(
    <BusquedaFreelancer freelancer={freelancer}/>
  )
}

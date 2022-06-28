import {React, useState, useEffect} from 'react'
import { buscarAnuncios } from '../api/buscar'
import BusquedaAnuncio from './buscar/BusquedaAnuncio';

export const Anuncios = () => {

  const[anuncio, setAnuncio] = useState([])

  useEffect(() => {
    buscarAnuncios().then(response => {
      setAnuncio(response);
    })
  }, [])


return(
    <BusquedaAnuncio anuncio={anuncio}/>
  )
}



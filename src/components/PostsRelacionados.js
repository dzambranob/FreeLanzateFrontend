import React, {useEffect, useState} from "react";
import {relatedPosts} from "../api/orders";
import {Table} from "react-bootstrap";
import ModalAnuncio from './ModalAnuncio';

const PostsRelacionados = ({id,cat}) => {

    const[recomendacion, setRecomendacion] = useState([])

    useEffect(() => {
        relatedPosts(id,cat).then(response => {
            setRecomendacion(response);
        })
    }, [])

    if(recomendacion.length === 0){
        return (
            <p className="welcome1">No se encontraron publicaciones relacionadas con este ítem.</p>
        )
    }
    else {
        return (
            <Table hover variant="light">
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
                    recomendacion.map((recomendacion) => (
                        <tr>
                            <td>
                                <img
                                    src= {`https://free-lanzate-back.herokuapp.com/images/${recomendacion.thumbnailUrl}`}
                                    alt="Imagen" width="160" height="90"
                                    className="rounded"
                                    onError={(e) => (e.target.src = `https://free-lanzate-back.herokuapp.com/images/default.png`)}
                                />
                            </td>
                            <td>
                                {recomendacion.postTitle}
                            </td>
                            <td>
                                ${recomendacion.postPrice}
                            </td>
                            <td>
                                {recomendacion.postDescription}
                            </td>
                            <td>
                                <ModalAnuncio anuncio={recomendacion} id={recomendacion.Freelancer.User.id} postUrl={recomendacion.thumbnailUrl} freeUrl={recomendacion.Freelancer.User.avatarUrl}/>
                            </td>
                        </tr>))
                }
                </tbody>
            </Table>
        )
    }
}

export default PostsRelacionados
import React, {useState, useEffect} from 'react'
import {notification} from "antd";
import {anuncia} from "../api/posts";
import{getAccessToken} from "../api/auth"
import jwtDecode from "jwt-decode";
import {buscarCategoria} from "../api/buscar";
import SubirImagen from '../components/SubirImagen';
import ModalApproved from "../components/ModalApproved";
import { unirImagen } from '../api/imagen';

const Anuncios = () => {

  const payment = localStorage.getItem('PAID');

  const[category, setCategory] = useState([])
  const[url, setUrl] = useState({
    thumbnailUrl: ""
  })

  useEffect(() => {
    buscarCategoria().then(response => {
      setCategory(response);
    })
  }, [])

  useEffect(() => {
    if (payment && payment !== "none") {
      setInputs({
        ...inputs,
        adPriority: parseInt(payment)
      });
    }
  }, [])

  const options = category.map((category)=>{
        return(
            <option value={category.id}>{category.categoryName}</option>
        )
      }
  )

  const user = jwtDecode(getAccessToken())

  const [inputs, setInputs] = useState({
    postTitle: "",
    freelancerId: "",
    postDescription: "",
    postPrice: "",
    postCategory: 1,
    thumbnailUrl: "",
    adPriority: 0
  });

  const changeForm = e => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      });
  };

  function loadApproved(){
    return(<ModalApproved location="anuncio"/>)
  }

  const publish = async e => {
    localStorage.removeItem('PAID')
    localStorage.setItem('PAID',"done")
    e.preventDefault();
    const result = await anuncia(inputs,user.sub.id);
    console.log(result)
    if (!result.id) {
      notification["error"]({
        message: result.message
      });
    } else {
        resetForm();
        añadirImagen(result.id)
        window.location.reload();
    }
  }

  async function añadirImagen(postId) {
    const result = await unirImagen(postId, url)
    console.log(result)
  }

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setInputs({
      postTitle: "",
      freelancerId: "",
      postDescription: "",
      postPrice: "",
      postCategory: 1,
      thumbnailUrl: "",
      adPriority: 0
    });
  };
  if (!payment || payment === "null") {
    localStorage.setItem("PAID",'none')
    window.location.href = "./tarifa"
  } else {
    return (
        <div className="contenedorPerfil text-center d-flex">
          <div className="container rounded row">
            <h5 className=" welcome mb-3 fw-bold">Anunciarme</h5>
            <div onSubmit={publish} onChange={changeForm}>
              <form>
                <div className="row mt-3">
                  <div className="input-group col">
                    <span className="input-group-text bg-gb text-white mb-3"><i className="bi bi-tag-fill"></i></span>
                    <div className="form-floating flex-grow-1">
                      <select
                          className="form-control mb-3"
                          id="postCategory"
                          name="postCategory"
                          placeholder="postCategory"
                          value={inputs.postCategory}
                      >
                        {options}
                      </select>
                      <label htmlFor="PostCategoryId" className="ms-3">Categoría</label>
                    </div>
                  </div>
                  <div className="form-floating col">
                    <input
                        type="text"
                        className="form-control mb-3 welcome2 fw-bold"
                        id="postTitle"
                        name="postTitle"
                        placeholder="postTitle"
                        value={inputs.postTitle}
                    />
                    <label htmlFor="postTitle" className="ms-3 text-white">Título</label>
                  </div>
                  <div className="input-group col">
                    <span className="input-group-text bg-gb text-white mb-3"><i className="bi bi-cash-coin"></i></span>
                    <div className="form-floating flex-grow-1">
                      <input
                          type="text"
                          className="form-control mb-3"
                          id="postPrice"
                          name="postPrice"
                          placeholder="postPrice"
                          value={inputs.postPrice}
                      />
                      <label htmlFor="postPrice" className="ms-3">Precio</label>
                    </div>
                  </div>
                </div>
                <div className="form-floating col">
                <textarea
                    className="form-control mb-3 descripcion"
                    id="postDescription"
                    name="postDescription"
                    placeholder="postDescription"
                    value={inputs.postDescription}
                />
                  <label htmlFor="postDescription" className="ms-3">¿En qué consiste el producto o servicio que deseas
                    ofrecer?</label>
                  <p className="mx-auto w-75 mt-2 mb-3">Para subir una fotografía de tu producto,
                    haz clic en <b>Seleccionar Archivo</b> y carga una imagen en
                    formato <b>.jpg, .png o .gif</b>, preferiblemente con relación de aspecto
                    <b> 16:9</b>. Luego, haz clic en <b>Guardar imagen</b>.
                  </p>
                  <SubirImagen setUrl={setUrl}/>
                </div>
                <div className="col">
                  <button className="w-70 btn btn-lg btn-primary mt-3 fw-bold" type="submit">Publicar</button>
                </div>
              </form>
            </div>
          </div>
          {
            loadApproved()
          }
        </div>
    )
  }
}

export default Anuncios
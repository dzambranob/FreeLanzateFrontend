import React, {Fragment, useState} from 'react';
import { subirImagen } from '../api/imagen';

const SubirImagen = ({setUrl}) => {
  const [file, setFile] = useState(null)
  const [valid, setValid] = useState("")

  const selectedHandler = e => {
    setFile(e.target.files[0])
  }

  const sendHandler = async e => {
    e.preventDefault();
    if(!file){
      localStorage.setItem('ERR','Debes seleccionar una imagen antes de subirla.')
      window.location.reload()
      return
    }
    const formdata = new FormData()
    formdata.append('image', file)
    
    const result = await subirImagen(formdata)

    setUrl({thumbnailUrl:result.filename})

    document.getElementById('fileinput').value = null

    setFile(null)

    setValid("done")
  }

  const ok = () => {
    if (valid === "done"){
      return ("Tu imagen se ha guardado correctamente. Ahora, haz clic en \"Publicar\"")
    }
  }

  return (
    <Fragment>

      <div className="welcome2 fw-bold p-3">
        <div className="row mt-2">
            <div className="col-10">
              <input 
                id="fileinput"
                name='fileinput' 
                onChange={selectedHandler} 
                className="form-control" 
                type="file"
                />
            </div>
            <div className="col-2">
              <button onClick={sendHandler} type="button" className="btn btn-primary fw-bold col-12">Guardar Imagen</button>
            </div>
          </div>
        {ok()}
        </div>

    </Fragment>
  );
}

export default SubirImagen
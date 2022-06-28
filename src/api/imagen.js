export function subirImagen(formdata){
    const url = 'https://free-lanzate-back.herokuapp.com/image/upload';
      const params = {
          method: "POST",
          body: formdata,
        };
  
      return fetch(url, params).then(response =>{
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function unirImagen(id, data){
    const url = 'https://free-lanzate-back.herokuapp.com/post/' + id + '/addImage';
      const params = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
          "Content-Type": "application/json"
        }
        };
  
      return fetch(url, params).then(response =>{
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function subirImagenPerfil(formdata){
    const url = 'https://free-lanzate-back.herokuapp.com/image/profileUpload';
      const params = {
          method: "POST",
          body: formdata,
        };
  
      return fetch(url, params).then(response =>{
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function imagenPersona(id, data){
    console.log("esto es id " + id)
    console.log("data " + data.thumbnailUrl)
    const url = 'https://free-lanzate-back.herokuapp.com/user/' + id + '/addImage';
      const params = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
          "Content-Type": "application/json"
        }
        };
  
      return fetch(url, params).then(response =>{
        return response.json();
      })
      .then(result => {
        return result;
      })
  }


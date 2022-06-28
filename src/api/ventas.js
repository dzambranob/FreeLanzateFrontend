export function traerVentas(id) {
    const url = 'https://free-lanzate-back.herokuapp.com/profile/' + id + '/sales';
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function traerMisAnuncios(id) {
    const url = 'https://free-lanzate-back.herokuapp.com/freelancer/post/' + id ;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

export function eliminarAnuncio(id) {
    const url = 'https://free-lanzate-back.herokuapp.com/post/' + id + "/delete";
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
}
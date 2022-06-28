export function traerItemsCanasta(id){
    const url = 'https://free-lanzate-back.herokuapp.com/shopping/getCartItems/' + id;
      const params = {
          method: "GET",
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

  export function agregarItem(data) {
    const url = 'https://free-lanzate-back.herokuapp.com/shopping/addItem';
    const params = {
      method: "POST",
      body: JSON.stringify(data),
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

  export function eliminarItem(id, postId) {
    const url = 'https://free-lanzate-back.herokuapp.com/shopping/removeItem/' + id + '/' + postId;
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

  export function cambiarCantidad(data) {
    const url = 'https://free-lanzate-back.herokuapp.com/shopping/changeQuantity';
    const params = {
      method: "POST",
      body: JSON.stringify(data),
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

  export function traerSesion(id){
    const url = 'https://free-lanzate-back.herokuapp.com/shopping/getSessionId/' + id;
      const params = {
          method: "GET",
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

  export function terminarCompra(id){
    const url = 'https://free-lanzate-back.herokuapp.com/shopping/endShoppingSession/' + id;
      const params = {
          method: "GET",
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
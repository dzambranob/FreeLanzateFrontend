export function buscarCategoria(){
    const url = 'https://free-lanzate-back.herokuapp.com/categories';
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

  export function buscarFreelancer(){
    const url = 'https://free-lanzate-back.herokuapp.com/freelancer';
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

  export function buscarAnuncios(){
    const url = 'https://free-lanzate-back.herokuapp.com/post/getAll';
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

    export function infoAnuncio(id){
        const url = 'https://free-lanzate-back.herokuapp.com/post/' + id;
        const params = {
            method: "POST",
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


    export function perfilFreelancer(id){
        const url = 'https://free-lanzate-back.herokuapp.com/freelancer/profile/' + id;
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


  export function buscarAnunciosPorCategoria(id){
    const url = 'https://free-lanzate-back.herokuapp.com/categories/' + id;
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

  export function buscarAnunciosPorPalabra(palabra){
    const url = 'https://free-lanzate-back.herokuapp.com/search?keyword=' + palabra;
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

  export function buscarFreelancerPorPalabra(palabra){
    const url = 'https://free-lanzate-back.herokuapp.com/searchFreelancer?keyword=' + palabra;
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

  export function buscarRecomendaciones(){
    const url = 'https://free-lanzate-back.herokuapp.com/recommendations';
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

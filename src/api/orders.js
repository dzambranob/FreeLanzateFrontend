export function verOrdenes(id){
    const url = 'https://free-lanzate-back.herokuapp.com/profile/' + id + '/orders';
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

export function relatedPosts(id,cat){
    const url = 'https://free-lanzate-back.herokuapp.com/post/' + id + "/" + cat + '/related';
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
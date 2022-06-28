export function anuncia(data,id){
    data.freelancerId = id
    const url = 'https://free-lanzate-back.herokuapp.com/post/create';
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

export function categorias(){
    const url = 'https://free-lanzate-back.herokuapp.com/categories';
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params).then(response =>{
        return response.text();
    })
        .then(result => {
            const res = eval(result)
            console.log(res)
            return res;
        })
}
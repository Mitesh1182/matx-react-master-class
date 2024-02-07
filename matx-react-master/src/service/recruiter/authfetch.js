const baseUrl = "http://localhost:4444/";
const authfetch = (url,method, body)=>{
    return fetch(baseUrl + url, {
        method :method,
        headers : {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(body)
    }).then(y=>y.json())
}
export default authfetch;
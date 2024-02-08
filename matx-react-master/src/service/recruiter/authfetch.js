const baseUrl = "http://localhost:4444/";
const authfetch = (url,method, body)=>{
    let token = JSON.parse( localStorage.setItem('token' , JSON.stringify(body)))
    return fetch(baseUrl + url, {
        method :method,
        headers : {
            'Content-Type' : "application/json",
            'Authorization' : 'Berer' + token
        },
        body: JSON.stringify(body)
    }).then(y=>y.json())
}
export default authfetch;
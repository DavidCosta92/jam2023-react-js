import axios from "axios";

const AUTH_URL = "http://localhost:8080/auth/"

class AuthService {
    login (username , password){
        
        return axios
        .post(AUTH_URL+"login", { username , password })
        .then(resp => {
            if(resp.data.token){
                this.saveAuthUserToken(resp.data)
            }
            return resp.data && true
        })
    }
    logout(){ localStorage.removeItem("user")}

    register(username, password, firstName, lastName, country){
        return axios.post(AUTH_URL+"register", {username, password, firstName, lastName, country})
    }
    getCurrentUser(){
        return JSON.stringify(localStorage.getItem("user"))
    }
    saveAuthUserToken(token){
        localStorage.setItem("user" , JSON.stringify(token)) 
        console.log(">>>>>>>>>>>>>>>>-TOKEN GUARDADO EN LOCAL STORAGE! ")
    }
}

export default new AuthService();
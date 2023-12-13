// @ts-nocheck
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
    authHeader(){        
        const user = JSON.parse(localStorage.getItem("user"))
        if(user && user.token){
            return {
                Authorization: "Bearer " + user.token
            }
        } else {
            return {}
        }
    }

    async getLoguedUserDetails(){
        let loguedUser = null
        fetch(AUTH_URL+"user" , {headers : this.authHeader()}) //  AuthService.authHeader() => carga el TOKEN si es que existe        
        .then((response)=> {
            if(response.status === 200){
                response.json()
                .then((data) => {
                    loguedUser = data
                    return loguedUser 
                })
            } else if (response.status === 400){
                // no estas logueado redirigor a login?
                return loguedUser 
            }
        })
    }


}
export default new AuthService();

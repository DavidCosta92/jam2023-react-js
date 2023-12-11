// @ts-nocheck
import useFetch from "../customsHooks/useFetch"
import AuthService from "../../utils/AuthService"


export default function LoginForm(){    
    let usernameLogin = ""
    let passwordLogin = ""

    async function logIn(){
        usernameLogin = document.getElementById("usernameLogin").value
        passwordLogin = document.getElementById("passwordLogin").value
        const loguedUser = await AuthService.login(usernameLogin,passwordLogin)           
        console.log("------- loguedUser -->>>" + loguedUser)
    }

    return (
        <>
        <form className="conteiner conteiner-fluid m-4 p-4">
            <div class="mb-3">
                <label for="emailLogin" class="form-label">Nombre de Usuario</label>
                <input type="text" class="form-control" id="usernameLogin" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="passwordLogin" class="form-label">Password</label>
                <input type="password" class="form-control" id="passwordLogin"/>
            </div>
            
        </form>
        <button onClick={() => logIn()} class="btn btn-primary">logueate</button>

        </>
    )
}
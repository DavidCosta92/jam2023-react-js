// @ts-nocheck
import React from "react"
import AuthService from "../../utils/AuthService"


export default function RegisterForm(){    
    let username = ""
    let password = ""
    let passwordConfirm = ""
    let firstName = ""
    let lastName = ""
    let country = ""
    
    async function singUp(){
        username = document.getElementById("username").value
        password = document.getElementById("password").value
        passwordConfirm = document.getElementById("passwordConfirm").value
        firstName = document.getElementById("firstName").value
        lastName = document.getElementById("lastName").value
        country = document.getElementById("country").value


        if (password === passwordConfirm){
            const register = await (await AuthService.register(username, password, firstName, lastName, country))
            if(register.status === 200){
                AuthService.saveAuthUserToken(register.data)
            } else{                
                console.log("!!!!!!!!!!!!!!!!! OCURRIO UN ERROR CON EL REGISTRO !!!!!!!!!!!!!!!!!!!!")
                console.log("OCURRIO UN ERROR CON EL REGISTRO")
                console.log(register.status)
                console.log(register)
                console.log("!!!!!!!!!!!!!!!!! OCURRIO UN ERROR CON EL REGISTRO !!!!!!!!!!!!!!!!!!!!")
            }
        } else {
            console.log("!!!!!!!!!!!!!!!!!!!!!!PASSWORD NO COINCIDEN!!!!!!!!!!!!!!!!!!!!!!!")
            console.log("PASSWORD NO COINCIDEN!")
            console.log("!!!!!!!!!!!!!!!!!!!!!!PASSWORD NO COINCIDEN!!!!!!!!!!!!!!!!!!!!!!!")
        }
    }

    return (
        <>
        <form className="conteiner conteiner-fluid m-4 p-4">
            <div class="mb-3">
                <label for="email" class="form-label">Nombre de Usuario</label>
                <input type="text" class="form-control" id="username" aria-describedby="emailHelp"/>
                <div id="email" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password"/>
            </div>
            <div class="mb-3">
                <label for="passwordConfirm" class="form-label">Confirmar password</label>
                <input type="password" class="form-control" id="passwordConfirm"/>
            </div>
            
            <div class="mb-3">
                <label for="firstName" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="firstName"/>
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="lastName"/>
            </div>
            <div class="mb-3">
                <label for="country" class="form-label">Pais</label>
                <input type="text" class="form-control" id="country"/>
            </div>


        </form>
        <button onClick={() => singUp()} class="btn btn-primary">Registrate</button>

        </>
    )
}
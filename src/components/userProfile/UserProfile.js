// @ts-nocheck

import { useEffect, useState } from "react";
import AuthService from "../../utils/AuthService"

const AUTH_URL = "http://localhost:8080/auth/"

export default function UserProfile(){
    const [loguedUser , setLoguedUser] = useState(false);

    function getLoguedUserDetails(){
        fetch(AUTH_URL+"user" , {headers : AuthService.authHeader()}) //  AuthService.authHeader() => carga el TOKEN si es que existe        
        .then((response)=> {
            if(response.status == 200){
                response.json()
                .then((data) => {
                    if (data) {
                        setLoguedUser(data)
                    } else {
                        setLoguedUser(false)
                    }
                })
            } else if (response.status == 400){
                setLoguedUser(false)
            }
        })
    }
    getLoguedUserDetails()

    return (
        <>
            {loguedUser? (
                <div class="card text-center">
                    <div class="card-header">
                        Usuario logueado
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{loguedUser.username}</h5>
                        <p class="card-text">{loguedUser.firstName}</p>
                        <p class="card-text">{loguedUser.lastName}</p>
                        <p class="card-text">{loguedUser.country}</p>
                        <button onClick={() => AuthService.logout()}>Cerrar sesion</button>
                    </div>
                    <div class="card-footer text-muted">
                        Aca podriamos mostrar el rol??''
                    </div>
                </div>
            ) : (
                <div className="alert alert-warning" role="alert">
                    <p>NO HAY USUARIO LOGUEADO</p>
                </div>
            )}
            


        </>
    )

}
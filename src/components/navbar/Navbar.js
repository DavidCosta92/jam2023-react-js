
// @ts-nocheck
import React from "react"
import './Navbar.css'
import UserToggle from "./userToggle/UserToggle"

export default function Navbar(props){
    let loguedUser = {    
        username : "david1",
        firstName : "David harcodeado"
    }
    return (    
        <> 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="../assets/img/logoJAM-welcome.png" alt=""  height="24" className="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Mis cursos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <UserToggle user={loguedUser}/>
                </ul>
                </div>
            </div>
        </nav>
        <span class="goldenDivider-top"></span>
        </>   
    )

}
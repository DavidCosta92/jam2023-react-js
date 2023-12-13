// @ts-nocheck
import React from "react"
import "./Footer.css"

export default function Footer(){
    return(
        <>
        <span class="goldenDivider-bottom"></span>
        <footer class="footer">
        <div class="logo">
            <a>
                <img src="../assets/img/logoJAM-eduProyect.png"/>
            </a>
        </div>
        <div class="info">
            <p class="title">Telefono</p>
            <span class="infoItem">
                <img src="../assets/icons/phone.png"/>
                <p>+54 264 464 7572</p>
            </span>
        </div>
        
        <div class="info">
            <p class="title">Email</p>
            <span class="infoItem">
                <img src="../assets/icons/email.png"/>
                <p>Contacto: ejemplo@gmail.com</p>
            </span>
        </div>
        
        <div class="info">
            <p class="title">Visitanos</p>
            <span class="infoItem">
                <img src="../assets/icons/gps-dot.png"/>
                <p>+54 264 464 7572</p>
            </span>
        </div>
    </footer>
    </>
    )
}
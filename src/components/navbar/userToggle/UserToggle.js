import React from 'react'
import './UserToggle.css'

export default function UserToggle (user){
    const {username , firstName , lastName} = user.user
    return (
        <span>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {firstName}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">mis ops 1</a></li>
                                <li><a className="dropdown-item" href="#">mis ops 2</a></li>
                                <li><a className="dropdown-item" href="#">Mi perfil</a></li>
                                <li><a className="dropdown-item" href="#">Cerrar sesion</a></li>
                </ul>                        
            </li>  
        </span>
    )
}
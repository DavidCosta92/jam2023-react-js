// @ts-nocheck

import { useEffect, useState } from "react";
import AuthService from "../../utils/AuthService"


export default function UserAccount(){
    const [loguedUser , setLoguedUser] = useState(false);
    
    return (
        <div>
            
            {loguedUser == true && (
                <>
                <h3>Usuario logueado</h3>
                <button onClick={() => AuthService.logout()}>Cerrar sesion</button>
                </>
            )}
        </div>
    )

}
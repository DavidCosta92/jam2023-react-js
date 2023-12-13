// @ts-nocheck

import { useEffect, useState } from "react"
import AuthService from "../../utils/AuthService";


export default function useFetch (url){
    const [data , setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error , setError] = useState(null)

    // esto es para cancelar fetching de datos
    const [abortController , setAbortController] = useState(null)

    useEffect(()=>{
        const abortController = new AbortController()
        setAbortController (abortController)
        setLoading(true)

        
        fetch(url , {signal : abortController.signal , headers : AuthService.authHeader()}) //  AuthService.authHeader() => carga el TOKEN si es que existe        
        .then((response)=> {
            if(response.status == 200){
                response.json()
                .then((data) => setData(data))
            } else if (response.status == 403) {
                setError(response.status)
            }
        })
        .catch((error) => {
            if (error.name === "AbortError"){
                console.log("Accion cancelada por usuario")
            } else {
                setError(error)
            }
        })
        .finally(()=> setLoading(false))

        return () => abortController.abort() // esta linea se ejecuta cuando el componente se destruye, ej sali de la app
    }, []) // los [] hacen que solo se ejecute cuando se crea el componente

    const handlerCancelRequest = () =>{
        if(abortController){
            abortController.abort()
            setError("Accion cancelada por usuario")
        }
    }
    return {data , loading , error , handlerCancelRequest}; // devuelvo como obj porque es mas facil desestructurlo luego si agrego mas cosas..
}
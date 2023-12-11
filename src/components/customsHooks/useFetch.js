// @ts-nocheck

import { useEffect, useState } from "react"


export default function useFetch (url ){
    const [data , setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null);

    // esto es para cancelar fetching de datos
    const [abortController , setAbortController] = useState(null);


    useEffect(()=>{
        const abortController = new AbortController();
        setAbortController (abortController)
        setLoading(true)

        
        fetch(url , {signal : abortController.signal})
        .then((response)=> response.json())
        .then((data) => setData(data))
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
import { useContext, useState } from "react"
import impartidos from "../../mocks/mock-impartido/mock-impartido"
import UserContext from "../../context/UserContext/UserContext"
import { useEffect } from "react"

function useMisModulosImpartidos() {
    const usuario = useContext(UserContext)
    
        const[buscando,setBuscando]=useState(false)
        
    const[lista,setLista]=useState([])

    useEffect(()=>{
            setLista(impartidos[usuario]?.lista ?? [])
        }, [usuario])

    return{buscando,lista}
}
export default useMisModulosImpartidos;
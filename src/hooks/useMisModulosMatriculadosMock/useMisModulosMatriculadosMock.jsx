import { useContext, useState } from "react"
import modulosMatriculados from "../../mocks/mock-matriculado/mock-matriculado"
import UserContext from "../../context/UserContext/UserContext"
import { useEffect } from "react"

function useMisModulosMatriculadosMock() {
    const usuario = useContext(UserContext)
    const[buscando,setBuscando]=useState(false)
        
    const[lista,setLista]=useState([])

    useEffect(()=>{
            setLista(modulosMatriculados[usuario]?.lista ?? [])
        }, [usuario])

    return{buscando,lista}
}
export default useMisModulosMatriculadosMock;
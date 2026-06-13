import { useContext } from "react";
import TokenContext from "../../context/TokenContext/TokenContext";
import UserContext from "../../context/UserContext/UserContext";
import Acordeon from "../Acordeon/Acordeon"

const Roles = () => {
    
    const token = useContext(TokenContext);
    const usuario = useContext(UserContext);
    
    return(
        <aside>
            <h2>ROLES</h2>
            <p>{token}</p>
            <p>Usuario: {usuario}</p>
            <Acordeon></Acordeon>
        </aside> 
    )
}
export default Roles;
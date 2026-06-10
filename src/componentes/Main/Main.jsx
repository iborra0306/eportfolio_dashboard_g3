import { useContext } from "react"
import UserContext from "../../context/UserContext/UserContext"
import NuevaEvidencia from '../NuevaEvidencia/NuevaEvidencia'

const Main = (props) => {

    const usuario = useContext(UserContext);

    return(
        <main>
            <h2>MAIN</h2>
            <p>{props.menu}</p>

            <NuevaEvidencia></NuevaEvidencia>

        </main>

    )
}
export default Main;
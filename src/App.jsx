import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Cabecera from './componentes/Cabecera/Cabecera';
import Roles from './componentes/Roles/Roles';
import Main from './componentes/Main/Main';

function App() {

  let usuario = "Gabriel"
  let token = "token"
  let menu = "menu"

  return (

      <div className="container-fluid vh-100 d-flex flex-column p-0 m-0 overflow-hidden">

        <div className="row g-0">
            <div className="cabecera col-12">
              <Cabecera usuario={usuario}>
            </Cabecera></div>
        </div>
        
        <div className="row g-0 flex-grow-1 overflow-hidden">
            <div className="roles col-3 h-100">
              <Roles token={token}></Roles>
            </div>         
            <div className="main col-9 h-100">
              <Main menu={menu}></Main>
            </div>  
        </div >

      </div > 
  )
}

export default App

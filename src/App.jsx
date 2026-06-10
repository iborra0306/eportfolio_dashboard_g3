import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

import Cabecera from './componentes/Cabecera/Cabecera';
import Roles from './componentes/Roles/Roles';
import Main from './componentes/Main/Main';

import TokenContext from './context/TokenContext/TokenContext';
import UserContext from './context/UserContext/UserContext';

function App() {

  let usuario = "Gabriel"
  let token = "token"
  let menu = "menu"

  const [user, setUser] = useState(usuario)

  return (
    <TokenContext.Provider value={token}>

      <div className="container-fluid vh-100 d-flex flex-column p-0 m-0 overflow-hidden">

        <div className="row g-0">
            <div className="cabecera col-12">
              <Cabecera usuario={user}>
            </Cabecera></div>
        </div>

        <UserContext.Provider value={user}>
          <div className="row g-0 flex-grow-1 overflow-hidden">
              <div className="roles col-3 h-100">
                <Roles></Roles>
              </div>         
              <div className="main col-9 h-100">
                <Main menu={menu}></Main>
              </div>  
          </div>
        </UserContext.Provider>

      </div>

    </TokenContext.Provider>
  )
}

export default App

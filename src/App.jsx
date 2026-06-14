import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import Cabecera from './componentes/Cabecera/Cabecera';
import Roles from './componentes/Roles/Roles';
import Main from './componentes/Main/Main';
import NuevaEvidencia from './componentes/NuevaEvidencia/NuevaEvidencia';
import FuncionalidadEstudiante from './paginas/FuncionalidadEstudiante/FuncionalidadEstudiante';
import FuncionalidadDocente from './paginas/FuncionalidadDocente/FuncionalidadDocente';
import PaginaFamiliasProfesionales from "./paginas/PaginaFamiliasProfesionales/PaginaFamiliasProfesionales";

import TokenContext from './context/TokenContext/TokenContext';
import UserContext from './context/UserContext/UserContext';

function App() {

  const usuario = "Victor"
  const token = "token"
  const menu = "menu"

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
                  <Routes>
                    <Route path='/' element={<Main menu={menu}></Main>}/>
                    <Route path='/funcionalidadestudiante/:moduloId' element={<FuncionalidadEstudiante></FuncionalidadEstudiante>}></Route>
                    <Route path='/funcionalidaddocente/:moduloId' element={<FuncionalidadDocente></FuncionalidadDocente>}></Route>
                    <Route path="/familiasprofesionales" element={<PaginaFamiliasProfesionales />} />
                  </Routes>
              </div>  
          </div>
        </UserContext.Provider>

      </div>

    </TokenContext.Provider>
  )
}

export default App

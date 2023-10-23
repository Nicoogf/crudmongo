import './App.css' ;

import AgregarUsuario from './AgregarUsuario' ;
import ListaDeUsuarios from './ListaDeUsuarios' ;
import EditarUsuario from './EditarUsuario' ;

import { BrowserRouter , Routes , Route } from "react-router-dom" ;
import Nav from './components/Nav';


function App() {


  return (
    
      <div>
       
       <Nav />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <ListaDeUsuarios /> } exact />
            <Route path='/agregarusuario' element={ <AgregarUsuario /> } exact />
            <Route path='/editarusuario' element={ <EditarUsuario />} exact />
          </Routes> 
        </BrowserRouter>
        
 
      </div>
      
  )
}

export default App

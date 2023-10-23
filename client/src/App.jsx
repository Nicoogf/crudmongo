import './App.css' ;

import AgregarUsuario from './AgregarUsuario' ;
import ListaDeUsuarios from './ListaDeUsuarios' ;
import EditarUsuario from './EditarUsuario' ;

import { BrowserRouter , Routes , Route } from "react-router-dom" ;


function App() {


  return (
    
      <div>
        <h1 className='text-red-500'> M . E . R . N</h1>
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

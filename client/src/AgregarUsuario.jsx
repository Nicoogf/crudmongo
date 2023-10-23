import React from 'react'


const AgregarUsuario = () => {

    const agregarUsuario = () =>{

    }  
  
  return (


    <div>
   

      <div>
        <div>
          <h1 className='mt-4'>Crear nuevo Usuario</h1>
        </div>
      </div>  

      <div>
        <div>
          <div className='mb-3'>
            <label htmlFor='nombre' className='text-xl'> Nombre </label>
            <input type='text' className='form-control bg-green-200 p-2 rounded-lg'></input>
          </div>   

          <div className='mb-3'>
            <label htmlFor='email' className='text-xl'> Email </label>
            <input type='email' className='form-control bg-green-200 p-2 rounded-lg'></input>
          </div>  

          <div className='mb-3'>
            <label htmlFor='telefono' className='text-xl'> Telefono </label>
            <input type='number' className='form-control bg-green-200 p-2 rounded-lg'></input>
          </div>  
          <button onClick={ agregarUsuario } className='bg-teal-400 px-6 py-2 rounded-lg font-bold text-white'> Guardar Usuario </button>       
        </div>
      </div>  

    </div>
  )
}

export default AgregarUsuario
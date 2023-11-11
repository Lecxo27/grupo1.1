import React, { Fragment, useState } from 'react';
//import {RenderUser} from './components/RenderUser'
import { RenderUser } from './RenderUser';


export const Registro = (props) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState([]);

  function addUser(e) {
    e.preventDefault();
    let usuario = { nombre: nombre, apellido: apellido, email: email}
    setEstado([...estado, usuario]);
  }

  return (
    <div class="flex flex-row">
    <Fragment>
      <form action="" onSubmit={ (e) => addUser(e)}>
        <div class="basis-1/2">
        <input onChange={ (e) => setNombre(e.target.value)} class="rounded-r-3xl" type="text" id="nombre" name="nombre" placeholder='Nombre'/>
        </div>
        <br/>
        <div class="basis-1/2">
        <input onChange={ (e) => setApellido(e.target.value)} class="rounded-r-3xl" type="text" id="apellido" name="apellido" placeholder='apellido'/>
        </div>
        <br/>
        <div class="basis-1/2">
        <input onChange={ (e) => setEmail(e.target.value)} class="rounded-r-3xl" type="text"  id="email" name="email" placeholder='Email'/>
        </div>
        <br/>
        <button class="bg-sky-700 px-4 py-2 rounded-r-3xl text-white hover:bg-sky-800 sm:px-8 sm:py-3">Registrarme</button>
        
      </form>
      
    </Fragment>
    <RenderUser user={estado}/>
    </div>
  )
}



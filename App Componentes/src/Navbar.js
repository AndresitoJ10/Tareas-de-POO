
import Lista from './Lista'
import Carousel from './Carousel';
import React, { useState } from 'react';
import Regis from './Register';

const styles = {
    display: 'flex', 
    justifyContent: 'center', 
    listStyle: 'none',
    
    };
    const styl= {
        margin: '0 10px',
        textDecoration: 'none',
        
        };
    const div={
      background:'#2D9596',
     
    }
const Navbar = () => {
  const [mostrarCarrusel, setMostrarCarrusel] = useState(false);

  const toggleCarrusel = () => {
    setMostrarCarrusel(!mostrarCarrusel);
  };
  const [agregar, setAgregar] = useState(false);

  const toggleRegis = () => {
    setAgregar(!agregar);
  };

    const mostrarListaTareas = () => {
        return <Lista/>;
      };
  const mostrarDatosGuardados = () => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      alert(`Nombre: ${usuario.nombre}\nEmail: ${usuario.email}\nContraseña: ${usuario.contrasena}`);
    } else {
      alert('No hay datos de usuario guardados');
    }
  };

  return (
    <nav>
      <ul style={styles}>
        <li style={styl}><a href="#" onClick={mostrarListaTareas}>Inicio</a></li>
        <li style={styl}><a href="#" onClick={toggleCarrusel}>Carruzel de imagenes</a></li>
        <li style={styl}><a href="#" onClick={mostrarDatosGuardados}>contacto</a></li>
        <li style={styl} ><a href='#' onClick={toggleRegis}>Registro</a></li>
      </ul>
      <div style={div}>
      {mostrarCarrusel && <Carousel />}
      {agregar && <Regis/>}
      </div>
      
    </nav>
  );
};

export default Navbar;


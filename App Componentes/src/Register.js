import React, { useState } from 'react';

const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

const handleRegistro = () => {
    const usuario = {
        nombre: nombre,
        email: email,
        contrasena: contrasena
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Datos guardados en localStorage');
    };

    return (
    <form>
        <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
        Contraseña:
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegistro}>Registrar</button>
    </form>
    );
};

export default RegistroForm;


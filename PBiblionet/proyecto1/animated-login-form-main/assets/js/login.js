

import { ManageAccount } from './firebase.js';

document.getElementById("inicio").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  const account = new ManageAccount();
  account.authenticate(email, password);
  window.open("../../../POO_Libreria-main/Proyecto/categorias.html");
});

console.log('Formulario de Inicio de Sesión');
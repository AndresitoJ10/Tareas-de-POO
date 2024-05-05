import { ManageAccount } from './firebase.js';

document.getElementById("formulario-crear").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const account = new ManageAccount();
  account.register(email, password);
  window.open("./index.html")

});

console.log('Formulario de Registro');
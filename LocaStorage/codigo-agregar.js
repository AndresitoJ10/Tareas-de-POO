
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('nom').value;
    var phone = document.getElementById('num').value;
    var email = document.getElementById('correo').value;
    agregarContacto(name, phone, email);
    this.reset();
});

function agregarContacto(nombre, telefono, emai) {
    var contactos = JSON.parse(localStorage.getItem('contactos')) || [];
    contactos.push({ nombre: nombre, telefono: telefono, emai: emai });
    localStorage.setItem('contactos', JSON.stringify(contactos));
}

function mostrarContactos() {
    var contactos = JSON.parse(localStorage.getItem('contactos')) || [];
    var tableBody = document.getElementById('contactBody');
    tableBody.innerHTML = '';
    contactos.forEach(function(contacto) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + contacto.nombre + '</td><td>' + contacto.telefono + '</td><td>' + contacto.emai + '</td>';
        tableBody.appendChild(row);
    });
}

mostrarContactos();

function borrar(){
    localStorage.clear();
}

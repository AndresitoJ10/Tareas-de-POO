// Importar los servicios de Firebase
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';
import{ initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

// Configurar Firebase con tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyBBLuCMQmYa3LIuIr6SA4_QfHjLZpPsv74",
    authDomain: "proyecto-poo-3cffa.firebaseapp.com",
    projectId: "proyecto-poo-3cffa",
    storageBucket: "proyecto-poo-3cffa.appspot.com",
    messagingSenderId: "551865741038",
    appId: "1:551865741038:web:e7f3a5e95d88573817cdff",
    measurementId: "G-7C6VQ61TRR"
  
};

// Inicializar la aplicación de Firebase

       const app = initializeApp(firebaseConfig);

// Inicializar Firestore
        const db = getFirestore(app);

        const librosRef = collection(db, 'libro');
         // Importar los servicios de Firebase

        // Función para agregar un libro a Firestore
        function agregarLibro() {
            const titulo = document.getElementById("titulo").value;
            const autor = document.getElementById("autor").value;
            const genero = document.getElementById("genero").value;

            // Agrega el libro a Firestore
            librosRef.add({
                titulo: titulo,
                autor: autor,
                genero: genero
            }).then(function() {
                console.log("Libro agregado correctamente.");
                // Limpia el formulario después de agregar el libro
                document.getElementById("titulo").value = "";
                document.getElementById("autor").value = "";
                document.getElementById("genero").value = "";
            }).catch(function(error) {
                console.error("Error al agregar el libro: ", error);
            });
        }

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

// Función para obtener todos los datos de una colección
async function obtenerDatosColeccion() {
    // Referenciar la colección
    const miColeccion = collection(db, 'libros');
  
    // Obtener todos los documentos de la colección
    const querySnapshot = await getDocs(miColeccion);
  
    // Iterar sobre cada documento
    querySnapshot.forEach((documento) => {
      // Acceder a los datos del documento
      const datos = documento.data();
      
      console.log(`ID del documento: ${documento.id}`);
      
      // Iterar sobre cada campo en los datos del documento
      for (const campo in datos) {
        if (datos.hasOwnProperty(campo)) {
          const valor = datos[campo];
          console.log(`Campo: ${campo}, Valor: ${valor}`);
        }
      }
      
      console.log('---'); // Separador entre documentos
    });
    imprimir(datos);
  }
  
  // Llamar a la función para obtener los datos de la colección
  obtenerDatosColeccion();
function imprimir(datos){
    console.log('Procesando datos del documento:');
    
    // Acceder a los campos usando la notación de punto
    console.log(`Campo1: ${datos.titulo}`);
    console.log(`Campo2: ${datos.descripcion}`);
    // Agrega más campos según sea necesario

    // Realiza operaciones con los datos
    // Por ejemplo, si tienes un campo "titulo" y "autor"
    console.log(`Título: ${datos.titulo}, Autor: ${datos.descripcion}`);
}

// Inicializar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBBLuCMQmYa3LIuIr6SA4_QfHjLZpPsv74",
  authDomain: "proyecto-poo-3cffa.firebaseapp.com",
  projectId: "proyecto-poo-3cffa",
  storageBucket: "proyecto-poo-3cffa.appspot.com",
  messagingSenderId: "551865741038",
  appId: "1:551865741038:web:e7f3a5e95d88573817cdff",
  measurementId: "G-7C6VQ61TRR"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
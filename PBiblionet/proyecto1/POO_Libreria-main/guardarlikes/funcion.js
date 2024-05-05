// Función para guardar un like en Firestore
function guardarLike(bookId) {
    console.log ("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", bookId);
    const libroRef = db.collection("calificacion").doc(bookId);
    libroRef.update({
        likes: firebase.firestore.FieldValue.increment(1)
    })
    .then(() => {
        console.log("Like guardado correctamente");
    })
    .catch((error) => {
        console.error("Error al guardar el like: ", error);
    });
}

// Referencia al documento en Firestore
const docRef = db.collection("calificacion").doc("calificacion");

// Obtener el valor del campo "likes"
docRef.get().then((doc) => {
    if (doc.exists) {
        // Si el documento existe, obtén el valor del campo "likes"
        const num_likes = doc.data().likes;
        if (num_likes >= 10){
            // Referencia a la etiqueta de parrafo por su ID
            const miParrafo = document.getElementById("miParrafo");

            // Texto a mostrar
            const texto = "Principito";

            // Asigna el texto al contenido del elemento de párrafo
            //miParrafo.textContent = texto;
        }
    } else {
        console.log("No se encontró el documento");
    }
}).catch((error) => {
    console.error("Error al obtener el documento:", error);
});

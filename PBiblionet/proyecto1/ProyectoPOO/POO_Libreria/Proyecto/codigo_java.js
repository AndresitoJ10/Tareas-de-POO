function ir(){
    window.open("./crear.html")
}
function fui(){
    window.open("../../../animated-login-form-main/index.html")
}
// Función para crear un componente de libro
function createBookComponent(title, description, imageUrl, downloadLink) {
    // Crear el contenedor del libro
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');

    // Crear el título
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = title;


    // Crear la imagen
    const bookImage = document.createElement('img');
    bookImage.src = imageUrl;
    bookImage.alt = title;
    
    // Crear la descripción
    const bookDescription = document.createElement('p');
    bookDescription.textContent = description;

    // Crear el botón de descarga
    const downloadButton = document.createElement('a');
    downloadButton.href = downloadLink;
    downloadButton.textContent = 'Descargar';
    downloadButton.classList.add('download-button');

    // Agregar los elementos al contenedor del libro
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookDescription);
    bookContainer.appendChild(bookImage);
    bookContainer.appendChild(downloadButton);

    // Retornar el contenedor del libro
    return bookContainer;
}
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el contenedor de la biblioteca
    const libraryContainer = document.getElementById('library');

    // Datos para los libros
    const books = [
        {
            title: 'El Gran Libro',
            description: 'Una descripción fascinante del gran libro.',
            imageUrl: 'https://via.placeholder.com/150',
            downloadLink: 'https://example.com/descargar1'
        },
        {
            title: 'La Aventura Increíble',
            description: 'Una increíble historia de aventuras.',
            imageUrl: 'https://via.placeholder.com/150',
            downloadLink: 'https://example.com/descargar2'
        },
        {
            title: '50sombras',
            description: 'Una increíble historia de aventuras.',
            imageUrl: 'https://via.placeholder.com/150',
            downloadLink: 'https://example.com/descargar2'
        }

        // Puedes agregar más libros aquí...
    ];

    // Crear y agregar componentes de libro al contenedor
    books.forEach(book => {
        // Crear un componente de libro con los datos de cada libro
        const newBook = createBookComponent(
            book.title,
            book.description,
            book.imageUrl,
            book.downloadLink
        );

        // Agregar el componente de libro al contenedor de la biblioteca
        libraryContainer.appendChild(newBook);
    });
});

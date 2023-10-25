// Selecciona el elemento con la clase 'carousel-container' y lo almacena en la variable carouselContainer.
const carouselContainer = document.querySelector('.carousel-container');

// Selecciona todos los elementos con la clase 'carousel-slide' y los almacena en la variable carouselSlides como una lista.
const carouselSlides = document.querySelectorAll('.carousel-slide');

// Selecciona el elemento con el ID 'prevButton' y lo almacena en la variable prevButton.
const prevButton = document.getElementById('prevButton');

// Selecciona el elemento con el ID 'nextButton' y lo almacena en la variable nextButton.
const nextButton = document.getElementById('nextButton');

// Selecciona el formulario con el ID 'contactForm' y lo almacena en la variable contactForm.
const contactForm = document.getElementById('contactForm');

// Selecciona el elemento con el ID 'showAlertButton' y lo almacena en la variable showAlertButton.
const showAlertButton = document.getElementById('showAlertButton');

// Selecciona el elemento con el ID 'changeColorButton' y lo almacena en la variable changeColorButton.
const changeColorButton = document.getElementById('changeColorButton');

// Inicializa una variable currentSlide que se utilizará para realizar un seguimiento de la diapositiva actual en el carrusel.
let currentSlide = 0;

// Define una función llamada showSlide que toma un índice de diapositiva y muestra la diapositiva correspondiente.
function showSlide(slideIndex) {
    // Oculta todas las diapositivas configurando su estilo de visualización en 'none'.
    carouselSlides.forEach(slide => slide.style.display = 'none');
    
    // Muestra la diapositiva específica configurando su estilo de visualización en 'block'.
    carouselSlides[slideIndex].style.display = 'block';
}

// Define una función llamada nextSlide que avanza a la siguiente diapositiva en el carrusel.
function nextSlide(slideIndex) {
    // Calcula el índice de la siguiente diapositiva utilizando la aritmética modular.
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    // Llama a la función showSlide para mostrar la nueva diapositiva.
    showSlide(currentSlide);
}

// Define una función llamada prevSlide que retrocede a la diapositiva anterior en el carrusel.
function prevSlide() {
    // Calcula el índice de la diapositiva anterior utilizando la aritmética modular.
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    // Llama a la función showSlide para mostrar la nueva diapositiva.
    showSlide(currentSlide);
}

// Muestra la primera diapositiva al cargar la página.
showSlide(currentSlide);

// Agrega un oyente de eventos al botón 'nextButton' para avanzar a la siguiente diapositiva al hacer clic.
nextButton.addEventListener('click', nextSlide);

// Agrega un oyente de eventos al botón 'prevButton' para retroceder a la diapositiva anterior al hacer clic.
prevButton.addEventListener('click', prevSlide);

// Agrega un oyente de eventos al formulario 'contactForm' para prevenir su envío predeterminado y mostrar una alerta.
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('¡Formulario enviado!'); // Aquí puedes agregar tu lógica de envío de formulario.
});

// Agrega un oyente de eventos al botón 'showAlertButton' para mostrar una alerta personalizada al hacer clic.
showAlertButton.addEventListener('click', function () {
    alert('¡Esto es una alerta personalizada!');
});

// Agrega un oyente de eventos al botón 'changeColorButton' para cambiar el color de fondo del cuerpo del documento al hacer clic.
changeColorButton.addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
});

// Define una función que genera un color hexadecimal aleatorio.
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



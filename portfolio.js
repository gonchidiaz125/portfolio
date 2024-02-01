//funcion para scroll suave:
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.scroll').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  
  //----------------------------------------------------------------------------------------------------------------

  // Código para el marcado de secciones en el Navbar al hacer scroll
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href').slice(1) === current) {
          navLink.classList.add('active');
        }
      });
    });
  });

//-----------------------------------------------------------------------------------------------------------------------

//funcion para desplegar un texto completo 
function mostrarMas() {
  let textoInicial = document.getElementById('textoInicial');
  let textoCompletoOculto = document.getElementById('textoCompletoOculto');
  let verMas = document.getElementById('verMas');

  if (textoInicial.style.display !== 'none') {
      // Mostrar texto completo y "Ver menos"
      textoInicial.style.display = 'none';
      textoCompletoOculto.style.display = 'inline';
      verMas.innerHTML = ' Ver menos';
  } else {
      // Mostrar solo el fragmento inicial y "Ver más"
      textoInicial.style.display = 'inline';
      textoCompletoOculto.style.display = 'none';
      verMas.innerHTML = ' Ver más...';
  }
}

//-----------------------------------------------------------------------------------------------------------------------
//Funcion para redirigir a la pagina de la imagen mostrada en el carrusel 
function redirigir(element) {
  let url = $(element).find('a').attr('href');
  window.open(url, '_blank');
}


function redirigirHaciaEjemplo(event) {
  event.preventDefault();

    // Obtener la URL completa de la página actual
  var urlCompleta = window.location.href;

  // Obtener la URL sin la parte de la cadena de consulta
  var urlSinQuery = window.location.origin + window.location.pathname;

  // Obtener solo la cadena de consulta (parámetros)
  var queryString = window.location.search;

  // Mostrar los resultados en la consola (puedes eliminar esto en producción)
  console.log("URL completa:", urlCompleta);
  console.log("URL sin la cadena de consulta:", urlSinQuery);
  console.log("Cadena de consulta:", queryString);

  var nuevaURL = "http://127.0.0.1:5500/index.html";

  // Redirige a la nueva URL
  // window.location.href = nuevaURL;
  window.open(nuevaURL, '_blank');
}
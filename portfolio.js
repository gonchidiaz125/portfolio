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
  var textoInicial = document.getElementById('textoInicial');
  var textoCompletoOculto = document.getElementById('textoCompletoOculto');
  var verMas = document.getElementById('verMas');

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
function redirigir() {
  window.open("https://www.w3schools.com/", "_blank");
  
}

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


$(document).ready(function() {  
  $(".navbar-nav li a").on('click', function(){
    // Verifica si el enlace clicado no es el que tiene el submenú
    if (!$(this).parent().hasClass("dropdown")) {
      $(".navbar-collapse").collapse('hide');
    }
  });
});


//funcion para desplegar un texto completo 
function mostrarMas(idTextoInicial, idtextoCompletoOculto, idVerMas) {
  let textoInicial = document.getElementById(idTextoInicial);
  let textoCompletoOculto = document.getElementById(idtextoCompletoOculto);
  let verMas = document.getElementById(idVerMas);

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
  // Prevengo para evitar que la página actual se vuelva a carga y se muestre desde el inicio (lo que mueve fuera del area visual el link elegido)
  event.preventDefault();

  let isLocalHost = window.location.href.includes("127.0.0.1")

  let newUrl;

  if (isLocalHost) {
    newUrl ="http://127.0.0.1:5500/index.html";
  } else {
    newUrl = "https://lemon-plant-09c183a0f.4.azurestaticapps.net/index.html";
  }
  
  window.open(newUrl, '_blank');
}


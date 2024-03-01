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

  function crearExperiencias() {

    var listaDeExperiencias = [];
    var experiencia1 = {
        puesto: "Técnico mecánico New Holland",
        imagen: "./imagenes/griffaSA.jpeg",
        empresa: "GRIFFA S.A.",
        periodo: "Enero de 2021 - agosto de 2023 (2 años 8 meses)",
        ubicacion: "Sinsacate, Córdoba, Argentina.",
        descripcion: "Colocación de pilotos automáticos y sistemas de PLM (Agricultura de precisión) con su respectiva señal y calibración (unidad y apero), " +
        "diagnóstico computarizado de unidades nuevas y usadas, actualizaciones de software, ecu de motor y transmisión, " +
        "entregas técnicas (capacitaciones de uso de la unidad) a clientes al campo, servicios técnicos en campos de los clientes en cualquier punto del país.",
    }

    listaDeExperiencias.push(experiencia1);

    var experiencia2 = {
        puesto: "Vendedor",
        imagen: "./imagenes/caroya_logo.jpeg",
        empresa: "Caroya SA",
        periodo: "Octubre de 2019 - enero de 2021 (1 año 4 meses) ",
        ubicacion: "Jesús María, Córdoba, Argentina.",
        descripcion: "Ventas por mayor y menor, Presupuestos, Cobranzas, Atención al público, Preparación y despacho de mercadería, Control de stock.",
    }

    listaDeExperiencias.push(experiencia2);

    contenedorDeExperiencias = document.getElementById("contenedor-experiencias-laborales-nuevo");

    for (var i=0; i<listaDeExperiencias.length; i++) {
      var experienca = listaDeExperiencias[i];
      
      var divExperiencia = `
              <div class="contenedor-experiencia">
                  <div class="columna-experiencia-imagen">
                    <img class="imagen-experiencia" src="${experienca.imagen}" alt="caroyaLogo">
                  </div>
                  <div class="columna-experiencia-detalle">
                    <div class="experiencia-puesto">
                      <p>${experienca.puesto}</p>
                    </div>
                    <div class="experiencia-empresa">
                      <p>
                        ${experienca.empresa}
                      <br>
                        ${experienca.periodo}}
                      <br>
                        ${experienca.ubicacion}
                      </p>
                    </div>
                    <div class="experiencia-descripcionPuesto">
                      <p> 
                        ${experienca.descripcion}
                      </p>
                      <br>
                    </div>
                  </div>
              </div>
      `;
      
      const nuevoElemento = document.createElement('div');
      nuevoElemento.innerHTML = divExperiencia;

      contenedorDeExperiencias.appendChild(nuevoElemento);
    }
    
  }

  crearExperiencias();
  
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


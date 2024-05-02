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
        periodo: "Enero de 2021 - Agosto de 2023",
        ubicacion: "Sinsacate, Córdoba, Argentina.",
        descripcion: "Colocación de pilotos automáticos y sistemas de PLM (Agricultura de precisión) con su respectiva señal y calibración (unidad y apero), " +
        "diagnóstico computarizado de unidades nuevas y usadas, actualizaciones de software, ecu de motor y transmisión, " +
        "entregas técnicas (capacitaciones de uso de la unidad) a clientes al campo, servicios técnicos en campos de los clientes en cualquier punto del país."
    }

    listaDeExperiencias.push(experiencia1);

    var experiencia2 = {
        puesto: "Vendedor",
        imagen: "./imagenes/caroya_logo.jpeg",
        empresa: "Caroya SA",
        periodo: "Octubre de 2019 - Enero de 2021",
        ubicacion: "Jesús María, Córdoba, Argentina.",
        descripcion: "Ventas por mayor y menor, Presupuestos, Cobranzas, Atención al público, Preparación y despacho de mercadería, Control de stock.",
    }

    listaDeExperiencias.push(experiencia2);

    
    var experiencia3 = {
      puesto: "Chofer",
      imagen: "./imagenes/JMcarnes.png",
      empresa: "Jesús María Carnes SRL ",
      periodo: " Julio de 2015 - Marzo de 2018",
      ubicacion: "Jesús María, Córdoba, Argentina.",
      descripcion: "Chofer de vehículo para reparto de sustancias alimenticias a las sucursales de dicha empresa y a clientes (carnes, pollos, gaseosas, alimentos no perecederos, etc.) Cobranza a cliente, Limpieza y organización de depósito.",
  }

  listaDeExperiencias.push(experiencia3);
  
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
                        ${experienca.periodo}
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

$(document).ready(function() {  
  $(".navbar-nav li a").on('click', function(){
    // Verifica si el enlace clicado no es el que tiene el submenú
    if (!$(this).parent().hasClass("dropdown")) {
      $(".navbar-collapse").collapse('hide');
    }
  });
  function CrearCursos(){

    var listaDeCursos = [];

    
    var curso = {
      titulo: "Scrum Foundation Professional CertificationScrum Foundation Professional Certification",
      imagen: "./imagenes/certiprof_logo.jpeg",
      aptitudes: "Aptitudes: Scrum, Metodologias Agiles",
      periodo: "CertiProf - Expedición: Febrero 2024"
    }

     listaDeCursos.push(curso);

    var curso1 = {
      titulo: "Udemy C# TOTAL - Programador Experto en 28 días",
      imagen: "./imagenes/udemy.png",
      aptitudes: "Aptitudes: variables, métodos, arrays, declaraciones if, loops, Clases y Objetos, Herencia, Polimorfismo.",
      periodo: "Udemy - Expedición: Diciembre 2023"
    }

     listaDeCursos.push(curso1);
    var curso2 = {
      titulo: "Udemy JavaScript Total - De Cero a Desarrollador Web en 18 días",
      imagen: "./imagenes/udemy.png",
      aptitudes: "Aptitudes: JavaScript, Hojas de estilos en cascada (CSS),HTML",
      periodo: "Udemy - Expedición: Diciembre 2023"
    }

    listaDeCursos.push(curso2);
    var curso3 = {
      titulo: "Programación con JavaScript",
      imagen: "./imagenes/movistar.jpeg",
      aptitudes: "Aptitudes: JavaScript",
      periodo: "Fundación Telefónica Movistar Argentina - Expedición: Noviembre 2023"
    }

    listaDeCursos.push(curso3);

    var curso4 = {
      titulo: "Gestión de Proyectos con Metodologías Ágiles",
      imagen: "./imagenes/movistar.jpeg",
      aptitudes: "Aptitudes: Metodologías Ágiles",
      periodo: "Fundación Telefónica Movistar Argentina - Expedición: Noviembre 2023"
    }

    listaDeCursos.push(curso4);
    var curso5 = {
      titulo: "Diseño Web con HTML5 + CSS",
      imagen: "./imagenes/movistar.jpeg",
      aptitudes: "Aptitudes: Conocimiento de HTML5 + CSS",
      periodo: "Fundación Telefónica Movistar Argentina - Expedición: Noviembre 2023"
    }

    listaDeCursos.push(curso5);
    var curso6 = {
      titulo: "Aprende Wordpress de forma sencilla",
      imagen: "./imagenes/movistar.jpeg",
      aptitudes: "Aptitudes: Wordpress ",
      periodo: "Fundación Telefónica Movistar Argentina - Expedición: Noviembre 2023"
    }

    listaDeCursos.push(curso6);

  contenedorDeCursos = document.getElementById("contenedor-cursos-realizados");

  for (var i=0; i<listaDeCursos.length; i++) {
  var curso = listaDeCursos[i];
  var divCursos =`
                <div class="contenedor-cursos">
                  <div class="columna-cursos-imagen">
                    <img class="imagen-experiencia" src="${curso.imagen}" alt="caroyaLogo">
                  </div>
                  <div class="columna-cursos-detalle">
                    <div class="cursos-puesto">
                      <p><b>${curso.titulo}</b></p>
                    </div>
                    <div class="experiencia-cursos">
                      <p>${curso.aptitudes} </p>
                    </div>
                    <div class="cursos-periodo">
                      <p>${curso.periodo}</p>
                    </div>
                  </div>
                </div>`;
      
                const nuevoElemento = document.createElement('div');
                nuevoElemento.innerHTML = divCursos;

      contenedorDeCursos.appendChild(nuevoElemento);
    }
  }

  CrearCursos();
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

function redirigirHaciaEjemplo(event, urlEjemplo) {  
  // Prevengo para evitar que la página actual se vuelva a carga y se muestre desde el inicio (lo que mueve fuera del area visual el link elegido)
  event.preventDefault();

  let isLocalHost = window.location.href.includes("127.0.0.1")

  let newUrl;

  if (isLocalHost) {
    newUrl ="http://127.0.0.1:5500/index.html";
  } else {
    newUrl = urlEjemplo + "index.html";
  }
  
  window.open(newUrl, '_blank');
}


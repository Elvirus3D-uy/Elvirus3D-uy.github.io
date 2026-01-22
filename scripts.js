function mostrar(seccion) {
  const boxSuperior = document.getElementById('box-superior');
  const boxMiniaturas = document.getElementById('box-miniaturas');
  const boxInfo = document.getElementById('box-info-detallada');

  if (seccion === 'home') {
    // Mostrar todas las secciones
    boxSuperior.style.display = 'block';
    boxMiniaturas.style.display = 'block';
    
    boxInfo.innerHTML = `
      <h2>Bienvenido/a a El Virus 3D</h2>
      <hr>
      <p>El Virus 3D es un espacio donde convergen videojuegos, creatividad y tecnología desde Uruguay hacia el mundo.
        Nacido como un proyecto personal, hoy funciona como estudio indie, portfolio profesional y plataforma de experiencias interactivas, todo en un mismo lugar.</p>
        <h4>Acá vas a encontrar:</h4>
      <p>Juegos propios, desde títulos publicados como Infernal Project en Steam, hasta prototipos y minijuegos en desarrollo jugables directamente en tu navegador.</p>
      <p>Proyectos originales, como Cuentos Codificados, una serie que reinventa cuentos clásicos en mundos futuristas, o Virus Fútbol 3D, un simulador de fútbol narrativo y táctico ambientado en ligas latinoamericanas.</p>
      <p>Exploraciones técnicas, pruebas con datos, motores gráficos, herramientas educativas y más...</p>
        Un recorrido real por el camino de crear videojuegos de forma independiente, desde la idea hasta el producto final.</p>
        <p>Este sitio también funciona como mi hoja de vida interactiva: una forma de mostrar lo que hago, cómo pienso y hacia dónde quiero ir. 
          Cada juego, línea de código y diseño publicado en El Virus 3D es una invitación a jugar, explorar y compartir.</p>
        <p>Gracias por visitar.</p>

        <hr>
        <h3>NOTICIAS:</h3>
        <div id="noticias-container"></div>
    `;
    document.getElementById('noticias-container').innerHTML = generarNoticias(misNoticias);
  } else if (seccion === 'games') {
    // Ocultar lo exclusivo de home
    boxSuperior.style.display = 'none';
    boxMiniaturas.style.display = 'none';

    boxInfo.innerHTML = `
      <h2>Juegos</h2>
      <hr>
      <h4>Juega nuestros títulos en itch.io</h4>
      <h5><em>(Por ahora, compatibles únicamente con teclado.)</em></h5>
      <hr>
      <div class="games-buttons">
        <div class="game-item" onclick=cargarVirusmania()>
          <img src="Recursos/Virusmania.png" alt="Virusmania">
          <p>Virusmania</p>
        </div>
        <div class="game-item" onclick="alert('A partir del 1ro de febrero. VIRUS FÚTBOL WEB')">
          <img src="Recursos/FueraDeServicio2.png" alt="Virus futbol WEB">
          <p>Virus Fútbol WEB</p>
        </div>
      </div>
    `;
  } else if (seccion === 'about') {
    boxSuperior.style.display = 'none';
    boxMiniaturas.style.display = 'none';

    boxInfo.innerHTML = `
      <h2>Sobre Nosotros</h2>
      <hr>
      <p>
      El Virus 3D nació como una idea independiente de desarrollo en Uruguay, con la intención de explorar videojuegos desde una mirada creativa, técnica y personal.
      </p>
      <p>
      Nos dedicamos a crear prototipos experimentales con identidad propia, juegos que combinan mecánicas clásicas con conceptos originales, ya sea desde la narrativa, la ambientación o el enfoque educativo.
      </p>
      <p>
      Creemos que un videojuego puede ser más que entretenimiento: puede ser una historia interactiva, una herramienta de reflexión o simplemente un desafío divertido con alma.
      </p>
      <p>
      Nuestro trabajo abarca desde juegos publicados en Steam, hasta minijuegos accesibles desde el navegador, simuladores narrativos, adaptaciones de cuentos clásicos y títulos con contenido histórico.
      </p>
      <p>
      El Virus 3D no es solo un estudio, es un laboratorio de ideas. Cada proyecto que nace acá es una búsqueda: de estilo, de jugabilidad, de propósito.
      </p>
      <p>
      Y sí, también somos jugadores. Porque para hacer buenos juegos, primero hay que disfrutarlos.
      </p>
    `;
  } else if (seccion === 'contact') {
    boxSuperior.style.display = 'none';
    boxMiniaturas.style.display = 'none';

    boxInfo.innerHTML = `
      <h2>Contacto</h2>
      <hr>
      <p>¿Querés comunicarte con nosotros? Escribinos a <a href="mailto:markplay06061990@gmail.com">markplay06061990@gmail.com</a>
    `;
  }

}

function mostrarJuego(juego) {
  const boxInfo = document.getElementById('box-info-detallada');

  if (juego === 'proyectoInfernal') {
  boxInfo.innerHTML = `
    <h2>Proyecto Infernal</h2>
    <hr>
    
    <div class="galeria-imagenes">
      <img src="Recursos/ProyectoInfernal2.jpg" alt="Captura 1">
      <img src="Recursos/ProyectoInfernal3.jpg" alt="Captura 2">
      <img src="Recursos/ProyectoInfernal4.jpg" alt="Captura 3">
      <img src="Recursos/ProyectoInfernal5.jpg" alt="Captura 4">
      <img src="Recursos/ProyectoInfernal6.jpg" alt="Captura 5">
    </div>
    <hr>

    <div class="contenedor-video">
      <a href="https://store.steampowered.com/app/2999690/Proyecto_infernal/" 
        class="boton-steam" target="_blank">
        Ver en Steam
      </a>

      <div class="video-fondo-iframe-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/y0zIDpeoFRQ?autoplay=1&mute=1&loop=1&playlist=y0zIDpeoFRQ&controls=0&showinfo=0&modestbranding=1"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          class="video-fondo-iframe"
          ></iframe>
      </div>
    </div>

    <hr>
    <p>Proyecto Infernal ofrece un verdadero desafío de supervivencia. 
    Sobrevive en una arena volcánica tóxica. Enfrenta oleadas de enemigos aleatorios, 
    recolecta recursos escasos y toma decisiones estratégicas para mantenerte con vida. 
    Pon a prueba tu resistencia en este intenso simulador. DISPONIBLE EN STEAM</p>
  `;
} else if (juego === 'futbolVirus') {
    boxInfo.innerHTML = `
      <h2>Virus Fútbol 3D</h2>
      <hr>
      <div class="galeria-imagenes">
      <img src="Recursos/VirusFutbol3D1.png" alt="Captura 1">
      <img src="Recursos/VirusFutbol3D2.png" alt="Captura 2">
      <img src="Recursos/VirusFutbol3D3.png" alt="Captura 3">
      <img src="Recursos/VirusFutbol3D4.png" alt="Captura 4">
      <img src="Recursos/VirusFutbol3D5.png" alt="Captura 5">
    </div>
      <hr>

      <p>Simulación de la vida en el fútbol desde la perspectiva de un club de la tercera división latinoamericana. 
      El jugador gestiona contratos, entrenamientos y tácticas, combinando mecánicas de Football Manager con gameplay interactivo.</p>
      <p>Desarrollo en curso con enfoque narrativo y progresión de equipo a largo plazo.</p>
    `;
  } else if (juego === 'cuentosCodificados') {
    boxInfo.innerHTML = `
      <h2>Caperuza Escarlata:</h2>
      <p> Parte de la colección: Cuentos Codificados </p>
      <hr>

      <div class="galeria-imagenes">
        <img src="Recursos/Caperuza1.png" alt="Captura 1">
        <img src="Recursos/Caperuza2.png" alt="Captura 2">
        <img src="Recursos/Caperuza3.png" alt="Captura 3">
        <img src="Recursos/Caperuza4.png" alt="Captura 4">
        <img src="Recursos/Caperuza5.png" alt="Captura 5">
      </div>

      <hr>

      <p>En un futuro postapocalíptico dominado por lobos androides, Caperuza Escarlata debe atravesar zonas hostiles para llegar al punto de control donde se esconde su abuela. 
      Inspirado en el cuento clásico de Caperucita Roja, este juego de plataformas reimagina la historia en un mundo tecnológico decadente, lleno de peligros y secretos.
      Con un estilo de juego al mejor estilo Super Mario Bros, el jugador debe saltar, 
      esquivar y avanzar en niveles desafiantes mientras descubre fragmentos narrativos que conectan el pasado con el presente.</p>
      
    `;
  }
}

// --- Variables ---
const canciones = [
  "Recursos/cancion1.mp3",
  "Recursos/cancion2.mp3",
  "Recursos/cancion3.mp3",
  "Recursos/cancion4.mp3"
];

let listaReproduccion = [];
let indiceActual = 0;
let reproduciendo = false;

const btnPlay = document.getElementById('btn-play');
const tituloCancion = document.getElementById('titulo-cancion');

// Crear elemento <audio>
const reproductor = new Audio();

// --- Función para reproducir la siguiente canción ---
function reproducirSiguiente() {
  if (indiceActual < listaReproduccion.length) {
    const ruta = listaReproduccion[indiceActual];
    reproductor.src = ruta;
    reproductor.play();
    tituloCancion.textContent = obtenerNombreArchivo(ruta);
    indiceActual++;
  } else {
    detenerReproduccion(); // Fin de lista
  }
}

// --- Función para obtener nombre bonito ---
function obtenerNombreArchivo(ruta) {
  const archivo = ruta.split('/').pop();
  switch (archivo) {
    case 'cancion1.mp3': return 'No estás solo';
    case 'cancion2.mp3': return 'Final de asado';
    case 'cancion3.mp3': return 'Latinoamérica en llamas';
    case 'cancion4.mp3': return 'Uruguayez al mango';
    default:
      return archivo.replace('.mp3', '').replace(/_/g, ' ');
  }
}

// --- Función para iniciar reproducción ---
function iniciarReproduccion() {
  listaReproduccion = [...canciones].sort(() => Math.random() - 0.5); // Mezclar aleatoriamente
  indiceActual = 0;
  reproduciendo = true;
  btnPlay.innerHTML = '&#9632;'; // Botón de stop
  reproducirSiguiente();
}

// --- Función para detener todo ---
function detenerReproduccion() {
  reproductor.pause();
  reproductor.currentTime = 0;
  reproduciendo = false;
  btnPlay.innerHTML = '&#9658;'; // Botón de play
  tituloCancion.textContent = "Sin canción";
}

// --- Evento cuando termina una canción ---
reproductor.addEventListener('ended', () => {
  reproducirSiguiente();
});

// --- Click en botón ---
btnPlay.addEventListener('click', () => {
  if (!reproduciendo) {
    iniciarReproduccion();
  } else {
    detenerReproduccion();
  }
});

function cargarVirusmania() {
  const boxInfo = document.getElementById('box-info-detallada');

  boxInfo.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <h2 style="margin: 0;">Virusmania</h2>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        ${obtenerBotonDonarPayPal()}
      </div>
    </div>

    <hr>
    <div>
      <iframe frameborder="0" src="https://itch.io/embed-upload/14631130?color=62006a" allowfullscreen="" width="1280" height="720"><a href="https://elvirus3d.itch.io/virusmania">Play Virusmania on itch.io</a></iframe>
    </div>
    <p>Si no ves el juego, podés abrirlo en <a href="https://elvirus3d.itch.io/virusmania" target="_blank">Itch.io</a></p>
  `;
}

function obtenerBotonDonarPayPal() {
  return `
    <div style="display: flex; align-items: center; gap: 10px;">
      <span style="font-weight: bold; color: white;">Ayudanos a crecer</span>
      <form action="https://www.paypal.com/donate" method="post" target="_blank" style="margin: 0;">
        <input type="hidden" name="hosted_button_id" value="KK8RES9ZFEK98" />
        <input type="image" 
               src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" 
               border="0" 
               name="submit" 
               title="Donanos desde PayPal" 
               alt="Donate with PayPal button" />
      </form>
    </div>
  `;
}

window.addEventListener('DOMContentLoaded', () => {
  const subboxDonar = document.getElementById('subbox-donar');
  if (subboxDonar) subboxDonar.innerHTML = obtenerBotonDonarPayPal();
  mostrar('home');
});


function generarNoticias(noticias) {
  let html = '';
  noticias.forEach((noticia, index) => {
    const ladoClass = noticia.ladoImagen === 'derecha' ? 'noticia-derecha' : 'noticia-izquierda';
    html += `
      <div class="noticia ${ladoClass}">
        <img src="${noticia.imagen}" alt="Noticia ${index + 1}" class="imagen-noticia">
        <div class="texto-noticia">
          <p class="fecha-noticia">${noticia.fecha}</p>
          <p>${noticia.texto}</p>
        </div>
      </div>
    `;
  });
  return html;
}

const misNoticias = [
  {
    imagen: 'Recursos/VirusFutbolWeb.png',
    fecha: 'Sábado, 1 de febrero del 2026',
    texto: `El 1.º de febrero llega Virus Fútbol Web, una nueva experiencia dentro del universo de El Virus 3D.
    Esta versión web funciona como una demostración jugable de lo que será Virus Fútbol 3D, adaptada especialmente para el navegador.
  
    En esta primera entrega, el jugador podrá simular una liga ficticia con el objetivo de llevar a su club a la gloria deportiva.
    La propuesta se centra en la gestión, la progresión del equipo y la toma de decisiones estratégicas, ofreciendo una mirada profunda al mundo del fútbol desde el rol de director técnico y gestor.
  
    Si bien en esta etapa los partidos no son interactivos, Virus Fútbol Web representa el primer paso hacia una experiencia más ambiciosa.
    A lo largo de 2026 está previsto incorporar una actualización que permita jugar los partidos de forma activa en el campo,
    así como la posibilidad de seleccionar más de un equipo para jugar con amigos desde una misma PC.
  
    Virus Fútbol Web no es un producto final, sino una muestra del camino que estamos construyendo.
    Una invitación a conocer el concepto, probar sus bases y acompañar su evolución hacia el futuro de Virus Fútbol 3D.`,
    ladoImagen: 'izquierda'
  },
  {
    imagen: 'Recursos/Virusmania.png',
    fecha: 'Martes, 12 de agosto del 2025',
    texto: `El fin de semana pasado, el equipo de El Virus 3D trabajó intensamente en Virusmania para dejarlo listo para su lanzamiento hoy en nuestra web. 
    Este juego, desarrollado en Unity, te pone en la piel de un virus en un único nivel donde el objetivo es sobrevivir el mayor tiempo posible. 
    A medida que eliminas enemigos, aparecen nuevos, aumentando el desafío constantemente y manteniendo la tensión al máximo. 
    Combinamos mecánicas simples pero efectivas con una atmósfera vibrante para ofrecer una experiencia adictiva y emocionante. 
    Estamos orgullosos de compartir este proyecto contigo y esperamos que disfrutes cada segundo de Virusmania. DISPONIBLE EN NUESTRA SECCIÓN "JUEGOS"`,
    ladoImagen: 'izquierda'
  }
];






function mostrar(seccion) {
  const box = document.getElementById('contentBox');
  if (seccion === 'home') {
    box.innerHTML = `
      <h2>Bienvenido a El Virus 3D</h2>
      <p>Somos un estudio de desarrollo de videojuegos indie, con sede en Uruguay. Exploramos ideas creativas, prototipos jugables y tecnología accesible para todos.</p>
    `;
  } else if (seccion === 'games') {
    box.innerHTML = `
      <h2>Juegos</h2>
      <p>Pronto podrás probar nuestros proyectos directamente desde esta web.</p>
    `;
  }
}
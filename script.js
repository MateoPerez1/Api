const button = document.getElementById('obtenerImagen');
const image = document.getElementById('imagenEspacial');

button.addEventListener('click', () => {
  // Hacer una solicitud a la API de imágenes espaciales
  fetch('https://api.le-systeme-solaire.net/rest/bodies/saturn')
    .then(response => response.json())
    .then(data => {
      // Obtener la URL de una imagen espacial desde los datos de la API
      const imageUrl = data['data']['images']['jpg'][0];
      // Mostrar la imagen en la página
      image.src = imageUrl;
    })
    .catch(error => {
      console.error('Error al obtener la imagen espacial:', error);
    });
});

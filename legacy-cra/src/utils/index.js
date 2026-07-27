if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
        // Aquí puedes usar la latitud y longitud para determinar la ubicación del usuario
        console.log("Latitud: " + latitude + ", Longitud: " + longitude);
        obtenerCiudad(latitude, longitude)
        // Puedes llamar a una función o hacer cualquier otra acción con la ubicación del usuario
    });
} else {
    console.log("La geolocalización no está disponible en este navegador.");
}

function obtenerCiudad(latitud, longitud) {
  // Llama a la API de geocodificación inversa de Google Maps
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitud},${longitud}&key=AIzaSyB7WRxRnodFeVrRdvo44Avw_PfY5FeQnuk`)
      .then(response => response.json())
      .then(data => {
          // Verifica si se obtuvo una respuesta exitosa
          if (data.status === "OK") {
              // Encuentra el componente que representa la ciudad en los resultados
              const resultado = data.results.find(result => {
                  return result.types.includes("locality");
              });
              // Obtiene el nombre de la ciudad
              const ciudad = resultado ? resultado.formatted_address : "No se pudo determinar la ciudad";
              console.log("Ciudad:", ciudad);
          } else {
              console.error("Error al obtener la ciudad:", data.status);
          }
      })
      .catch(error => {
          console.error("Error al obtener la ciudad:", error);
      });
}
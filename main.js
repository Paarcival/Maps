let map = L.map('map').setView([8.29746,-62.71149],17)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
})

//agrega un marcador al mapa 
var marker = L.marker([8.29677,-62.71158],
  ).addTo(map) 
  .bindPopup('BIBLIOTECA');

var marker = L.marker([8.29670, -62.71199],
  ).addTo(map) 
  .bindPopup('CASA DEL ESTUDIANTE');
    
var marker = L.marker([8.29727, -62.71066],
  ).addTo(map) 
  .bindPopup('caja negra');

var marker = L.marker([8.29592, -62.71171],
    ).addTo(map) 
    .bindPopup('caja');

var marker = L.marker([8.29735, -62.71062],
    ).addTo(map) 
    .bindPopup('coordinacion de deportes');
      
var marker = L.marker([8.29588, -62.71222],
    ).addTo(map) 
    .bindPopup('Escuela de ing.civil / informatica');

var marker = L.marker([8.29726, -62.71257],
      ).addTo(map) 
      .bindPopup('Escuela de ing.industrial');
        
var marker = L.marker([8.29623, -62.71233],
      ).addTo(map) 
      .bindPopup('Escuela de comunicacion');

  // Verificar si el navegador soporta la geolocalización
if ("geolocation" in navigator) {
  // Obtener la ubicación del usuario
  navigator.geolocation.getCurrentPosition(function(position) {
    
    // Obtener las coordenadas de la ubicación
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // Añadir un marcador en la ubicación del usuario
    L.marker([lat, lon])
      .addTo(map)
      .bindPopup('Estas aqui')
      .openPopup();
  });
} else {
  alert("Tu navegador no soporta la geolocalización");
}


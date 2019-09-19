// Initialize and add the map
function initMap() {
  // The location of Uluru
  var loc = { lat: 51.761253, lng: 5.942311 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById("map"), { zoom: 14, center: loc });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: loc, map: map });
}

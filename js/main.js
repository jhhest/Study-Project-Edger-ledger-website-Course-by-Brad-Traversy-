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

// sticky menu background: 
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100
            },
            850
        );
    }
});
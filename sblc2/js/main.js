// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 6.434520, lng: 3.490940 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom :10,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});
   
  // Smooth Scrolling
  $('#navbar a, .btn, a, # a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });
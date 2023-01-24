function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: false
    });
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: -8.06350027, lng: -34.87366855 },
    });
    directionsRenderer.setMap(map);
    directionsService.route({
        origin: 'Marco zero, Recife',
        destination: 'Abreu e Lima',
        waypoints: [
            // {location: 'Recife, Brasil'}
            {location: 'Recife, Brasil', stopover: true}
        ],
        travelMode: google.maps.TravelMode.DRIVING
    }).then(response => {
        console.log({response});
        directionsRenderer.setDirections(response);

        // map.fitBounds(response.routes[0].bounds);
        // renderPolyline(response.routes[0].overview_path, map);
    }).catch(err => {
        console.log({err});
    });
    const trafficLayer = new google.maps.TrafficLayer();
  
    trafficLayer.setMap(map);
  }
  
  window.initMap = initMap;
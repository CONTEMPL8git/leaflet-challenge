// Creating the map object
let myMap = L.map("map", {
    center: [82.6416, 42.0113],
    zoom: 7
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Load the GeoJSON data.
  let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
  
  // Get the data with d3.
  d3.json(geoData).then(function(data) {
  
    console.log(data);
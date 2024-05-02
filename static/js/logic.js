// Creating the map object
let myMap = L.map("map", {
  center: [36.6416, -97.0113],
  zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.
let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Get the data with d3.
d3.json(geoData).then(function (data) {

  console.log(data);

  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: function (feature) {
      return {
        fillColor: "red",
        radius: feature.properties.mag*5
      }

    }
  }).addTo(myMap);


});

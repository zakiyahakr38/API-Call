// Leaflet Map Initialization
var mymap = L.map('map').setView([48.8566, 2.3522], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

// Function to Search City
function searchCity() {
    var cityName = document.getElementById('cityInput').value;

    // Use the API endpoint with cityName to fetch data
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${cityName}&limit=1`)
        .then(response => response.json())
        .then(data => {
            // Check if the response contains features
            if (data.features && data.features.length > 0) {
                // Extract coordinates from the feature
                var coordinates = data.features[0].geometry.coordinates;
                
                // Extract additional attributes from the feature properties
                var properties = data.features[0].properties;

                // Create a marker and add it to the map
                var marker = L.marker([coordinates[1], coordinates[0]]).addTo(mymap);

                // Build the popup content with all attributes
                var popupContent = '<b>City:</b> ' + cityName + '<br>';
                for (var key in properties) {
                    popupContent += `<b>${key}:</b> ${properties[key]}<br>`;
                }

                marker.bindPopup(popupContent).openPopup();

                // Set the map view to the marker
                mymap.setView([coordinates[1], coordinates[0]], 12);
            } else {
                console.error('Invalid data structure in the API response');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

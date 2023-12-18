<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>City Search</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>City Search</h1>
        <form id="cityForm">
            <label for="cityInput">Enter City Name:</label>
            <input type="text" id="cityInput" name="cityInput" required>
            <button type="button" onclick="searchCity()">Search</button>
        </form>
        <div id="map"></div>
    </div>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="script.js"></script>
</body>
</html>

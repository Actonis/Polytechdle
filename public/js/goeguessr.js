// Replace YOUR_API_KEY with your actual Google Maps API key
const apiKey = 'YOUR_API_KEY';

// Function to get a random city from the database
function getRandomCity() {
    // Replace this with your logic to fetch a random city from the database
    const cities = [
        { name: 'City 1', latitude: 40.7128, longitude: -74.0060 },
        { name: 'City 2', latitude: 34.0522, longitude: -118.2437 },
        { name: 'City 3', latitude: 51.5074, longitude: -0.1278 }
    ];

    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}

// Function to initialize the map
function initMap() {
    const city = getRandomCity();

    // Create a new map centered on the city's coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: city.latitude, lng: city.longitude },
        zoom: 10
    });

    // Add a marker for the city
    new google.maps.Marker({
        position: { lat: city.latitude, lng: city.longitude },
        map: map,
        title: city.name
    });
}

// Load the Google Maps API asynchronously
function loadScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

// Call the loadScript function to load the Google Maps API
loadScript();
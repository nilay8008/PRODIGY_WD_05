function getWeather() {
    var city = document.getElementById("city").value;
    if (!city.trim()) {
        alert("Please enter a city name");
        return;
    }
    var apiKey = "91c98b8c23d1796f4af389f2fa818167";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + "&appid=" + apiKey;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            var temperatureElement = document.getElementById("temperature");
            var descriptionElement = document.getElementById("description");
            temperatureElement.textContent = "Temperature: " + (data.main.temp - 273.15).toFixed(2) + "°C";
            descriptionElement.textContent = "Description: " + data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

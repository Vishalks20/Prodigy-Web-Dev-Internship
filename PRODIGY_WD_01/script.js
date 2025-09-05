const apiKey = "5dda764d8d0119da31027a6da35417f4";

// Fetch weather by city input
function getWeatherByCity() {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  }
}

// Fetch weather by user's location
function getWeatherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
      },
      () => {
        alert("Unable to get your location.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

// Fetch weather data from API
function fetchWeather(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // <-- check data in console
      displayWeather(data);
    })
    .catch(() => alert("City not found or API error."));
}

// Fetch weather by city input
function getWeatherByCity() {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  }
}

// Fetch weather by user's location
function getWeatherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
      },
      () => alert("Unable to get your location.")
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

// Fetch weather data from API
function fetchWeather(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(() => alert("City not found or API error."));
}

// Display weather data
function displayWeather(data) {
  document.getElementById("cityName").innerText = `📍 ${data.name}, ${data.sys.country}`;
  document.getElementById("description").innerText = `🌦 ${data.weather[0].description}`;
  document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
  document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
  document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;

  // Weather Icon
  const iconCode = data.weather[0].icon;
  document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// Display weather data
function displayWeather(data) {
  document.getElementById("cityName").innerText = `📍 ${data.name}, ${data.sys.country}`;
  document.getElementById("description").innerText = `🌦 ${data.weather[0].description}`;
  document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
  document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
  document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;

  // Weather Icon
  const iconCode = data.weather[0].icon;
  document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
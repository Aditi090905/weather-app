const apiKey = "7f39ad40b533e2b9fec106327ef2c903";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city!";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        resultDiv.innerHTML = "City not found 😕";
      } else {
        resultDiv.innerHTML = `
          <h2>${data.name}</h2>
          <p><b>${data.weather[0].main}</b> - ${data.weather[0].description}</p>
          <p>🌡️ Temperature: ${data.main.temp}°C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
      }
    })
    .catch(error => {
      resultDiv.innerHTML = "Error fetching weather data";
    });
}

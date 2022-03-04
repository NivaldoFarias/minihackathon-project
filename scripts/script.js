const API_KEY = "42b5ff12a2084bc029141577acd4bc26";

let lat;
let lon;
let text = document.getElementById("text");

function geolocationAvailable() {
  if ("geolocation" in navigator) {
    const geolocation =
      navigator.geolocation.getCurrentPosition(showPositionCallback);
  } else {
    alert("Seu navegador não suporta geolocalização");
  }
}

const showPositionCallback = (position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
};

geolocationAvailable();
InitializeBtn();

function InitializeBtn() {
  const geolocationBtn = document.querySelector("#data-btn");
  geolocationBtn.addEventListener("click", () => {
    getLocation();
    geolocationBtn.classList.add("clicked");
  });
  const adressBtn = document.querySelector("#alt-btn");
  adressBtn.addEventListener("click", () => {
    getWeatherDataAdress();
    adressBtn.classList.add("clicked");
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    text.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  console.log("dsad");
  text.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
    getWeatherDataLatLon(position)
}

function getWeatherDataLatLon(position){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`)
  .then((response) => response.json())
  .then(data => console.log(data))
}

function getWeatherDataAdress(){
  const city = document.querySelector("#city").value
  const state = document.querySelector("#state").value
  const country = document.querySelector("#country").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${API_KEY}`)
  .then((response) => response.json())
  .then(data => console.log(data))
}

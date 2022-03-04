const API_KEY = "42b5ff12a2084bc029141577acd4bc26";

let geolocation;
let lat;
let lon;
let text = document.getElementById("text");

function geolocationAvailable() {
  if ("geolocation" in navigator) {
    geolocation =
      navigator.geolocation.getCurrentPosition(showPositionCallback);
  } else {
    alert("Seu navegador não suporta geolocalização");
  }
}

function getLocation() {
  if (navigator.geolocation) {
    geolocation = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    text.innerHTML = "Geolocation is not supported by this browser.";
  }
}

const showPositionCallback = (position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
};

function showPosition(position) {
  console.log("dsad");
  text.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  getWeatherDataLatLon(position);
}

geolocationAvailable();
InitializeBtn();

function InitializeBtn() {
  const geolocationBtn = document.querySelector("#data-btn");
  const adressBtn = document.querySelector("#alt-btn");
  const altBtn = document.querySelector("#decline-btn");

  geolocationBtn.addEventListener("click", () => {
    getLocation();
    geolocationBtn.classList.add("clicked");
  });
  adressBtn.addEventListener("click", () => {
    getWeatherDataAdress();
    adressBtn.classList.add("clicked");
  });
  altBtn.addEventListener("click", () => {
    altBtn.classList.add("hidden");
    geolocationBtn.classList.add("hidden");
    document.querySelector("#first-screen > p").classList.add("hidden");
    document.querySelector("section").classList.remove("hidden");
  });
}

function getWeatherDataLatLon(position) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function getWeatherDataAdress() {
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const country = document.querySelector("#country").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}

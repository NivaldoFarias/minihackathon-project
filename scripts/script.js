const API_KEY="42b5ff12a2084bc029141577acd4bc26"


let text = document.getElementById("text");

InitializeBtn();

function InitializeBtn() {
  const btn = document.querySelector(".geolocation-btn");
  btn.addEventListener("click", () => {
    getLocation();
    btn.classList.add("clicked");
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
    getWeatherData(position)
}

function getWeatherData(position){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`)
  .then((response) => response.json())
  .then(data => console.log(data))
}
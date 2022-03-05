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

const showPositionCallback = (position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
};

geolocationAvailable();
InitializeBtn();

function getLocation() {
  if (navigator.geolocation) {
    geolocation = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    text.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
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
  const homeBtn = document.querySelector("#home-btn");

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
  homeBtn.addEventListener("click", () => {
    location.reload();
  });
}

function getWeatherDataLatLon(position) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then(renderSecondScreen);
}

function getWeatherDataAdress() {
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const country = document.querySelector("#country").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then(renderSecondScreen);
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
function renderSecondScreen(data) {
  console.log(data);
  const city = data.name;
  const country = data.sys.country;
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;
  const tempMax = Math.round(data.main.temp_max - 273);
  const tempMin = Math.round(data.main.temp_min - 273);
  const temp = Math.round(data.main.temp - 273);
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

  document.querySelector("#first-screen").classList.add("hidden");
  document.querySelector("#second-screen").classList.remove("hidden");
  document.querySelector("#second-screen").innerHTML = `
    <header>
          <img src="http://openweathermap.org/img/wn/${icon}@2x.png"/>
          ${description}
        </header>
        <section>
          <article>
            <p class="minor-text">${city} ${country}</p>
            <p id="degrees-data">atual ${temp}&#176;C</p>
          </article>
          <div id="minor-info">
            <div class="day-info">
              <div>min</div>
              <p class="days">${tempMin}&#176;C</p>
            </div>
            <div class="day-info">
              <div>max</div>
              <p class="days">${tempMax}&#176;C</p>
            </div>
          </div>
          <button class="geolocation-btn" id="home-btn">Return</button>
        </section>
  `;
}

let lat
let lon
let text = document.getElementById("text");

function geolocationAvailable(){
    if('geolocation' in navigator){
        const geolocation = navigator.geolocation.getCurrentPosition(showPositionCallback)
    }
    else{
        alert("Seu navegador não suporta geolocalização")
    }
}

const showPositionCallback = (position) => {
    lat = position.coords.latitude
    lon = position.coords.longitude
};

geolocationAvailable();
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
}

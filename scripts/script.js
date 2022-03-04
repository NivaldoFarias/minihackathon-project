let text = document.getElementById("text");
const btn = document.querySelector(".geolocation-btn");
btn.addEventListener("click", () => {
  getLocation();
});

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

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
}

let lat
let lon

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
}

geolocationAvailable()
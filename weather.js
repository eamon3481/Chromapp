const API_KEY ="a69434075d7cb97b49a7e87b940157e0";
const COORDS = "coords"
const weather = document.querySelector(".weather-js");
function getWeather(lat,long) {

    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    ).then(function(Response){
        return Response.json(); 
    }).then(function(json){
        console.log(json);
        const temp = json.main.temp -273.15;
        const name = json.name;

        weather.innerText = (`${temp} @ ${name}`);
    })

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


function handlePosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,latitude);

}
function PositionErorr(){
    console.log('can not get current position');
}

function askCoord(){
    navigator.geolocation.getCurrentPosition(handlePosition,PositionErorr);
}

function loadCoord(){

    const loadedCoord = localStorage.getItem(COORDS);
    if(loadedCoord === null) {
        askCoord();
    }
    else{
        const parsedCoord = JSON.parse(loadedCoord);
        getWeather(parsedCoord.latitude, parsedCoord.longitude);
    }
}



function init() {
loadCoord();
}

init();
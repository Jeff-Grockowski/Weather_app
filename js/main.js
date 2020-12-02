import weather from "./Weather.js";
import weatherkey from "./apikey.js";


document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === 'complete') {
        console.log("readyState: complete");
        initApp();
    }
});


const initApp = () => {

    let current = "Hays";


    //get user input for weather retreiveal create instance of weather class
    current = localStorage.getItem("city");
    let currentWeather = new weather(current);

    if(current === '') {
        alert("please enter a city")
    }
    else {
        currentWeather.getForcast();
    }

    // weather class to get and display weather
}

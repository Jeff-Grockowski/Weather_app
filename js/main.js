import weather from "./Weather.js";
import weatherkey from "./apikey.js";


document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === 'complete') {
        console.log("readyState: complete");
        initApp();
    }
});


const initApp = () => {
    //get user input for weather retreiveal
    let current = localStorage.getItem("city");
    let currentWeather= new weather(current);

    
    currentWeather.getForcast();
    console.log(currentWeather.currenttemp);
    

}



import weatherkey from "./apikey.js";
export default class Weather {
    constructor(city) {
        this.city = city;
        this.cityID = 0;
    }

    currenttemp = 0;

    newcurrenttemp = async (temp) => {
        this.currenttemp = temp;
    }

    showcurrenttemp =  async () => {
        return this.currenttemp;
    }


    postweather = (weather) => {
        console.log(weather);
    }

    //builds request URL for 5 day forcast
    buildrequestUrl2 = (cityID) => {
        return "http://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + weatherkey;
    }

    //builds request URL for 1day weather forcast
    buildRequestUrl = (city) => {
        return "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherkey;
    }

    

    // fetches the jSON and assigns to attributes
    weatherinfo = async (url) => {
        //get data from api
        var response = await fetch(url);
        var jsonweatherdata = await response.json();
        var response2 = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=" + jsonweatherdata.id + "&units=imperial&appid=" + weatherkey)
        var jsonweatherdata2 = await response2.json();

        //set mainpage weather information with api data
        const maintemp = document.getElementById("maintemp");
        const mainicon = document.getElementById("mainicon");
        const cityName = document.getElementById("cityName");
        const mainhiandlow = document.getElementById("mainhiandlow");
        const maindescr = document.getElementById("maindescr");

        cityName.innerHTML = jsonweatherdata2.city.name;
        maintemp.innerHTML = jsonweatherdata2.list[0].main.temp;
        mainicon.src = 'http://openweathermap.org/img/wn/' + jsonweatherdata2.list[0].weather[0].icon + '@2x.png';
        mainhiandlow.innerHTML = "Hi = " + jsonweatherdata2.list[0].main.temp_max + " / Low = " + jsonweatherdata2.list[0].main.temp_min;
        maindescr.innerHTML = jsonweatherdata2.list[0].weather[0].description;

        //set 5 day forcast from api data

        const img2 = document.getElementById("img2");
        const img3 = document.getElementById("img3");
        const img4 = document.getElementById("img4");
        const img5 = document.getElementById("img5");
        const img6 = document.getElementById("img6");

        img2.src = 'http://openweathermap.org/img/wn/' + jsonweatherdata2.list[1].weather[0].icon + '@2x.png';
        img3.src = 'http://openweathermap.org/img/wn/' + jsonweatherdata2.list[2].weather[0].icon + '@2x.png';
        img4.src = 'http://openweathermap.org/img/wn/' + jsonweatherdata2.list[3].weather[0].icon + '@2x.png';
        img5.src = 'http://openweathermap.org/img/wn/' + jsonweatherdata2.list[4].weather[0].icon + '@2x.png';
        img6.src = 'http://openweathermap.org/img/wn/' + jsonweatherdata2.list[5].weather[0].icon + '@2x.png';
        
        const temp2 = document.getElementById("temp2");
        const temp3 = document.getElementById("temp3");
        const temp4 = document.getElementById("temp4");
        const temp5 = document.getElementById("temp5");
        const temp6 = document.getElementById("temp6");
        
        temp2.innerHTML = jsonweatherdata2.list[1].main.temp;
        temp3.innerHTML = jsonweatherdata2.list[2].main.temp;
        temp4.innerHTML = jsonweatherdata2.list[3].main.temp;
        temp5.innerHTML = jsonweatherdata2.list[4].main.temp;
        temp6.innerHTML = jsonweatherdata2.list[5].main.temp;

        const descr1 = document.getElementById("descr1");
        const descr2 = document.getElementById("descr2");
        const descr3 = document.getElementById("descr3");
        const descr4 = document.getElementById("descr4");
        const descr5 = document.getElementById("descr5");

        descr1.innerHTML = jsonweatherdata2.list[1].weather[0].description;
        descr2.innerHTML = jsonweatherdata2.list[2].weather[0].description;
        descr3.innerHTML = jsonweatherdata2.list[3].weather[0].description;
        descr4.innerHTML = jsonweatherdata2.list[4].weather[0].description;
        descr5.innerHTML = jsonweatherdata2.list[5].weather[0].description;


        await this.newcurrenttemp(jsonweatherdata2.list[0].main.temp);
        console.log(jsonweatherdata2);
        console.log(jsonweatherdata);
        return jsonweatherdata2;
    }


    //returns the forcast for the the weather objects city parameter
    getForcast = async () => {
        var requestUrl = this.buildRequestUrl(this.city);
        await this.weatherinfo(requestUrl);1
        console.log("Done");
    }

}



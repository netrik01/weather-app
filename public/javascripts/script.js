// ------------section-left-top------------
// ------------section-left-top-left------------
var main_city = document.querySelector(".city")
var country = document.querySelector("#country")
var date_now =document.querySelector(".date")
var time_now =document.querySelector(".time")
var longitude = document.querySelector(".longitude")
var latitude = document.querySelector(".latitude")
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// ------------section-left-top-right------------
var main_weather = document.querySelector(".main-weather")
var desc_weather = document.querySelector(".desc-weather")
var temp = document.querySelector(".temp")
var temp_feel = document.querySelector(".feel")

// ------------section-left-btm------------
var sun_rise = document.querySelector(".sun-rise-time")
var sun_set = document.querySelector(".sun-set-time")

// ------------section-right------------
var cloudy = document.querySelector("#cloudy")
var humidity = document.querySelector("#humidity")
var pressure = document.querySelector("#pressure")
var visibility = document.querySelector("#visibility")
var wind = document.querySelector("#wind")

// ------------section-background-video-image------------
var video_content=document.querySelector(".video")
var image_content=document.querySelector(".image")

var city;
console.log(city)
document.querySelector('.search').addEventListener("click", function (e) {
    city = input.value;
    // console.log(city)
    find();
})
input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        city = input.value;
        // console.log(city)
    }
    find();
})
function find(){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3de0a4be3b7e160300ece64a429e84a0`)
    .then(function (weather) {
        // console.log(weather);
        // ------------section-left-top------------
        // ------------section-left-top-left------------
        main_city.innerHTML = weather.data.name;
        country.innerHTML = ", " + weather.data.sys.country;
        latitude.innerHTML = ": "+ weather.data.coord.lat;
        longitude.innerHTML = ": "+ weather.data.coord.lon;
        // -----date-----
        const date = new Date();
        let day = weekday[date.getDay()];
        let day_date = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear();
        let currentDate = `${day}, ${day_date}-${month}-${year}`;
        date_now.innerHTML=currentDate;
        // -----time-----
        time_now.innerHTML=new Date().toLocaleTimeString();
        
        // ------------section-left-top-right------------
        main_weather.innerHTML = weather.data.weather[0].main;
        desc_weather.innerHTML = weather.data.weather[0].description;
        temp.innerHTML = Math.floor(weather.data.main.temp - 273);
        temp_feel.innerHTML = Math.floor(weather.data.main.feels_like - 273);
       
        // ------------section-left-btm------------
        let sunRise=weather.data.sys.sunrise;
        let risetime= new Date(sunRise*1000).toLocaleTimeString();
        sun_rise.innerHTML=risetime;
        let sunSet=weather.data.sys.sunset;
        let settime= new Date(sunSet*1000).toLocaleTimeString();
        sun_set.innerHTML=settime;
        
        // ------------section-right------------
        cloudy.innerHTML = weather.data.clouds.all;
        humidity.innerHTML = weather.data.main.humidity;
        pressure.innerHTML = weather.data.main.pressure;
        visibility.innerHTML = weather.data.visibility/1000;
        wind.innerHTML = weather.data.wind.speed;
        
        // ------------background-video------------
        if(weather.data.weather[0].main=="Clear"){
            video_content.style.backgroundImage="url(./images/gif/clear.gif)";
            image_content.style.backgroundImage="url(./images/image/clear.jpg)";
        }
        if(weather.data.weather[0].main=="Clouds"){
            video_content.style.backgroundImage="url(./images/gif/clouds.gif)";
            image_content.style.backgroundImage="url(./images/image/clouds1.jpg)";
        }
        if(weather.data.weather[0].main=="Rain"){
            video_content.style.backgroundImage="url(./images/gif/rain.gif)";
            image_content.style.backgroundImage="url(./images/image/rain1.jpg)";
        }
        if(weather.data.weather[0].main=="Mist"){
            video_content.style.backgroundImage="url(./images/gif/mist.gif)";
            image_content.style.backgroundImage="url(./images/image/mist.jpg)";
        }
        if(weather.data.weather[0].main=="Smoke"){
            video_content.style.backgroundImage="url(./images/gif/smoke.gif)";
            image_content.style.backgroundImage="url(./images/image/smoke.jpg)";
        }
        if(weather.data.weather[0].main=="Thunderstorm"){
            video_content.style.backgroundImage="url(./images/gif/thunderstorm.gif)";
            image_content.style.backgroundImage="url(./images/image/thunderstorm.jpg)";
        }
        if(weather.data.weather[0].main=="Haze"){
            video_content.style.backgroundImage="url(./images/gif/haze.gif)";
            image_content.style.backgroundImage="url(./images/image/haze1.jpg)";
        }
        if(weather.data.weather[0].main=="Winter"){
            video_content.style.backgroundImage="url(./images/gif/snow.gif)";
            image_content.style.backgroundImage="url(./images/image/snow.jpg)";
        }
    })
}

// document.querySelector('.search').addEventListener("click", function (e) {
//     console.log(input.value);
//     city = input.value;
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3de0a4be3b7e160300ece64a429e84a0`)
//     .then(function (weather) {
//         console.log(weather);
//         // ------------section-left-top------------
//         // ------------section-left-top-left------------
//         main_city.innerHTML = weather.data.name;
//         country.innerHTML = ", " + weather.data.sys.country;
//         latitude.innerHTML = ": "+ weather.data.coord.lat;
//         longitude.innerHTML = ": "+ weather.data.coord.lon;
//         // -----date-----
//         const date = new Date();
//         let day = weekday[date.getDay()];
//         let day_date = date.getDate()
//         let month = date.getMonth() + 1
//         let year = date.getFullYear();
//         let currentDate = `${day}, ${day_date}-${month}-${year}`;
//         date_now.innerHTML=currentDate;
//         // -----time-----
//         time_now.innerHTML=new Date().toLocaleTimeString();
        
//         // ------------section-left-top-right------------
//         main_weather.innerHTML = weather.data.weather[0].main;
//         desc_weather.innerHTML = weather.data.weather[0].description;
//         temp.innerHTML = Math.floor(weather.data.main.temp - 273);
//         temp_feel.innerHTML = Math.floor(weather.data.main.feels_like - 273);
       
//         // ------------section-left-btm------------
//         let sunRise=weather.data.sys.sunrise;
//         let risetime= new Date(sunRise*1000).toLocaleTimeString();
//         sun_rise.innerHTML=risetime;
//         let sunSet=weather.data.sys.sunset;
//         let settime= new Date(sunSet*1000).toLocaleTimeString();
//         sun_set.innerHTML=settime;
        
//         // ------------section-right------------
//         cloudy.innerHTML = weather.data.clouds.all;
//         humidity.innerHTML = weather.data.main.humidity;
//         pressure.innerHTML = weather.data.main.pressure;
//         visibility.innerHTML = weather.data.visibility/1000;
//         wind.innerHTML = weather.data.wind.speed;
        
//         // ------------background-video------------
//         if(weather.data.weather[0].main=="Clear"){
//             video_content.style.backgroundImage="url(./images/gif/clear.gif)";
//             image_content.style.backgroundImage="url(./images/image/clear.jpg)";
//         }
//         if(weather.data.weather[0].main=="Clouds"){
//             video_content.style.backgroundImage="url(./images/gif/clouds.gif)";
//             image_content.style.backgroundImage="url(./images/image/clouds1.jpg)";
//         }
//         if(weather.data.weather[0].main=="Rain"){
//             video_content.style.backgroundImage="url(./images/gif/rain.gif)";
//             image_content.style.backgroundImage="url(./images/image/rain1.jpg)";
//         }
//         if(weather.data.weather[0].main=="Mist"){
//             video_content.style.backgroundImage="url(./images/gif/mist.gif)";
//             image_content.style.backgroundImage="url(./images/image/mist.jpg)";
//         }
//         if(weather.data.weather[0].main=="Smoke"){
//             video_content.style.backgroundImage="url(./images/gif/smoke.gif)";
//             image_content.style.backgroundImage="url(./images/image/smoke.jpg)";
//         }
//         if(weather.data.weather[0].main=="Thunderstorm"){
//             video_content.style.backgroundImage="url(./images/gif/thunderstorm.gif)";
//             image_content.style.backgroundImage="url(./images/image/thunderstorm.jpg)";
//         }
//         if(weather.data.weather[0].main=="Haze"){
//             video_content.style.backgroundImage="url(./images/gif/haze.gif)";
//             image_content.style.backgroundImage="url(./images/image/haze1.jpg)";
//         }
//         if(weather.data.weather[0].main=="Winter"){
//             video_content.style.backgroundImage="url(./images/gif/snow.gif)";
//             image_content.style.backgroundImage="url(./images/image/snow.jpg)";
//         }
//     })
// })


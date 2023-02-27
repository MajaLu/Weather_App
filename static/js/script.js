import API_KEY from "./apikey.js";

let weather = {
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + API_KEY
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://api.unsplash.com/search/photos/1600x900/?"query=#{name}&content_filter=high&client_id=#{ENV['BWWvgGxoJ0mfCadHhcXU8j3ll6LdhReuTqC0RsQdixc']}"')"
    },
    
    
    https://api.unsplash.com/search/photos?query=#{query}&content_filter=high&client_id=#{ENV['UNSPLASH_ACCESS_KEY']}
    
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};


document
.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Berlin");

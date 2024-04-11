// var APIkey = "854920be9ab64c650c7f0d1a7d5c200c";
// var lastCitySearched;
// var storedCities;
// var cities = [];

// if (localStorage.getItem("cities")) {
//     storedCities = JSON.parse(localStorage.getItem("cities"));
//     console.log(storedCities);
//     for (var i = 0; i < storedCities.length; i++) {
//         lastCitySearched = storedCities.length - 1;
//         var lastCity = storedCities[lastCitySearched];
//     }
// } else {
//     cities;
// }
// renderLastCityInfo();
// console.log("cities", cities);
// $("#search-city").on("click", function (event) {
//     event.preventDefault();
//     var city = $("#city-input").val();
//     console.log(city)
//     var queryURL1 = 
//     "https://openweathermap.org/data/2.5/forecast?" + 
//     city + 
//     "&appid=" +
//     APIkey;

// $.ajax({
//     url: queryURL1,
//     method: "GET",
// }).then(function (response) {
//     console.log(response);
//     lat = response.coord.lat;
//     lon = response.coord.lon;
//     cities.push(city);
//     localStorage.setItem("cities", JSON.stringify(cities));

//     var cityItem = $("<li>");
//     cityItem.addClass("list-group-item city-item");
//     cityItem.text(response.name);
//     city.attr("lat", response.coord.lat);
//     city.attr("lon", response.coord.lon);
//     $("#city-list").prepend(cityItem);

//     cityItem.on("click", function () {
//         lat = $(this).attr("lat");
//         lon = $(this).attr("lon");
//         renderCityName(response);
//         renderCityInfo(lat, lon);
//     });
//     renderCityName(response);
//     renderCityInfo(lat, lon);
// });
// });

// function renderLastCityInfo() {
//     $("#city-list").clear;
//     var queryURL1 =
//     "https://api.openweathermap.org/data/2.5/forecast?lat=28.53&lon=-81.37&appid=854920be9ab64c650c7f0d1a7d5c200c" +
//     lastCity +
//     "&appid" +
//     APIkey;

//     $.ajax({
//         url: queryURL1,
//         method: "GET",
//     }).then(function (response) {
//         console.log(response);
//         lat = response.coord.lat;
//         lon = response.coord.lon;

//         renderCityName(response);
//         renderCityInfo(lat, lon);
//     });
// }

// function renderCityName(response) {
//     var currentDate = moment().format("L");
//     $(".card-title").text(`${response.name} (${currentDate})`);
//     var weatherIcon = $("<img>");
//     var iconCode = response.weather[0].icon;
//     var iconUrl = 
//     weatherIcon.attr("src", iconUrl);
//     $(".card-title").append(weatherIcon);
// }

// function renderCityInfo(lat, lon) {
//     var queryURL2 = 
//     "https://api.openweathermap.org/data/2.5/forecast?lat=28.53&lon=-81.37&appid=854920be9ab64c650c7f0d1a7d5c200c" +
//     lat +
//     "&lon=" +
//     lon +
//     "&units=imperial&appid=" +
//     APIkey;

//     $.ajax({
//         url: queryURL2,
//         method: "GET",
//     }).then(function (response) {
//         $("#temperature").text(`Temperature: ${response.current.temp} \xB0F`);
//         $("#humidity").text(`Humidity: ${response.current.humidity}%`);
//         $("#wind-speed").text(`Wind Speed: ${response.current.wind_speed} MPH`);
//         $("#uv-index").text(`UV Index `);

//         var uviSpan = $("<span>");
//         uviSpan.text(`${response.current.uvi}`);
//         var uvi = response.current.uvi;
//         if (uvi <= 2) {
//             uviSpan.addClass("badge badge-success");
//         } else if (uvi <= 5) {
//             uviSpan.addClass("badge badge-warning");
//         } else if (uvi <= 7) {
//             uviSpan.addClass("badge");
//             uviSpan.css("background-color", "orange");
//         }else if (uvi <= p) {
//             uviSpan.addClass("badge badge-danger");
//         }else {
//             uviSpan.addClass("badge");
//             uviSpan.css("background-color", "purple");
//             uviSpan.css("color", "white");
//         }
//         $("#uvi-index").append(uviSpan);
//         renderForecast(response);
//     });
// }

// function renderForecast(response) {
//     $("#forecast").empty();
//     var days = response.daily;
//     days.slice(1, 6).map((day) => {
//         var dayCard = $("<div>");
//         dayCard.addClass("card col-md-4 daycard");
//         dayCard.css("background-color" , "lightblue");
//         dayCard.css("Margin-right", "5px");
//         dayCard.css("font-size", "15px");

//         var dayCardBody = $("<div>");
//         dayCardBody.addClass("card-body");
//         dayCard.append(dayCardBody);

//         var dayCardName = $("<h6>");
//         dayCardName.addClass("card-title");
//         var datastamp = moment.unix(day.dt);
//         var forecastDate = datestamp.format("L");
//         dayCardName.text(forecastDate);
//         dayCardBody.append(dayCardName);
        
//         var weatherIcon = $("<img>");
//         var iconCode = day.weather[0].icon;
//         var iconUrl = "https://openweathermap.org/img/wn/10d@2x.png" + iconCode + ".png";
//         weatherIcon.attr("src", iconUrl);
//         dayCardBody.append(weatherIcon);

//         var dayTemp = $("<p>");
//         dayTemp.text(`Temp: ${day.temp.max} \xB0F`);
//         dayCardBody.append(dayTemp);

//         var dayHumidity = $("<p>");
// 		dayHumidity.text(`Humidity: ${day.humidity}%`);
// 		dayCardBody.append(dayHumidity);

// 		$("#forecast").append(dayCard);
//     });
// }

function initPage() {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("fiveday-header");
    var todayweatherEl = document.getElementById("today-weather");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    // Assigning a unique API to a variable
    const APIKey = "84b79da5e5d7c92085660485702f4ce8";

    function getWeather(cityName) {
        // Execute a current weather get request from open weather api
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        axios.get(queryURL)
            .then(function (response) {

                todayweatherEl.classList.remove("d-none");

                // Parse response to display current weather
                const currentDate = new Date(response.data.dt * 1000);
                const day = currentDate.getDate();
                const month = currentDate.getMonth() + 1;
                const year = currentDate.getFullYear();
                nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
                let weatherPic = response.data.weather[0].icon;
                currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
                currentPicEl.setAttribute("alt", response.data.weather[0].description);
                currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
                currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
                currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
                
                // Get UV Index
                let lat = response.data.coord.lat;
                let lon = response.data.coord.lon;
                let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
                axios.get(UVQueryURL)
                    .then(function (response) {
                        let UVIndex = document.createElement("span");
                        
                        // When UV Index is good, shows green, when ok shows yellow, when bad shows red
                        if (response.data[0].value < 4 ) {
                            UVIndex.setAttribute("class", "badge badge-success");
                        }
                        else if (response.data[0].value < 8) {
                            UVIndex.setAttribute("class", "badge badge-warning");
                        }
                        else {
                            UVIndex.setAttribute("class", "badge badge-danger");
                        }
                        console.log(response.data[0].value)
                        UVIndex.innerHTML = response.data[0].value;
                        currentUVEl.innerHTML = "UV Index: ";
                        currentUVEl.append(UVIndex);
                    });
                
                // Get 5 day forecast for this city
                let cityID = response.data.id;
                let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey;
                axios.get(forecastQueryURL)
                    .then(function (response) {
                        fivedayEl.classList.remove("d-none");
                        
                        //  Parse response to display forecast for next 5 days
                        const forecastEls = document.querySelectorAll(".forecast");
                        for (i = 0; i < forecastEls.length; i++) {
                            forecastEls[i].innerHTML = "";
                            const forecastIndex = i * 8 + 4;
                            const forecastDate = new Date(response.data.list[forecastIndex].dt * 1000);
                            const forecastDay = forecastDate.getDate();
                            const forecastMonth = forecastDate.getMonth() + 1;
                            const forecastYear = forecastDate.getFullYear();
                            const forecastDateEl = document.createElement("p");
                            forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
                            forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
                            forecastEls[i].append(forecastDateEl);

                            // Icon for current weather
                            const forecastWeatherEl = document.createElement("img");
                            forecastWeatherEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[forecastIndex].weather[0].icon + "@2x.png");
                            forecastWeatherEl.setAttribute("alt", response.data.list[forecastIndex].weather[0].description);
                            forecastEls[i].append(forecastWeatherEl);
                            const forecastTempEl = document.createElement("p");
                            forecastTempEl.innerHTML = "Temp: " + k2f(response.data.list[forecastIndex].main.temp) + " &#176F";
                            forecastEls[i].append(forecastTempEl);
                            const forecastHumidityEl = document.createElement("p");
                            forecastHumidityEl.innerHTML = "Humidity: " + response.data.list[forecastIndex].main.humidity + "%";
                            forecastEls[i].append(forecastHumidityEl);
                        }
                    })
            });
    }

    // Get history from local storage if any
    searchEl.addEventListener("click", function () {
        const searchTerm = cityEl.value;
        getWeather(searchTerm);
        searchHistory.push(searchTerm);
        localStorage.setItem("search", JSON.stringify(searchHistory));
        renderSearchHistory();
    })

    // Clear History button
    clearEl.addEventListener("click", function () {
        localStorage.clear();
        searchHistory = [];
        renderSearchHistory();
    })

    function k2f(K) {
        return Math.floor((K - 273.15) * 1.8 + 32);
    }

    function renderSearchHistory() {
        historyEl.innerHTML = "";
        for (let i = 0; i < searchHistory.length; i++) {
            const historyItem = document.createElement("input");
            historyItem.setAttribute("type", "text");
            historyItem.setAttribute("readonly", true);
            historyItem.setAttribute("class", "form-control d-block bg-white");
            historyItem.setAttribute("value", searchHistory[i]);
            historyItem.addEventListener("click", function () {
                getWeather(historyItem.value);
            })
            historyEl.append(historyItem);
        }
    }

    renderSearchHistory();
    if (searchHistory.length > 0) {
        getWeather(searchHistory[searchHistory.length - 1]);
    }
    
}

initPage();
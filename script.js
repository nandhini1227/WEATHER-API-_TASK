const restcountries = fetch("https://restcountries.com/v3.1/all");

restcountries
  .then((data) => data.json())
  .then((data2) => {

    let container = document.createElement("div");
    container.className = "container";
    let row = document.createElement("div");
    row.className = "row";
    let col = document.createElement("div");
    col.className = "row-col-lg-4 col-sm-12";

    let rowContainer = document.createElement("div");
    rowContainer.className = "row row-cols-1 row-cols-md-3";

    for (let i = 0; i < data2.length; i++) {
      console.log(data2[i]);

      let carddiv = document.createElement("div");

      carddiv.innerHTML = `
      
      <div class="col">

       <div class="card">

       <div class="card-header">${data2[i].name.common}</div>

       <div class="card-body">

       <img src= "${data2[i].flags.png}" class="card-img-top" alt="country-flag">

        <p class="card-text"><b><i>Capital: ${data2[i].capital}</i></b></p>

        <p class="card-text"><b><i>Region: ${data2[i].region}</i></b></p>

        <p class="card-text"><b><i>Country code: ${data2[i].cca3}</i></b></p>

        <p class="card-text"><b><i>latlng: ${data2[i].latlng}</i></b></p>

        <div id="weather${data2[i].name.common}">

        <button id="button" class="btn btn-outline-secondary" onclick="getWeatherData('${data2[i].name.common}')">Click for weather</button>

        </div>

      </div>

    </div>

  </div>`;

      rowContainer.appendChild(carddiv);
    }
    col.appendChild(rowContainer);

    container.appendChild(row);
    container.appendChild(col);

    document.body.append(container);
  });

function getWeatherData(restCountryName) {

  let apiKey = "7bc5de981b938a24f9ec6fadf74beec5";
  let weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${apiKey}`;


  fetch(weatherurl)
    .then((response) => response.json())
    .then((weatherData) => {
      console.log(weatherData);

      let weather = document.getElementById(
        `weather${restCountryName}`
      );
      weather.innerHTML =
        ` <p><b>Min Temperature:</b> ${weatherData.main.temp_min}°C</p>
                                           
         <p><b>Max Temperature:</b> ${weatherData.main.temp_max}°C</p>
                                       
         <p><b>Humidity:</b> ${weatherData.main.humidity}%</p>`;
                                    
        
    })                                    
        

    .catch((error) => {

      console.error("error fetching weather data. :", error);
      alert`error fetching weather data.`;
    });
  
}
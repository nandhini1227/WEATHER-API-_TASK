 Overview:

                       The code fetches country data from the "https://restcountries.com/v3.1/all" API using the Fetch API.
                       It dynamically generates HTML elements to display country information, including the country name, flag, capital, region, country code, and latitude-longitude.
                       For each country, a card is created with a button to fetch weather data using the OpenWeatherMap API when clicked.
                       The weather data is displayed for each country, showing minimum temperature, maximum temperature, and humidity.

Key Features:

Dynamic HTML Generation:
              The code dynamically creates HTML elements using JavaScript to display country and weather information.
Country Information:
              Displays country details such as name, flag, capital, region, country code, and latitude-longitude.
Weather Data:
              Fetches and displays weather information (min temperature, max temperature, humidity) for each country using the OpenWeatherMap API.
Button for Weather:
              Provides a button for each country card to fetch and display weather data when clicked.
              
Technology Used:

Fetch API:
              Utilizes the Fetch API to make asynchronous requests to REST APIs and handle responses.
HTML and JavaScript:
              Dynamically generates HTML elements and manipulates the DOM using JavaScript.
OpenWeatherMap API:
              Retrieves weather data for each country by making requests to the OpenWeatherMap API.
Bootstrap (CSS Framework):
              Uses Bootstrap classes for styling elements, creating a responsive layout with cards and buttons.

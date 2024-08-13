
        const apiKey = 'd1ed832380e2d5232189a1a395a98250';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

        const searchBox = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');
        const weatherIcon = document.querySelector('.weather-icon');


        async function checkWeather(city) {
            const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);

            if(response.status == 404){
                document.querySelector('.error').style.display = 'block';
                document.querySelector('.weather').style.display = 'none';
            }
            else{
                var data = await response.json();

                document.querySelector('.city').innerHTML = data.name;
                document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ '°C';
                document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
                document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';

                updateWeatherIcon(data.weather[0].main);

                document.querySelector('.weather').style.display = 'block';
                document.querySelector('.error').style.display = 'none';
            }   
        }

        function updateWeatherIcon(weatherCondition) {
            if (weatherCondition === 'Clouds') {
                weatherIcon.src = 'img/cloud.png';
            } else if (weatherCondition === 'Clear') {
                weatherIcon.src = 'img/sunny.png';
            } else if (weatherCondition === 'Rain') {
                weatherIcon.src = 'img/raining.png';
            } else if (weatherCondition === 'Drizzle') {
                weatherIcon.src = 'img/Drizzle.png';
            } else if (weatherCondition === 'Mist') {
                weatherIcon.src = 'img/Mist.png';
            }
        }

        searchBtn.addEventListener('click', () => {
            checkWeather(searchBox.value);
        })

         // Add event listener for the Enter key
        searchBox.addEventListener('keydown', (event) => {
            if(event.key === 'Enter'){
                checkWeather(searchBox.value);
            }
        })
       

    
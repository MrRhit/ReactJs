import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSearch = () => {
        const apiKey = 'a12d35318837afbfbda6646b0fc97e9c';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        // console.log(weatherData);
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
                setError(null); // Clear any previous error
                setCity(''); // Clear the input field after search
            })
            .catch(error => {
                console.error('Error fetching weather data:', error.message);
                setError('Failed to fetch weather data. Please try again.');
                setWeatherData(null); // Clear weather data on error
            });
    };

    return (
        <div className='weather_div'>
            <div className='header'>
                <h3>Weather App</h3>
                <input
                    type='text'
                    value={city}
                    placeholder='Enter the city'
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {error && <p className="error">{error}</p>}
            
            {weatherData && (
                <div className='weather_elem'>
                    <h3>Country:{weatherData.name} ({weatherData.sys.country})</h3>
                    <p>Temp: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                    <p>Speed: {weatherData.wind.speed}</p>
                    <p>Visibility: {weatherData.visibility}</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
            )}
            
        </div>
    );
};

export default Weather;

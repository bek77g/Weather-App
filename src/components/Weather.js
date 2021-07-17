import React from 'react'
import Form from './Form'
import sunrise from '../img/wi-sunrise.svg'
import sunset from '../img/wi-sunset.svg'


const Weather = ({weather, setWeather, city, setCity, photo, setPhoto}) => {
    let lat = weather.coord.lat,
        lon = weather.coord.lon,
        mainDesc = weather.weather[0].main,
        temp = Math.round(weather.main.temp - 273.15);
    const addZero = (num) => {
        if (num < 10) return `0${num}`;
        else return num
    };
    const getTime = (times) => {
        let time = new Date(times),
            hours = addZero(time.getHours()),
            minutes = addZero(time.getMinutes());
        return `${hours} : ${minutes}`
    };
    let cityTime = () => {
        let d = new Date(),
            utc = d.getTime() + (d.getTimezoneOffset() * 60000),
            nd = new Date(utc + (1000 * weather.timezone)),
            hours = addZero(nd.getHours()),
            minutes = addZero(nd.getMinutes());
        return `${hours} : ${minutes}`
    }
    return (
        <div className="container">
            <div className="weather-side">
            <div className="weather-gradient gradient"></div>
            <div className="date-container">
                <h2 className="date-dayname">{weather.name}</h2>
                <p class="date-day">{cityTime()}</p>
                <span class="location">{weather.sys.country}</span>
            </div>
            <div className="weather-container">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} className="weather-icon" data-feather="sun" alt="weather type icon"/>
                <h1 className="weather-temp">{temp}°С</h1>
                <h3 className="weather-desc">{weather.weather[0].description}</h3>
            </div>
        </div>
        <div className="info-side">
        <div className="today-info-container">
            <div className="today-info">
                <div> <span className="title">PRECIPITATION</span><span className="value">{weather.clouds.all} %</span>
                    <div className="clear"></div>
                </div>
                <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{weather.main.humidity} %</span>
                    <div className="clear"></div>
                </div>
                <div className="wind"> <span className="title">WIND</span><span className="value">{weather.wind.speed} m/s</span>
                    <div className="clear"></div>
                </div>
                <div className="advice"> <span className="title">ADVICE:</span><span className="value">
                    {temp < 10 ? "It's very cold now, put on your jacket" : temp < 20 ? "it's cold now, dress warmly" : temp < 29 ? "Temperature is normal, dress what you want" : "Heat, drink more water"}
                </span>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
        <div className="week-container">
        </div>
        <div className="location-container"><Form setWeather={setWeather} city={city} setCity={setCity} lat={lat} lon={lon} mainDesc={mainDesc} photo={photo} setPhoto={setPhoto} temp={temp}/>
        <div className="today-info">
            <div className="sun-dir"><p className="sun-status">Sunrise:</p><img src={sunrise} alt="sunrise icon"/><span>{getTime(weather.sys.sunrise * 1000)}</span></div>
            <div className="sun-dir"><p className="sun-status">Sunset:</p><img src={sunset} alt="sunset icon"/><span>{getTime(weather.sys.sunset * 1000)}</span></div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Weather
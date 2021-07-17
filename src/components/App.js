import React, {useState} from 'react'
import Form from './Form'
import Weather from './Weather'
import "../css/index.css"

function App() {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('');
    const [photo, setPhoto] = useState({})
    
    return (
        <div className="central">
            {Object.keys(weather).length === 0 ? <Form setWeather={setWeather} city={city} setCity={setCity} weather={weather}/> : <Weather weather={weather} setWeather={setWeather} city={city} setCity={setCity} photo={photo} setPhoto={setPhoto}/>}
        </div>
    )
}
export default App
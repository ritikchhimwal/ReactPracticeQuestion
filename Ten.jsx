//weather app which fetch weather according to location

import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [weather,setWeather] = useState(null);

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid={ac0e175622a3a46fb7042f7828d05041}`)
                .then((response)=>response.json())
                .then((data)=>setWeather(data));
            })
        }
    },[])
  return (
    <div>
       {weather ? (
        <div>
            <h2>Current Weather</h2>
            <p>Temprature:{weather.main.temp}</p>\
            <p>Conditions:{weather.weather[0]}</p>
        </div>
       ) : (
        <p>Loading.....</p>
       )}
    </div>
  )
}

export default Weather

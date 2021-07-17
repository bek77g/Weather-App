import React from 'react'
import axios from 'axios'

const Form = ({setWeather, city, setCity, lat, lon , mainDesc, photo, setPhoto, temp}) => {
    const getWeather = (e) => {
        e.preventDefault();
        let API_KEY = '2c790b6acd182334dec8b2d1ebd9b35f';
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(({data}) => setWeather(data))
        .catch(() => alert('Enter city/country correctly'));
    setCity('');
    // loadBackground(lat, lon, mainDesc)
    };
    bgGradient();
    function bgGradient() {
        if(temp > -10 && temp <= 0){
        return document.querySelector("#root").style.background='rgba(50,97,214, 0.2)'
      }else if(temp > 1 && temp <= 15){
        return document.querySelector("#root").style.background='rgba(244,244,244, 0.2)'
      }else if(temp > 16 && temp <= 25){
        return document.querySelector("#root").style.background='rgba(244,204,0, 0.1)'
      }else if(temp > 26){
        return document.querySelector("#root").style.background='rgba(216,128,48, 0.2)'
      }else{
        return document.querySelector("#root").style.background=''
      };
    //   loadBackground(lat, lon, mainDesc)
    }


    // function loadBackground(lat, lon, weatherTag) {
    //     axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1452866c8cea54acd0075022ef573a07&lat=${lat}&lon=${lon}&accuracy=1&tags=${weatherTag}&sort=relevance&extras=url_l&format=json`)
    //     .then(({data}) => setPhoto(data))
    //     .catch(() => alert('Enter city/country correctly'))
    //     // console.log(jsonFlickrApi(photo));
    // };

    // function jsonFlickrApi(data){
    //     if (data.photos.pages > 0){
    //       const photo = data.photos.photo[Math.floor(Math.random()*parseInt(data.photos.photo.length))];
    //       document.querySelector("body").style.backgroundImage = "url('" + photo.url_l + "')";
    //     }
    //     else{
        //   document.querySelector("body").style.backgroundImage = "url('https://fourtonfish.com/tutorials/weather-web-app/images/default.jpg')";
    //     }
    //   }


    // function loadBackground(lat, lon, weatherTag) {
    //     var script_element = document.createElement('script');
      
    //     script_element.src = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1452866c8cea54acd0075022ef573a07&lat=" + lat + "&lon=" + lon + "&accuracy=1&tags=" + weatherTag + "&sort=relevance&extras=url_l&format=json";
        
    //     document.getElementsByTagName('head')[0].appendChild(script_element);
    //   };

    //   function jsonFlickrApi(data){
    //     if (data.photos.pages > 0){
    //       //var randomPhotoId = parseInt(data.photos.total);
    //       var photo = data.photos.photo[Math.floor(Math.random()*parseInt(data.photos.photo.length))];
    //       document.querySelector("body").style.backgroundImage = "url('" + photo.url_l + "')";
    //       document.querySelector("#image-source").setAttribute("href", "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id);
    //     }
    //     else{
    //       document.querySelector("body").style.backgroundImage = "url('https://fourtonfish.com/tutorials/weather-web-app/images/default.jpg')";
    //       document.querySelector("#image-source").setAttribute("href", "https://www.flickr.com/photos/superfamous/310185523/sizes/o/");
    //     }
    //   }

    const inputHandler = (e) => {
        setCity(e.target.value)
    };
    return (
        <form action="" onSubmit={getWeather}>
            <input className="input gradient" type="text" placeholder="Enter city/country" onChange={inputHandler} value={city}/>
        </form>
    )
}
export default Form
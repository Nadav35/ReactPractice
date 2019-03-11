import React, { Component } from 'react';
import axios from 'axios';

export class Weather extends Component {

  state = {
    lat: '',
    lng: '',
    location: '',
    temp: ''
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      // console.log(pos);
      
      this.setState({ 
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
      
    })
  }

  setVars() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&units=imperial&APPID=f8f928a9a8a90741de8f48b66d244d81`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          location: res.data.name,
          temp: res.data.main.temp

        })

      })
  }

  

  render() {
    if (this.state.lat) {
      this.setVars();
    }
    
    
    const { location, temp } = this.state;
    return (
      <div className="weather-container">
        <h1>{location}  {temp}</h1>
        <div className="weather-pane">


        </div>
      </div>
    )
  }
}

export default Weather

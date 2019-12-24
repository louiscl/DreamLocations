import React from "react";
import "../css/WeatherInfoField.css";

class DetailedInfoField extends React.Component {
 
    // this.props.weatherInfoObj

    weatherIcon = () => {
          return `http://openweathermap.org/img/wn/${this.props.weatherInfoObj.weather[0].icon}@2x.png`;
      };

      convertKelvinToCelsius = kelvin => {
        const celsius = kelvin - 273.1;
        return celsius;
      };

      renderTemperature = (kelvin) => {
        return `${Math.round(this.convertKelvinToCelsius(kelvin))}°`
      };

  render() {
    return (
      <div className="Detailed-Field-Wrapper">
          <div className="Detailed-Field-Content">
              <p className="DFC-Header">Detaillierte Wetter Analyse:</p>
              <p className="DFCH1">Wetter:</p>
              <p className="DFCH2">Temp:</p>
              <p className="DFCH3">Wind & Feuchtigkeit:</p>
              <div className="DFCC1">
                  <li className="DFCC-text">{this.props.weatherInfoObj.weather[0].description}</li>
                  <img src={`${this.weatherIcon()}`} width="100px"></img>
              </div>
              <div className="DFCC2">
                  <li className="DFCC-text">Temperatur: {this.renderTemperature(this.props.weatherInfoObj.main.temp)}</li>
                  <li className="DFCC-text">Gefühlt: {this.renderTemperature(this.props.weatherInfoObj.main.feels_like)}</li>
              </div>
              <div className="DFCC3">
              <li className="DFCC-text">Wind: {this.props.weatherInfoObj.wind.speed} m/s</li>
              <li className="DFCC-text">Feuchtigkeit: {this.props.weatherInfoObj.main.humidity}%</li>

              </div>


          </div>

      </div>
    );
  }
}

export default DetailedInfoField;

import React from "react";
import "../css/WeatherInfoField.css";

class WeatherInfoField extends React.Component {
  apiContentLoaded = () => {
    return this.props.weatherInfoObj.weather;
  };

  convertDate = () => {
    if (this.apiContentLoaded()) {
      const date = new Date(this.props.weatherInfoObj.dt * 1000);
      return date;
    }
  };

  renderDay = () => {
    const day = this.convertDate().getDay();
    if (day === 1) {
      return "Mo";
    } else if (day === 2) {
      return "Di";
    } else if (day === 3) {
      return "Mi";
    } else if (day === 4) {
      return "Do";
    } else if (day === 5) {
      return "Fr";
    } else if (day === 6) {
      return "Sa";
    } else if (day === 0) {
      return "So";
    }
  };

  convertAndRenderTextDate = () => {
    if (this.apiContentLoaded()) {
      const date = this.props.weatherInfoObj.dt_txt.split(" ");
      const dateOnly = date[0].split("-");
      const dateReal = dateOnly[2] + "." + dateOnly[1];
      return dateReal;
    }
  };

  weatherIcon = () => {
    if (this.apiContentLoaded()) {
      return `http://openweathermap.org/img/wn/${this.props.weatherInfoObj.weather[0].icon}@2x.png`;
    } else {
      return "placeholder icon";
    }
  };

  convertKelvinToCelsius = kelvin => {
    const celsius = kelvin - 273.1;
    return celsius;
  };

  renderTemperature = () => {
    if (this.apiContentLoaded()) {
      return `${Math.round(
        this.convertKelvinToCelsius(this.props.weatherInfoObj.main.temp)
      )}°`;
    }
  };

  render() {
    return (
      <div className={`W-I-B-${this.props.idx}`}>
        <div
          className="WIB-Content"
          onClick={() => this.props.click(this.props.weatherInfoObj)}
        >
          <div className={`WIB-Content-City-${this.props.city()}`}>
            <p className="WIB-Day">{this.renderDay()}</p>
            <p className="WIB-Date">{this.convertAndRenderTextDate()}</p>
            <p className="WIB-Icon">
              <img src={`${this.weatherIcon()}`} width="40px"></img>
            </p>
            <p className="WIB-Weather">
              {this.props.weatherInfoObj.weather[0].main}
            </p>
            <p className="WIB-Temperatur">{this.renderTemperature()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherInfoField;

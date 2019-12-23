import React from "react";
import "../css/HomeContainer.css";
import WeatherInfoField from "./WeatherInfoField";

class LocationField extends React.Component {
  //   determineCity = () => {
  //     if (this.state.city === null && this.props.weatherInfo) {
  //       if (this.props.weatherInfo.weather.city.name === "Meerbusch") {
  //         this.setState({ city: "meerbusch" });
  //       }
  //     }
  //   };

  determineCity = () => {
    if (this.props.city === "Meerbusch") {
      return "meerbusch";
    } else if (this.props.city === "Ibiza") {
      return "ibiza";
    } else if (this.props.city === "Aurach") {
      return "aurach";
    }
  };

  apiContentLoaded = () => {
    return this.props.weatherInfo.weather;
  };

  renderImageLink = () => {
    if (this.apiContentLoaded) {
      if (this.determineCity() === "meerbusch") {
        return "https://www.dwf.law/-/media/DWF/Images/Locations-Assets/Duesseldorf/Duesseldorf-by-day-1800x900.ashx?h=901&la=en&w=1793";
      }
      if (this.determineCity() === "ibiza") {
        return "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/340000/340805-Ibiza-Island.jpg";
      }
      if (this.determineCity() === "aurach") {
        // return "http://www.fonro-immobilien.at/wp-content/uploads/2019/08/Titel-Kitzb%C3%BChel-Symbolbild-1024x768-1024x585.jpg"
        return "https://assets-tt-com.nmo.at/images/2019/01/15221402.19419959.ba8aa2da7d6c184af9f2cba202f2bed2.jpg";
      }
    } else {
      console.log("[image] API content not yet loaded");
    }
  };

  renderWeather = () => {
    if (this.apiContentLoaded()) {
      const minimizedWeatherData = this.props.weatherInfo.weather.list.filter(
        obj => obj.dt_txt.split(" ")[1] === "12:00:00"
      );
      return minimizedWeatherData.map((obj, idx) => {
        // console.log(obj);
        return (
          <WeatherInfoField key={idx + 1} idx={idx + 1} weatherInfoObj={obj} />
        );
      });
    } else {
      console.log("API content not yet loaded");
    }
  };

  render() {
    return (
      <div className={`Wrapper-Div-${this.props.city}`}>
        <div className="Field-Content">
          <p className="Field-Header">{this.props.city}</p>
          <div className="Field-Header-Line"></div>
          <div className="Field-image">
            <img
              src={this.renderImageLink()}
              width="300px"
              height="150px"
            ></img>
          </div>
          {this.renderWeather()}
        </div>
      </div>
    );
  }
}

export default LocationField;

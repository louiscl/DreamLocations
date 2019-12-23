import React from "react";
import API from "../helpers/api";
import LocationField from "../components/LocationField";

import "../css/HomeContainer.css";

class HomeContainer extends React.Component {
  state = {
    meerbusch: { weather: null },
    ibiza: { weather: null },
    aurach: { weather: null }
  };

  componentDidMount() {
    API.weatherMeerbusch().then(resp =>
      this.setState({ meerbusch: { weather: resp } })
    );
    API.weatherIbiza().then(resp =>
      this.setState({ ibiza: { weather: resp } })
    );
    API.weatherAurach().then(resp =>
      this.setState({ aurach: { weather: resp } })
    );
  }

  render() {
    return (
      <div className="Home-Container">
        <div className="Home-Header"></div>
        <p className="Home-Headline">Traum Häuser</p>
        <LocationField city="Meerbusch" weatherInfo={this.state.meerbusch} />
        <LocationField city="Ibiza" weatherInfo={this.state.ibiza} />
        <LocationField city="Aurach" weatherInfo={this.state.aurach} />
        <div className="Placeholder"></div>
        <div className="Home-Footer"></div>
      </div>
    );
  }
}

export default HomeContainer;

import React from "react";
import API from "../helpers/api";
import LocationField from "../components/LocationField";
import DetailedInfoField from "../components/DetailedInfoField";

import "../css/HomeContainer.css";

class HomeContainer extends React.Component {
  state = {
    meerbusch: { weather: null },
    ibiza: { weather: null },
    aurach: { weather: null },
    infoField: false,
    infoFieldObj: {}
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

  weatherInfoFieldOnClick = (infoObj) =>  {
    // if(this.state.infoField)
    // this.setState({infoField: false, infoFieldObj: {}})
    // else{
      this.setState({infoField: true, infoFieldObj: infoObj})
    // }
  }

  render() {
    return (
      <div className="Home-Container">
        <div className="Home-Header"></div>
        <p className="Home-Headline">Traum Häuser</p>
        <LocationField city="Meerbusch" weatherInfo={this.state.meerbusch} click={this.weatherInfoFieldOnClick}/>
        <LocationField city="Ibiza" weatherInfo={this.state.ibiza} click={this.weatherInfoFieldOnClick}/>
        <LocationField city="Aurach" weatherInfo={this.state.aurach} click={this.weatherInfoFieldOnClick}/>
        {this.state.infoField ? <DetailedInfoField weatherInfoObj={this.state.infoFieldObj}/> : null}
        <div className="Placeholder"></div>
        <div className="Home-Footer"></div>
      </div>
    );
  }
}

export default HomeContainer;

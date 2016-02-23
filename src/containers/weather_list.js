import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name       = cityData.city.name;
    const temps      = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures  = cityData.list.map(weather => weather.main.pressure);
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon}/>
        </td>
        <td>
          <Chart color="red" data={temps} units="K"/>
        </td>
        <td>
          <Chart color="blue" data={pressures} units="hPA"/>
        </td>
        <td>
          <Chart color="green" data={humidities} units="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);

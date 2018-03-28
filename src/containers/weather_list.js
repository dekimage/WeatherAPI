import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  /*constructor(props) {
    super(props);
    this.state = {}*/
renderWeather(cityData) {
  const name = cityData.city.name;
  const temps = cityData.list.map(weather => weather.main.temp);
  const pressures = cityData.list.map(weather => weather.main.pressure);
  const humidities = cityData.list.map(weather => weather.main.humidity);
  //const lon = cityData.city.coord.lon;
  //const lat = cityData.city.coord.lat;
//ES16 this two up can be done as this:
  const {lat, lon} = cityData.city.coord;
  console.log(temps);
  return(
    <tr key={name}>
      <td><GoogleMap lat={lat} lon={lon}/></td>
      <td><Chart data={temps} color="orange" units="K"/></td>
      <td><Chart data={pressures} color="green" units="hPa"/></td>
      <td><Chart data={humidities} color="yellow" units="%"/></td>
    </tr>
  );
}
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature (K)</th>
            <th> Pressure (hPa)</th>
            <th> Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
function mapStateToProps({weather}) {
  /*instead of mapstateprops(state) ES16 we can do like this it means
  const weather = state.weather -> (return{weather:state.weather})
  one more shortcut {weather: weather} = {weather}*/
  return {weather};
}
export default connect(mapStateToProps)(WeatherList);
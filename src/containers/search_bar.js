import { connect } from 'react-redux';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

 class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term:''};
    //binding context to assign this with adjusted method
    //always when you call a callback fun from render part(jsx) up here,
    // you must bind this to this context
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }
  onFormSubmit(event) {
    event.preventDefault();
    //we need to fetch data
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="get a 5-day forcast in your favorite city"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}/>
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
//when we dont need state but only dispatch we want, then we set null as first argument just to ignore state
export default connect(null, mapDispatchToProps)(SearchBar);

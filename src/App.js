import React, { Component } from 'react';
import './App.css';
// react date imports
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class App extends Component {
  state = {
    location: '',
    age: '',
    startDate: moment(),
    endDate: null,
    focusedInput: null,
  }
  handleSubmit = () => {
    console.log(this.state);
  }
  handleChange = propertyName => (event) => {
    // console.log(this.state)
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <h2>Kids Play Central</h2>
        </header>
        <div>
          <h2>Search Form</h2>
          <pre>
            {JSON.stringify(this.state)}
          </pre>
          <label>
            Location:
              <input
              type="text"
              placeholder="Location"
              onChange={this.handleChange('location')}
            />
          </label>
          <br />
          <label>
            Age:
              <input
              type="number"
              placeholder="Age"
              onChange={this.handleChange('age')}
            />
          </label>
          <br />
          <label>
            {/* Start Date:
              <input
              type="date"
              placeholder="Start Date"
              onChange={this.handleChange('startDate')}
            />
          </label>
          <label>
            End Date:
              <input
              type="date"
              placeholder="End Date"
              onChange={this.handleChange('endDate')}
            /> */}
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="startDate" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="endDate" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
          </label>
          <br />
          <label>
            <button onClick={this.handleSubmit}>Submit</button>
          </label>
        </div>
        <div>
          <h2>Search Results</h2>
        </div>
      </div>
    );
  }
}

export default App;

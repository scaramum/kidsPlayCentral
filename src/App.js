import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    location: '',
    age: '',
    startDate: '',
    endDate: ''
  }
  handleSubmit = () => {
    console.log(this.state);
  }
  handleChange = propertyName => (event) => {
    console.log(this.state)
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

        <div className="form">
          <h2>Search Form</h2>
          {/* <pre>
            {JSON.stringify(this.state)}
          </pre> */}

          <label>
            Location:
          </label>
          <input
            type="text"
            placeholder="Location"
            onChange={this.handleChange('location')}
          />
          <br />

          <div className="div-block">
            <label className="inline-text">
              Start Date:
            </label>
            <input
              type="date"
              placeholder="Start Date"
              onChange={this.handleChange('startDate')}
              className="input-date"
            />
          </div>

          <div className="div-block">
            <label className="inline-text">
              End Date:
            </label>
            <input
              type="date"
              placeholder="End Date"
              onChange={this.handleChange('endDate')}
              className="input-date"
            />
          </div>
          <br />

          <div className="div-block">
            <label className="inline-text">
              Age:
          </label>
            <input
              type="number"
              placeholder="Age"
              onChange={this.handleChange('age')}
            />
          </div>
          <br />

          <div className="div-block">
            <button
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          <h2>Search Results</h2>
        </div>
      </div>
    );
  }
}

export default App;

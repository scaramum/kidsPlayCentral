import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    location: '',
    age: '',
    startDate: new Date().toLocaleString(),
    endDate: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
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
            Start Date:
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

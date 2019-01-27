import React, { Component } from 'react';
import './App.css';

const indexName = "kids-central-activities";
const docType = 'activity';

class App extends Component {
  constructor(props) {
    super(props);
    var elasticsearch = require('elasticsearch');
    this.state = {
      client: new elasticsearch.Client(),
      activity: {
        location: '',
        age: '',
        startDate: '',
        endDate: '',
        type: 'Art',
      },
      resp: null,
    }
  }
  handleSubmit = () => {
    console.log(this.state.activity);
    this.performQuery();
  }
  handleChange = propertyName => (event) => {
    console.log(this.state.activity)
    this.setState({
      activity: {
        ...this.state.activity,
        [propertyName]: event.target.value,
      }
    });
  }
  performQuery = () => {
    this.state.client.search({
      index: indexName,
      type: docType,
      body: {
        query: {
          match: {
            "location": this.state.activity.location
          }
        }
      }
    }).then(function (resp) {
      console.log(resp);
      this.setState({
        resp
      })
    }, function (err) {
      console.trace(err.message);
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
              className="input-age"
            />
          </div>

          <div className="div-block">
            <label className="inline-text">
              Activity Type:
            </label>
            <select onChange={this.handleChange('type')}>
              <option value={'Art'}>Art</option>
              <option value={'Language'}>Language</option>
              <option value={'Outdoors'}>Outdoors</option>
              <option value={'Sports'}>Sports</option>
              <option value={'STEM'}>STEM</option>
            </select>
          </div>

          <br />
          <button
            onClick={this.handleSubmit}
          >
            Search
          </button>
        </div>
        <div>
          <h2>Search Results</h2>
          {this.state.response}
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import ResultList from './ResultList/ResultList';
import DetailedPage from './DetailedPage';
import { HashRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChild } from '@fortawesome/free-solid-svg-icons'
library.add(faChild)

class App extends Component {
  constructor(props) {
    super(props);
    var elasticsearch = require('elasticsearch');
    this.state = {
      client: new elasticsearch.Client(),
      location: '',
      age: '',
      startDate: '',
      endDate: '',
      type: 'camp',
      resp: null
    }
  }
  handleSubmit = () => {
    // console.log(this.state);
    this.performQuery();
  }
  handleChange = propertyName => (event) => {
    // console.log(this.state)
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  performQuery = () => {
    var shouldConditions = []
    if (this.state.location)
      shouldConditions.push({ "match": { "location": this.state.location } })
    if (this.state.age) {
      shouldConditions.push({ "range": { "minAge": { "lte": this.state.age } } })
      shouldConditions.push({ "range": { "maxAge": { "gte": this.state.age } } })
    }
    if (this.startDate && this.state.type !== 'daycare')
      shouldConditions.push({ "range": { "activityStartDate": { "lte": this.state.startDate } } })
    if (this.endDate && this.state.type !== 'daycare')
      shouldConditions.push({ "range": { "activityEndDate": { "gte": this.state.endDate } } })

    var innerQuery = {
      "query": {
        "bool": {
          "must": shouldConditions
        }
      }
    }

    this.state.client.search({
      index: this.state.type,
      type: this.state.type,
      body: innerQuery
    }).then((resp) => {
      // console.log(resp);
      this.setState({
        resp: resp
      })
    }, function (err) {
      console.trace(err.message);
    });
  }
  handleReset = () => {
    // window.location.reload();
    this.setState({
      resp: null,
    });
  }
  render() {
    return (
      <Router>
      <div className="App">
          <header>
            <h1>
              {/* <Link 
                to="/"
                className="link"
              > */}
              <button
                onClick={this.handleReset}
                className="link"
              >
              <FontAwesomeIcon 
                icon="child" 
                color="#FA001D"
              /> 
              {' '} 
              Ready Play
              </button>
              {/* </Link> */}
            </h1>
            <img src="https://pli.io/2OVjSU.png" alt="header img" className="img-header" />
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
              placeholder="Enter a zip code"
              onChange={this.handleChange('location')}
            />
            <br />

            <div className="div-block-left">
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

            <div className="div-block-right">
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

            <div className="div-block-left">
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

            <div className="div-block-right">
              <label className="inline-text">
                Activity Type:
              </label>
              <select onChange={this.handleChange('type')}>
                <option value={'camp'}>Camp</option>
                <option value={'daycare'}>Day Care</option>
                <option value={'activity'}>Activity</option>
              </select>
            </div>

            <br />
            <button
              onClick={this.handleSubmit}
              className="search-button"
            >
              Search
          </button>
          </div>
          <ResultList resp={this.state.resp} />
          <Route 
            exact path="/learn-more" 
            resp={this.state.resp}
            component={DetailedPage}
          />
      </div>
      </Router>
    );
  }
}

export default App;
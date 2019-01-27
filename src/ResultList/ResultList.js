import React, { Component } from 'react';

class App extends Component {
  handleDetail = (id) => {
    console.log('in handleDetail', id);
  }
  render() {
    if(!this.props.resp) {
      return null;
    }
    console.log('this is the result', this.props.resp.hits.hits);
    return (
      <div className="results">
        <h2>Search Results</h2>
        {this.props.resp.hits.hits.map( result => {
          return (
            <div className="result-detail-box"
              key={result._id}
            >
              <h3>{result._source.activity}</h3>
              <img 
                src={result._source.img}
                alt={result._source.activity}
              />
              <span>{result._source.provider}</span>
              <p>Start Date: {result._source.activityStartDate}</p>
              <p>End Date: {result._source.activityEndDate}</p>
              <p>Location: {result._source.location}</p>
              <p>Cost: ${result._source.cost}</p>
              <p>{result._source.description}</p>
              <p>
                <button onClick={() => this.handleDetail(result._id)}>
                  Learn More
                </button>
              </p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
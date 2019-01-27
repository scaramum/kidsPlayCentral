import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ResultList extends Component {
  handleDetail = (id) => {
    console.log('in handleDetail', id);
    this.props.history.push(`/${id}`);
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
              <span>{result._source.provider}</span>
              <h3>{result._source.activity}</h3>
              <img 
                src={result._source.img}
                alt={result._source.activity}
              />
              {result._type === 'daycare'
                ? 
                <>
                  <span>
                    Days Available: {result._source.daysAvaliable}
                  </span>
                </>
                :
                <>
                  <span>
                    Start Date: {result._source.activityStartDate}
                  </span>
                  <span>
                    End Date: {result._source.activityEndDate}
                  </span>
                </>
              }
              {/* <p>Location: {result._source.location}</p> */}
              <span>Cost: ${result._source.cost}</span>
              <p>{result._source.description}</p>
              <div className="button-div">
                <button 
                  onClick={() => this.handleDetail(result._id)}
                  className="learn-button"
                >
                  Learn More
                </button>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default withRouter(ResultList);
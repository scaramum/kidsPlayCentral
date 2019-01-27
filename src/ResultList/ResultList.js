import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ResultList extends Component {
  handleDetail = (id) => {
    // console.log('in handleDetail', id);
    this.props.history.push(`/learn-more`);
  }
  render() {
    if(!this.props.resp) {
      return null;
    } 
    // console.log('this is the result', this.props.resp.hits.hits);
    return (
      <div className="results">
        <h2>Search Results</h2>
        {this.props.resp.hits.hits.map( result => {
          return (
            <div className="result-detail-box"
              key={result._id}
            > 
              <div className="result-img-div">
              <img
                src={result._source.img}
                alt={result._source.activity}
                className="result-img"
              />
              </div>
              <div className="result-description-div">
                <span>{result._source.provider}</span>
                <h3>{result._source.activity}</h3>
              {result._type === 'daycare'
                ? 
                <>
                  <span className="detail-span">
                    {result._source.daysAvaliable}
                  </span>
                </>
                :
                <>
                  <span className="detail-span">
                    {result._source.activityStartDate}
                  </span>
                  {/* <span className="detail-span">
                    End Date: {result._source.activityEndDate}
                  </span> */}
                </>
              }
              <span className="detail-span">${result._source.cost}</span>
              <span className="detail-span">{result._source.location}</span>
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
            </div>
          )
        })}
      </div>
    );
  }
}

export default withRouter(ResultList);
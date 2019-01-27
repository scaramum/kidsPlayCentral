import React, { Component } from 'react';

class DetailedPage extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     activity: '',
    //     description: '',
    //     provider: '',
    //     location: '',
    //     ageRange: '',
    //     amenities: '',
    //     category: '',
    //     cost: '',
    //     startDate: '',
    //     endDate: '',
    //     registrationURL: '',
    //     registrationStartDate: '',
    //     type: ''
    //   }
    // }
    render() {
      console.log('data', this.props.resp);
      if (!this.props.resp) {
        return null;
      } 
      return (
        <div className="DetailPage">
          <h2>Detail Page</h2>
          
        </div>
      );
    }
  }
  
  export default DetailedPage;
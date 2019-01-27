import React, { Component } from 'react';
import './App.css';

class DetailedPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activity: '',
        description: '',
        provider: '',
        location: '',
        ageRange: '',
        amenities: '',
        category: '',
        cost: '',
        startDate: '',
        endDate: '',
        registrationURL: '',
        registrationStartDate: '',
        type: 'camp'
      }
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
        <div className="DetailPage">
          <header>
            <h3>this.state.provider</h3>
            <h2>this.state.activity</h2>
          </header>
  
          <div className="details">

          </div>
        </div>
      );
    }
  }
  
  export default DetailedPage;
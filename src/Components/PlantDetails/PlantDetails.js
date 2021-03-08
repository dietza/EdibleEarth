import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './PlantDetails.css';
import backArrow from '../../assets/return.png';
import { fetchPlantDetails } from '../../fetchAPI';

class PlantDetails extends Component {
  constructor({ selectedPlantID, switchView }) {
    super({ selectedPlantID, switchView })
    this.state = {
      selectedPlantID: selectedPlantID,
      plantToDisplay: {},
      isLoading: true,
      error: ""
    }
  }

  clearID = () => {
    this.props.switchView(null)
  }

  render() {
    return (
      <>

      <section>

        {this.state.error !== "" && 
        <>
          <h2 className="error-message">{this.state.error}</h2>
        </>}

        {this.state.isLoading && this.state.error === "" && 
        <h1 className="loading">Loading...</h1>}

        {!this.state.isLoading && 
        <section>
          <h1>Plant info about</h1>
          {/* <h1>Plant info about {`${plantToDisplay.common_name}`}</h1> */}
        </section>}
        
        <Link to='/' className='back-to-home-btn'>
          <button className='back-to-home-btn' onClick={this.clearID}>
          <img src={backArrow} alt='back arrow icon'
          className="return-arrow-icon"/>
          {'Home View'}
          </button>
        </Link>
      </section>

      </>
    )
  }
}

// PlantDetails.propTypes = {

// }

export default PlantDetails;
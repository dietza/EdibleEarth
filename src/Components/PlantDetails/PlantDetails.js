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
      error: "",
      isEdible: false
    }
  }

  componentDidMount() {
    fetchPlantDetails(this.state.selectedPlantID)
      .then(plant => {
        this.setState({ 
          plantToDisplay: plant.data, 
          isLoading: false,
          isEdible: plant.data["main_species"].edible
        })
      })

      .then(() => console.log('plant details set in fetch >>>>', this.state.plantToDisplay))
      .then(() => console.log('EDIBLE details set in fetch >>>>', this.state.isEdible))

      .catch(error => this.setState({ error: `Uh oh! There was an error - 
      ${error}. Please try again!` }))
  }

  clearID = () => {
    this.props.switchView(null)
  }

  render() {
    const plantCommonName = this.state.plantToDisplay.common_name;
    const scientificName = this.state.plantToDisplay.scientific_name;
    const imageSrc = this.state.plantToDisplay.image_url;

    return (
      <>
        <Link to='/' className='back-to-home-btn'>
          <button className='back-to-home-btn' onClick={this.clearID}>
          <img src={backArrow} alt='back arrow icon'
          className="return-arrow-icon"/>
          {'Home View'}
          </button>
        </Link>

      <section>

        {this.state.error !== "" && 
        <>
          <h2 className="error-message">{this.state.error}</h2>
        </>}

        {this.state.isLoading && this.state.error === "" && 
        <h1 className="loading">Loading...</h1>}

        {!this.state.isLoading && 
        <section className="plant-details-view">
          <section className="details__plant-safety">
            {this.state.isEdible &&
            <>
            <h2 className="details__edible">Yes, it is considered SAFE to eat this plant.</h2>
            </>
            }

            {!this.state.isEdible &&
            <>
            <h2 className="details__not-edible">NO, it is NOT considered SAFE to eat this plant.</h2>
            <p>We may not have all the data, so we encourage you to do further research through trusted sources.</p>
            </>
            }
          </section>          

          <section className="details__plant-specs">

            <h2 className="details__plant-common-name">{`${plantCommonName}`}</h2>
            <p className="details__plant-scientific-name">{`${scientificName}`}</p>
          </section>
          <img src={ imageSrc } 
          alt={`${scientificName} known as ${plantCommonName}`}
          className="details__plant-card-image"
          />
        </section>
        
        }
        
      </section>

      </>
    )
  }
}

// PlantDetails.propTypes = {

// }

export default PlantDetails;
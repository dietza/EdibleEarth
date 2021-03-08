import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlantCard from '../PlantCard/PlantCard';
import './Container.css';

const Container = ({ ediblePlants }) => {

  console.log('PLANTS in CONTAINER >>>>>>>', ediblePlants)

  let plantsToDisplay;

  const createPlantCards = (plants) => {

    plantsToDisplay = plants.map(plant => {

      return (

        <h2>Testing Container</h2>

        // <Link 
        //   to={`/${plant.id}`} 
        //   key={plant.id} 
        // >
        //   <PlantCard 
        //     info={plant}
        //   />
        // </Link>
      )
    })
  }

  createPlantCards(ediblePlants);

  return (
    <section className='plants-container'>
      {plantsToDisplay}
    </section>
  )
}

// Container.propTypes = {

// }

export default Container;
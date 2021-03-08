import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlantCard from '../PlantCard/PlantCard';
import './Container.css';

const Container = ({ allPlants }) => {

  console.log('PLANTS in CONTAINER >>>>>>>', allPlants)

  let plantsToDisplay;

  const createPlantCards = (plants) => {

    plantsToDisplay = plants.map(plant => {

      return (
        <>
        <Link 
          to={`/${plant.id}`} 
          key={plant.id} 
          >
          <PlantCard 
            info={plant}
          />
        </Link>
        </>
      )
    })
  }

  createPlantCards(allPlants);

  return (
    <section className='plants-container'>
      {plantsToDisplay}
    </section>
  )
}

// Container.propTypes = {

// }

export default Container;
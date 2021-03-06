import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlantCard from '../PlantCard/PlantCard';
import './Container.css';

const Container = ({ allPlants, filteredPlants }) => {
  let plantsToDisplay;

  const createPlantCards = (plants) => {
    plantsToDisplay = plants.map(plant => {

      return (
        <>
        <Link 
          to={`/${plant.id}`} 
          key={plant.id}
          id={plant.id}
          >
          <PlantCard 
            info={plant}
          />
        </Link>
        </>
      )
    })
  }

  if (filteredPlants.length !== 0) {
    createPlantCards(filteredPlants)
  } else {
    createPlantCards(allPlants)
  }

  return (
    <section className='plants-container'>
      {plantsToDisplay}
    </section>
  )
}

Container.propTypes = {
  allPlants: PropTypes.arrayOf(PropTypes.object),
  filteredPlants: PropTypes.arrayOf(PropTypes.object)
}

export default Container;
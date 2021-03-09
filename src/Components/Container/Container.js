import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlantCard from '../PlantCard/PlantCard';
import './Container.css';
import defaultImg from '../../assets/vert-background.jpg';

const Container = ({ allPlants, filteredPlants }) => {

  let plantsToDisplay;
  const defaultImgSrc = defaultImg;

  const createPlantCards = (plants) => {

    plantsToDisplay = plants.map(plant => {
      const brokenLinks = [
        'https://bs.floristic.org/image/o/d2747c12a135a00ff8e6d8af86acbec3c6f8248d'
      ];

      if (brokenLinks.includes(plant.image_url)) {
        plant.image_url = defaultImgSrc;
      }

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
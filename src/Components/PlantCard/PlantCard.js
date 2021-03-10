import React from 'react';
import PropTypes from 'prop-types';
import './PlantCard.css';

const PlantCard = ({ info, switchView }) => {
  const plantCommonName = info.common_name;
  const scientificName = info.scientific_name;
  const imageSrc = info.image_url;

  // const getPlantID = () => {
  //   const plantID = info.id
  //   switchView(plantID)
  // }

  return (
    <article className='plant-card'  id={info.id} name={`${plantCommonName}-card`} aria-label={`${plantCommonName}-card`}>
      <section className="card-details">
        <h2 className="plant-common-name">{`${plantCommonName}`}</h2>
        <p className="plant-scientific-name">{`${scientificName}`}</p>
      </section>
      <img src={ imageSrc } 
      alt={`${scientificName} known as ${plantCommonName}`}
      className="plant-card-image"
      />
    </article>
  )
}

PlantCard.propTypes = {
  info: PropTypes.object,
  switchView: PropTypes.func
}

export default PlantCard;
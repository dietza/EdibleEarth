import React from 'react';
// import PropTypes from 'prop-types';
import './PlantCard.css';

const PlantCard = ({ info }) => {
  const plantCommonName = info.common_name;
  const scientificName = info.scientific_name;

  return (
    <article className='plant-card'>
      <section className="card-details">
        <h2 className="plant-common-name">{`${plantCommonName}`}</h2>
        <p className="plant-scientific-name">{`${scientificName}`}</p>
      </section>
      <img src={ info.image_url } 
      alt={`${scientificName} known as ${plantCommonName}`}
      className="plant-card-image"/>
    </article>
  )
}

// PlantCard.propTypes = {

// }

export default PlantCard;
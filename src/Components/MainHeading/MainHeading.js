import React from 'react';
import { Route }from 'react-router-dom';
// import PropTypes from 'prop-types';
import './MainHeading.css';
import SearchBar from '../SearchBar/SearchBar';

const MainHeading = ({ filterPlants }) => {
  return (
    <header className="heading">
    <h1 className="heading-title">EdibleEarth</h1>
    <h2 className="heading-subtitle">Can I eat this plant?</h2>
    <Route exact path='/' 
      render={ () => { 
        return <SearchBar filterPlants={ filterPlants }/>
      }}/>
    </header>
  )
}

// MainHeading.propTypes = {

// }

export default MainHeading;
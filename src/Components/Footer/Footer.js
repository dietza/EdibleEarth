import React from 'react';
// import PropTypes from 'prop-types';
import './Footer.css';
import forwardArrow from '../../assets/right-arrow.png';

const Footer = ({ updatePage }) => {

  return (
    <footer className="footer">
      <button 
        onClick={updatePage}> Next Page
        <img src={forwardArrow} alt='right arrow icon'
          className="right-arrow-icon"/>
      </button>
    </footer>
  )
}

// Footer.propTypes = {

// }

export default Footer;
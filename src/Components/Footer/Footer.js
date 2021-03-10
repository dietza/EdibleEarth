import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Footer.css';
import backArrow from '../../assets/return.png';
import forwardArrow from '../../assets/right-arrow.png';

const Footer = ({ updatePage, resetPage, switchView, pageNum }) => {

  const returnToPreviousPage = () => {
    switchView(null)
    resetPage()
  }

  return (
    <footer className="footer">    
      <Link to='/'>
        <button className='details__back-button' onClick={returnToPreviousPage}>
        <img src={backArrow} alt='back arrow icon'
        className="return-arrow-icon"/>
        {'Previous Page'}
        </button>
      </Link>
      {/* <Link to={`/${(pageNum + 1)}`}> */}
        <button className='details__next-button'
          onClick={updatePage}>
          {'Next Page'}
          <img src={forwardArrow} alt='right arrow icon'
            className="right-arrow-icon"/>
        </button>
      {/* </Link> */}
    </footer>
  )
}

Footer.propTypes = {
  updatePage: PropTypes.func,
  resetPage: PropTypes.func,
  switchView: PropTypes.func
}

export default Footer;
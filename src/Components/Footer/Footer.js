import React from 'react';
// import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ updatePage }) => {

  return (
    <footer className="footer">
      <button onClick={updatePage}> Next Page ⇢ </button>
    </footer>
  )
}

// Footer.propTypes = {

// }

export default Footer;
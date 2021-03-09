import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  constructor({ filterPlants }) {
    super({ filterPlants })
    this.state = {
      searchInput: '',
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    })
    this.props.filterPlants(event.target.value)
  }

  render = () => {
    return (
      <form role="search" autoComplete="off">
      <input
        className="search-input"
        type="text"
        placeholder="Search plants by common name..."
        name="plants-search"
        aria-label="plants-search-input"
        value={this.state.searchInput}
        onChange={(event) => this.handleSearch(event)}
      />
    </form>
    )
  }
}

SearchBar.propTypes = {
  filterPlants: PropTypes.func.isRequired
}

export default SearchBar;
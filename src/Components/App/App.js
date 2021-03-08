import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import MainHeading from '../MainHeading/MainHeading';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import PlantCard from '../PlantCard/PlantCard';
import PlantDetails from '../PlantDetails/PlantDetails';
import './App.css';
import { fetchAllPlantsByPage } from '../../fetchAPI';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPlants: [1,2,3],
      ediblePlants: [],
      selectedPlantID: null,
      isLoading: true,
      error: ''
    }
  }


  componentDidMount = () => {
    fetchAllPlantsByPage(1)
      .then(plants => console.log('FETCHED PLANTS DATA', plants.data))
      .then(plants => this.setState({ allPlants: plants.data, isLoading: false }))
      .catch(error => this.setState({ error: `Uh oh! There was an error - 
      ${error}. Please try again!` }))
  }



  render = () => {
    return (
      <div className="App">
        
      <MainHeading />

      <Container allPlants={ this.state.allPlants }/>

      <Footer />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainHeading from '../MainHeading/MainHeading';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import PlantCard from '../PlantCard/PlantCard';
import PlantDetails from '../PlantDetails/PlantDetails';
import DetailsView from '../DetailsView/DetailsView';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPlants: [],
      ediblePlants: [],
      selectedPlantID: null,
      isLoading: true,
      error: ''
    }
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

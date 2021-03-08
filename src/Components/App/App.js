import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
      allPlants: [],
      ediblePlants: [],
      selectedPlantID: null,
      isLoading: true,
      error: ''
    }
  }


  componentDidMount = () => {
    fetchAllPlantsByPage(1)
      .then(plants => this.setState({ allPlants: plants.data, isLoading: false }))
      .then(() => console.log('FETCHED PLANTS DATA', this.state.allPlants))
      .catch(error => this.setState({ error: `Uh oh! There was an error - 
      ${error}. Please try again!` }))
  }



  render = () => {
    return (
      <main>
        
      <MainHeading />

      {this.state.isLoading && !this.state.error &&
      <h2 className="loading">Loading...</h2>}

​        <Switch>
​          <Route exact path='/'
           render = {() => {
             return (!this.isLoading && this.state.error !== "") ? 
               (<>
​                  <h3 className="error-message">{this.state.error}</h3>
​                </>) :
               (<Container 
               allPlants={this.state.allPlants}/>)
             }}
           />
​          <Route path='/:id' 
           render = {( {match} ) => { 
             return (
             <PlantDetails />
               )
           }}/>
​        </Switch>

      <Footer />

      </main>
    );
  }
}

export default App;

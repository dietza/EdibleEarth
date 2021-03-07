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

  render = () => {
    return (
      <div className="App">
        
      <MainHeading />

      {/* {this.state.isLoading && !this.state.error &&
        <h2 className="loading">Loading...</h2>} */}

        <Switch>

          <Route exact path='/'
            render = {() => {
              return this.state.error !== "" ? 
                (<>
                  <h2 className="error-message">{this.state.error}</h2>
                </>) :
                (<Container 
                ediblePlants={this.state.ediblePlants}
                isLoading={this.state.isLoading}/>)
              }}
            />

          <Route path='/:id' 
            render = {( {match} ) => { 
              return (
              <PlantDetails />
                )
            }}/>

        </Switch>

      <Footer />

      </div>
    );
  }
}

export default App;

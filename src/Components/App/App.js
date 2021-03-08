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
      pageNum: 1,
      allPlants: [],
      ediblePlants: [],
      filteredPlants: [],
      selectedPlantID: null,
      isLoading: true,
      error: ''
    }
  }

  componentDidMount = () => {
    this.fetchPlantsByPage();
  }

  fetchPlantsByPage = () => {
    let pageNum = this.state.pageNum;

    console.log('pageNum in fetch >>>>>', this.state.pageNum)

    return fetchAllPlantsByPage(pageNum)
      .then(plants => this.setState({ allPlants: plants.data, isLoading: false }))
      .catch(error => this.setState({ error: `Uh oh! There was an error - 
      ${error}. Please try again!` }))
  }
  
  updatePage = () => {
    let pageNum = this.state.pageNum;
    this.setState({
      pageNum: pageNum + 1
    })
    this.fetchPlantsByPage();
  }

  filterPlants = (searchTerm) => {
    const allPlants = this.state.allPlants;
    const filteredPlants = allPlants.filter(plant => {
      const searchCommonName = plant.common_name.toLowerCase()
      return searchCommonName.includes(searchTerm.toLowerCase())
    })

    this.setState({
      filteredPlants: filteredPlants,
    })
  }

  render = () => {
    return (
      <main>
        
      <MainHeading 
      filterPlants={ this.filterPlants }/>

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
               allPlants={this.state.allPlants}
               filteredPlants={this.state.filteredPlants}/>)
             }}
           />
​          <Route path='/:id' 
           render = {( {match} ) => { 
             return (
             <PlantDetails />
               )
           }}/>
​        </Switch>

      <Footer updatePage={ this.updatePage }/>

      </main>
    );
  }
}

export default App;

# EdibleEarth 🌿

**EdibleEarth** is an application designed to help users find out whether or not plants are safe to eat.


## Usage

Users can visit the site and view the collection of plants in the database, page by page. Users can use the search bar to look up plants by common name, or simply scroll through the plants, then use the `Next Page` and `Previous Page`navigation buttons to browse.

![813A19A6-08A5-4640-94E9-89F6145AE0FF_1_105_c](https://user-images.githubusercontent.com/64617223/110484963-63abda00-80a8-11eb-9ec7-eac91e9b55e7.jpeg)
![8AD4A92A-BF43-4739-BF3F-7AD07EACF722](https://user-images.githubusercontent.com/64617223/110484994-6d354200-80a8-11eb-88f7-8f5ab70f1358.jpeg)

Users can click on a plant to see find out whether it is edible or not. A new page should load with details about the selected plant, prominitely displaying whether it is considered safe to eat. After viewing the details for the selected plant, the user can navigate back by clicking the `Previous Page` button to get to the main view.

![F59946ED-9443-4FC6-A7C7-E5B70CA8D793_1_105_c](https://user-images.githubusercontent.com/64617223/110485367-c8ffcb00-80a8-11eb-9bb4-3167fb1f724e.jpeg)


## How to Install
**Follow instructions here to run the [BE server](https://github.com/dietza/EdibleEarth-express-serve/tree/main) locally**
1. `fork` this repository
2. `git clone` the repo through your command line
3. cd into the repository
4. Run `npm install`
5. Run `npm start` and view the dev server running on `localhost: 4002`

Testing can be accessed by running `npm start cypress`

## Planning
I used GitHub Pages for project management, that board can be found [here](https://github.com/dietza/EdibleEarth/projects/1)

## Data
Data used in this project was accessed from the [Trefle API](https://trefle.io/)

## Challenges
- The API I chose to use for this project offered a wealth of data, but some hurdles in accessing it. I chose to build out my own backend express server, but this is essentially still making calls to the external API and populating the data through that service. While this helped me avoid any issues with cors, and I did not run into call limits in working with the API, each GET request made to the database retrieves 20 plant data points per call. Functionality is incorporated through buttons to update the page forward and back, displaying the respective batch of fetched plants data. I believe that using `Pagination` through React would likely be a more elegant solution, and replacing the current methods with that cleaner functionality is a goal for future iterations.
- Further, the target data for the project was the boolean value stating whether each plant is edible or not. Because that specific data point was more deeply nested, the original MVP for this project was adjusted by the decision to make fewer API calls on the initial page load. While The plants are not currently filtered by their edible-status on the initial display, finding an efficient means to do so is another goal for future iterations. To balance this solution, the declaration of whether or not the selected plant is considered edible is prominently displayed as the top of the screen when viewing its details.

## Wins
- While `Pagination` is not yet incorporated, finding a workable solution to making the API calls by each page and updating that to display effectively felt like a successful answer to the challenge of the API's request settings.
- On change search functionality
- Basic Responsive Design

## Technologies Used
1. React
2. React Router
3. Cypress
4. FetchAPI
5. CSS

## Future Iterations
- incorporate React Pagination
- refactoring class components to use React Hooks 
- more immediate filtering to display edible plants on load
- further details displayed per plant pages, inc edible parts
- adding ability to save plants after viewing details
- link to medicinal uses

## Authors
This project was designed and implemented by [Allison Dietz](https://github.com/dietza)

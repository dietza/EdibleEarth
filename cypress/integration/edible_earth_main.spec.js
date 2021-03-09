describe('EdibleEarth main view', () => {

  const baseUrl = 'http://localhost:4002/'

  before(() => {
    cy
    .fixture('mockPlantainData.json')
    .then((mockPlantainData) => {
      cy.intercept('GET', 'http://localhost:4000/plants/1', {
        statusCode: 200,
        // delay: 100,
        body: mockPlantainData
      })
    })
    
    cy.visit(baseUrl)
  });

  it ('Should show a loading status until plant cards are created', () => {
    //uncomment the delay in intercept to see this test pass if loading too fast
    cy
      .get('.loading').should('contain', 'Loading')
      .should('be.visible')
  });

  it ('Should have the correct url for the main page on load', () => {
    cy
      .url().should('eq', `${baseUrl}`)
  });

  it ('Should show the site header when the main page is loaded', () => {
    cy
      .get('header .heading-title').should('contain', 'EdibleEarth') 
  });

  it ('Should show the site footer, containing a button to return to the previous page', () => {
    cy
      .get('footer').should('be.visible')
      .find('.details__back-button').should('contain', 'Previous Page')
  });

  it ('Should show the site footer, containing a button to advance to the next page', () => {
    cy
      .get('footer').should('be.visible')
      .find('.details__next-button').should('contain', 'Next Page')
  });

  it ('Should display the first page of cards on load', () => {
    cy
    .get('.plants-container')
    .find('a .plant-card').should('have.length', 20)
  });

  it ('Each plant card should display an image',  () => {
    cy
      .get('.plants-container')
      .find('.narrowleaf-plantain-card img').should('have.attr', 'src', 'https://bs.plantnet.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b')
  });

  it ('Each card image should have a descriptive alt tag',  () => {
    cy
      .get('.plants-container')
      .find('.narrowleaf-plantain-card img').should('have.attr', 'alt', 'Plantago lanceolata known as Narrowleaf plantain')
  });

  it ('Each plant card should display the plant\'s common name',  () => {
    cy
      .get('.plants-container')
      .find('.narrowleaf-plantain-card .card-details .plant-common-name').should('contain', 'Narrowleaf plantain')
  });

  it ('Each plant card should display the plant\'s scientific name',  () => {
    cy
      .get('.plants-container')
      .find('.narrowleaf-plantain-card .card-details .plant-scientific-name').should('contain', 'Plantago lanceolata')
  });

})
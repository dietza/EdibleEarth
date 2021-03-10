describe('EdibleEarth main view', () => {

  const baseUrl = 'http://localhost:4002/'

  beforeEach(() => {
    cy
    .fixture('mockStrawberryData.json')
    .then((mockStrawberryData) => {
      cy.intercept('GET', 'http://localhost:4000/plants/1', {
        statusCode: 200,
        delay: 100,
        body: mockStrawberryData
      })
    })
    
    cy.visit(baseUrl)
  });

  it ('Should show a loading status until plant cards are created', () => {
    cy
      .get('.loading').should('contain', 'Loading')
      .should('be.visible')
  });

  it ('Should have the correct url for the main page on load', () => {
    cy
      .url().should('eq', `${baseUrl}`)
  });

  

})
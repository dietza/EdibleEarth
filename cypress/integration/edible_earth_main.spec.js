describe('Rowdy Taters main page view', () => {

  const baseUrl = 'http://localhost:4002/'

  before(() => {
    cy
    .fixture('plantsData.json')
    .then((mockPlantsData) => {
      cy.intercept('GET', 'http://localhost:4000/plants/1', {
        statusCode: 200,
        body: mockPlantsData
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
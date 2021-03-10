describe('EdibleEarth main view', () => {

  const baseUrl = 'http://localhost:4002/'

  beforeEach(() => {
    cy
      .fixture('mockPlantainData.json')
      .then((mockPlantainData) => {
        cy.intercept('GET', 'http://localhost:4000/plants/1', {
          statusCode: 200,
          delay: 100,
          body: mockPlantainData
        })
    })

    cy
      .fixture('mockStrawberryData.json')
      .then((mockStrawberryData) => {
        cy.intercept('GET', 'http://localhost:4000/plants/2', {
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

  it ('Should be able to view the next page of plants by clicking `Next Page`', () => {
    cy
      .get('footer')
      .find('.details__next-button').click()
      .get('footer')
      .find('.details__next-button').click()
      // This shouldn't need to be double-clicked.
      // This is a current bug and tests should be updated once squashed.

      .get('.plants-container')
      .find('a .plant-card').should('have.length', 20)

      .get('.plants-container')
      .get('#137615')
      .find('.plant-card .card-details .plant-common-name').should('contain', 'Woodland strawberry')
  });

  it ('Should route to the appropriate details page on card click', () => {
    cy
      .get('footer')
      .find('.details__next-button').click()
      .get('footer')
      .find('.details__next-button').click()

      .get('.plants-container')
      .get('#137615').click()

      .url().should('eq', `${baseUrl}137615`)

      .get('.plant-details-view .details__plant-specs')
      .find('.details__plant-common-name').should('contain', 'woodland strawberry')

      .get('.plant-details-view .details__plant-specs')
      .find('.details__plant-scientific-name').should('contain', 'Fragaria vesca')

      .get('.plant-details-view .details__plant-safety')
      .find('.details__not-edible').should('contain', 'NO, it is NOT considered SAFE to eat this plant.')

      .get('footer')
      .find('.details__back-button').click()
  });

})
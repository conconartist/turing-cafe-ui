describe('Main Display', () => {
    const mainUrl = 'http://localhost:3000';

    beforeEach(() => {
        cy.visit(mainUrl);
    });
    it('should greet the user with the title of the page', () => {
        cy
        .get('h1').contains('Turing Cafe Reservations')
    })
    it('should be able to visit the main page and see current reservations', () => {
        cy
        .get('.reservations-grid').should('be.visible')
        .get('.res-card').should('be.visible')
    })
    it('should display a form to submit a reservation', () => {
        cy
        .get('.reservation-form').should('be.visible')
    })
    it('should display reservations with a name, date, time, and number of guests', () => {
        cy
        .get('.res-card:first').within(() => {
            cy
            .get('.res-name').contains('Christie')
            .get('.date').contains('12/29')
            .get('.time').contains('7:00 pm')
            .get('.number').contains('12')
        })
    })
    it('should submit a reservation when you enter inputs in the form', () => {
        cy
        .get('.name-input').type('Connie')
        .get('.date-input').type('07/17')
        .get('.time-input').type('5:00')
        .get('.number-input').type('2')
        .get('.reserve-button').click()
        .get('.res-card:last').within(() => {
            cy
            .get('.res-name').contains('Connie')
            .get('.date').contains('07/17')
            .get('.time').contains('5:00 pm')
            .get('.number').contains('2')
        })    
    })
})
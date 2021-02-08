describe('Sign in', () => {
    it('Visits Conduit', () => {
      cy.visit('https://react-redux.realworld.io/#/login')
      cy.get(':nth-child(1) > .form-control').type('qwertyuio123098@gmail.com')
      cy.get(':nth-child(2) > .form-control').type('Mytestpassword123')

      cy.get('.btn').click()

      cy.get('.navbar').contains('My_test_username').should('exist')
    })
  })

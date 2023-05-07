Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    cy.get('#Email').clear()
    cy.get('#Email').type(usuario)
    cy.get('#Password').clear()
    cy.get('#Password').type(senha)
    cy.get('button[type="submit"]').click()
    
})
Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type(usuario)
    cy.get('[name="password"]').type(senha)
    cy.get('button[type="submit"]').click()
    cy.title().should('eq', 'OrangeHRM')

})
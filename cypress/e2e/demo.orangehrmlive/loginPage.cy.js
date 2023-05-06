
///<reference types="cypress"/>
import '../../support/commands.js'

describe('Tela de login', () => {

    before(() => {
        cy.login('Admin', 'admin123')
    })

    it('Logout', () => {

        cy.once('uncaught:exception', () => false);
        cy.get('p:contains("Paul Collings")').click()
        cy.get('a[href*="/web/index.php/auth/logout"]').click()
        cy.contains('Username')

    })

    it('Usuário inválido', () => {

        cy.login('Admi', 'admin123')
        cy.contains('Invalid credential')

    })

    it('Senha inválida', () => {

        cy.login('Admin', 'admin12')
        cy.contains('Invalid credential')

    })
})

describe('Tela de Admin', () => {

    before(() => {
        cy.login('Admin', 'admin123')
    })

//TODO Terminar o cadastro de usuário Admin
    it('Add usuário Admin', () => {

        cy.get('span').contains('Admin').click()
        cy.contains('System Users').should('be.visible')
        cy.get('button').contains(' Add ').click()
        cy.contains('Add User').should('be.visible')
    })
})
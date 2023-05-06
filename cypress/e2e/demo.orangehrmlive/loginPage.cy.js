
///<reference types="cypress"/>
import '../../support/commands.js'

describe('Tela de login', () => {

    before(() => {
        cy.login('Admin', 'admin123')
    })

    it('Acessar página de login com sucesso', () => {

        cy.title().should('eq', 'OrangeHRM')
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
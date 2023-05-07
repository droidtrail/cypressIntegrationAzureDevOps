
///<reference types="cypress"/>
import '../../support/commands.js'

describe('Tela de login', () => {

    before(() => {
        cy.login('admin@yourstore.com', 'admin')
    })

    it('Logout', () => {
        cy.get('a[href*="/logout"]').click()
        cy.contains('Welcome, please sign in!')

    })

    it('Usuário inválido', () => {

        cy.login('admin@yourstore', 'admin')
        cy.contains('Login was unsuccessful. Please correct the errors and try again.No customer account found')

    })

    it('Senha inválida', () => {

        cy.login('admin@yourstore.com', 'adm')
        cy.contains('Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect')

    })
})

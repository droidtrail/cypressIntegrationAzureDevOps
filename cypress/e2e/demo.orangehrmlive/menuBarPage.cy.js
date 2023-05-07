
///<reference types="cypress"/>
import '../../support/commands.js'

describe('Validar menu bar', () => {

    beforeEach(() => {
        cy.login('admin@yourstore.com', 'admin')
    })

    it('Acessar Dashboard', () => {
        cy.get('p').contains('Dashboard').click()
        cy.contains('NopCommerce News')
    })

    it('Acessar Catalog / Products', () => {
        cy.get('p').contains('Catalog').click()
        cy.get('p').contains(' Products').click()
        cy.contains('Add new')
        
    })
})
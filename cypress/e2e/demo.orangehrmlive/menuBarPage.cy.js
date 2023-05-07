
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
        cy.get('label[for="SearchProductName"]').should($el => expect($el.text().trim()).to.equal('Product name'));
    })

    it('Acessar Catalog / Manufacturers', () => {
        cy.get('p').contains('Catalog').click()
        cy.get('p').contains('Manufacturers').click()
        cy.get('label[for="SearchManufacturerName"]').should($el => expect($el.text().trim()).to.equal('Manufacturer name'));
    })

    it('Acessar Catalog / Product reviews', () => {
        cy.get('p').contains('Catalog').click()
        cy.get('p').contains('Product reviews').click()
        cy.get('label[for="CreatedOnFrom"]').should($el => expect($el.text().trim()).to.equal('Created from'));
    })

    it('Acessar Catalog / Product tags', () => {
        cy.get('p').contains('Catalog').click()
        cy.get('p').contains('Product tags').click()
        cy.get('label[for="SearchTagName"]').should($el => expect($el.text().trim()).to.equal('Tag name'));
    })

    it('Acessar Catalog / Attributes / Product attributes', () => {
        cy.get('p').contains('Catalog').click()
        cy.get('p').contains('Attributes').click()
        cy.get('p').contains('Product attributes').click()
        cy.get('a[href*="Edit/1"]').should($el => expect($el.text().trim()).to.equal('Edit'));
    })

    it('Acessar Catalog / Attributes / Specification attributes', () => {
        cy.get('p').contains('Catalog').click()
        cy.get('p').contains('Attributes').click()
        cy.get('p').contains('Specification attributes').click()
        cy.get('#specificationattributegroups-grid_info').should($el => expect($el.text().trim()).to.equal('No records'));
        
    })

    it('Acessar Catalog / Attributes / Checkout attributes', () => {
        cy.get('p').contains('Catalog').click()
        cy.get('p').contains('Attributes').click()
        cy.get('p').contains('Checkout attributes').click()
        cy.get('a[href*="Edit/1"]').should($el => expect($el.text().trim()).to.equal('Edit'));
    })

    it('Acessar Sales / Orders', () => {
        cy.get('p').contains('Sales').click()
        cy.get('p').contains('Orders').click()
        cy.get('label[for="StartDate"]').should($el => expect($el.text().trim()).to.equal('Start date'));
    })
})
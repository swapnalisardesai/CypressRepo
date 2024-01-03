///<reference types="cypress"/>
describe('alerts in cypress',function(){
it('verify the js alerts',function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.on('window:alert',function(str){
        expect(str).to.eq('I am a JS Alert')
        return true
    })
    cy.get('button').contains('Click for JS Alert').click()
    cy.get('#result').should('have.text','You successfully clicked an alert')

})

it('verify confirm alert-ok',function(){
    cy.on('window:confirm',function(str){
        expect(str).to.eq('I am a JS Confirm')
        return true
    })
    cy.get('button').contains('Click for JS Confirm').click()
    cy.get('#result').should('have.text','You clicked: Ok')
})

it('verify confirm alert-cancel',function(){
    cy.on('window:confirm',function(str){
        expect(str).to.eq('I am a JS Confirm')
        return true
    })
    cy.get('button').contains('Click for JS Confirm').click()
    cy.get('#result').should('have.text','You clicked: Cancel')
})

it('verify prompt ok stub',function(){
    cy.on('window:confirm',function(win){
        cy.stub(win,'prompt').returns('swapnali')
        cy.get('button').contains('Click for JS Prompt').click()
    })
    cy.get('#result').should('have.text','You entered: swapnali')
})


})
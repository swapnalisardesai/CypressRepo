///<reference types="cypress"/>
describe('verify contactus functionality ', function () {
    it('verify contactUs functionality with valid credentials', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("swapnali")
        cy.get('input[name="last_name"]').type("sardesai")
        cy.get('input[name="email"]').type("swapnali.sardesai@gmail.com")
        cy.get('textarea[name="message"]').type("i am learning cypress")
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
})

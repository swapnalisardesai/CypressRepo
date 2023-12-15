///<reference types="cypress"/>

//testscenario
//testcase

//describe->is test scenario
//it=>test
//visit=>visiting the url
//type()=>type on input element
//cy.get=>to find web element
describe('working with web elements',function(){
    it('visit the webpage',function(){
        //visit the url
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //type into input fields
        cy.get('input[name="first_name"]').type("swapnali")//arrangement
        cy.get('input[name="last_name"]').type("sardesai")
        cy.get('input[name="email"]').type("swapnali.sardesai@gmail.com")
        cy.get('textarea[name="message"]').type("i am learning cypress")
        //clicking on submit button
        //cy.get('input[value="SUBMIT"]').click()//action
        

        //getAttribute
        cy.get('input[name="first_name"]').should('have.attr','name','first_name')
        cy.get('input[name="first_name"]').then(function(el){
            cy.log(el.prop('name'))
            cy.log(el.prop('type'))
            cy.log(el.prop('class'))
            cy.log(el.prop('placeholder'))
        })
        cy.get('input[name="first_name"]').invoke('attr','name').then(function(str){
            cy.log(str)
        })
        
        cy.get('input[name="first_name"]').invoke('prop','name').then(function(str){
            cy.log(str)
        })

        //clear 
        cy.get('input[name="first_name"]').clear()


    })
})
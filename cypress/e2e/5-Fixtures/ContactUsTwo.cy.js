///<reference types="cypress"/>
import ud from "../../fixtures/contact4.js"

describe('verify the testcase for multiple data set',function(){

    //********1st scenario********* */
    
/*it('verify the contactus with seperate data',()=>{
    ud.forEach(function(el){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type(el.firstName)
        cy.get('[name= "last_name"]').type(el.firstName)
        cy.get('[name= "email"]').type(el.email)
        cy.get('[name= "message"]').type(el.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })
})*/

//***************2nd scenario************ */

ud.forEach(function(el,index){

    it(`verify the contactus with dataset one by one...dataset-${index+1}`,function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type(el.firstName)
        cy.get('[name= "last_name"]').type(el.firstName)
        cy.get('[name= "email"]').type(el.email)
        cy.get('[name= "message"]').type(el.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })
})






})
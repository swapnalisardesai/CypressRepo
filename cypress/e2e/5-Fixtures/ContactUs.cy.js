///<reference types="cypress"/>

import ud from "../../fixtures/contact2.json"
import ue from "../../fixtures/contact3.js"

describe('verify contact us form', () => {


    let userdata = undefined
    before(function () {
        cy.fixture('contact2').then(function (users) {
            userdata = users
        })
    })


    //**************test case 1st scenario********** */
    it('validate contact us form using test case', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("swapnali")
        cy.get('[name="last_name"]').type("sardesai")
        cy.get('[name="email"]').type("swapnali.sardesai@gmail.com")
        cy.get('[name="message"]').type("I am learning js")
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })


    //**********************test case for 2nd scenario usinf userdefined object************
    let Info = {
        firstName: "swapnali",
        lastName: "sardesai",
        email: "swapnali.sardesai@gmail.com",
        message: "Welcome to Javascript."
    }

    it('validate contact us form using above userdefined object Info', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(Info.firstName)
        cy.get('[name= "last_name"]').type(Info.lastName)
        cy.get('[name= "email"]').type(Info.email)
        cy.get('[name= "message"]').type(Info.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })

    //*******************test case for 3rd scenario using fixture************
    it('validate contact us form using fixture', () => {
        cy.fixture('contact').then(function (data) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name= "first_name"]').type(data.firstName)
            cy.get('[name= "last_name"]').type(data.lastName)
            cy.get('[name= "email"]').type(data.email)
            cy.get('[name= "message"]').type(data.message)
            cy.get('[type= "submit"]').click()
            cy.get('h1').should('have.text', "Thank You for your Message!")
        })
    })


//****test case for 4th scenario for userDataOne from userData.json using before function************

    it('validate contact us form using userDataOne from userData using before function', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type(userdata.userDataOne.firstName)
        cy.get('[name= "last_name"]').type(userdata.userDataOne.lastName)
        cy.get('[name= "email"]').type(userdata.userDataOne.email)
        cy.get('[name= "message"]').type(userdata.userDataOne.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")

    })

    //****test case for 5th scenario for userDataOne using import contact2.json
    //for userDataOne
    it.only('contact us form with user data from import contact2.json', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type(ud.userDataOne.firstName)
        cy.get('[name= "last_name"]').type(ud.userDataOne.lastName)
        cy.get('[name= "email"]').type(ud.userDataOne.email)
        cy.get('[name= "message"]').type(ud.userDataOne.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
 
     })

     //for userDataTwo
    it.only('contact us form with user data from import contact2.json', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type(ud.userDataTwo.firstName)
        cy.get('[name= "last_name"]').type(ud.userDataTwo.lastName)
        cy.get('[name= "email"]').type(ud.userDataTwo.email)
        cy.get('[name= "message"]').type(ud.userDataTwo.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
 
     })



//****test case for 6th scenario using import JS file contact3.js
it('verify contact us form using import JS file contact3.js', function () {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.log(ue)
    cy.get('[name= "first_name"]').type(ue.firstName)
    cy.get('[name= "last_name"]').type(ue.lastName)
    cy.get('[name= "email"]').type(ue.email)
    cy.get('[name= "message"]').type(ue.message)
    cy.get('[type= "submit"]').click()
    cy.get('h1').should('have.text', "Thank You for your Message!")

 })



})
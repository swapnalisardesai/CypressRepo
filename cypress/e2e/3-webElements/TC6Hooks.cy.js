///<reference types="cypress"/>

before (function(){
    cy.log("i will run at the first.")
})

after(function(){
    cy.log("i will run at last")
})

beforeEach(function(){
    cy.log("i will run before each testcase")
})

afterEach(function(){
    cy.log("i will run after each test case")
})

it('testcase 1',function(){
    cy.log("test case 1 pass")
})

it('test case 2',function(){
    cy.log("test case 2 pass")
})